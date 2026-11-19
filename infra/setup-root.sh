#!/usr/bin/env bash
# Puts the Warcryer website on warcryer.org. Run once, in your own SSH
# terminal (sudo asks for your password):
#
#   sudo bash /home/alliancevoice/warcryer-site/infra/setup-root.sh
#
# What it does, in order, stopping at the first thing that fails:
#   1. makes /var/www/warcryer.org (owned by alliancevoice, so later deploys
#      need no sudo) and nginx's small cache folder for /api/status and
#      /api/release;
#   2. puts the site there (infra/deploy.sh, run as alliancevoice);
#   3. installs the nginx site file, at first with a stand-in certificate
#      (Cloudflare accepts it in its "Full" mode), and reloads nginx. From
#      here warcryer.org shows the Warcryer site instead of another site;
#   4. asks Let's Encrypt for a certificate for warcryer.org and
#      www.warcryer.org. Works while the names are proxied by Cloudflare;
#   5. switches to that certificate and reloads nginx;
#   6. checks the result.
#
# A reload does not drop anyone: the other sites, the voice app and players
# in voice carry on. Safe to run again.
# To take the site down: sudo rm /etc/nginx/sites-enabled/warcryer.org && sudo systemctl reload nginx
set -euo pipefail
OWNER=alliancevoice
REPO=/home/$OWNER/warcryer-site
WWW=/var/www/warcryer.org
CACHE=/var/cache/nginx/warcryer
AVAIL=/etc/nginx/sites-available/warcryer.org
ENABLED=/etc/nginx/sites-enabled/warcryer.org
INC=/etc/nginx/warcryer-cert.conf
ACME=/var/www/voice-acme
LIVE=/etc/letsencrypt/live/warcryer.org
STANDIN='ssl_certificate     /etc/ssl/certs/ssl-cert-snakeoil.pem;\nssl_certificate_key /etc/ssl/private/ssl-cert-snakeoil.key;\n'

[ "$(id -u)" = 0 ] || { echo "Run it with sudo." >&2; exit 1; }

reload_or_undo() { # $1: what to put back if the configuration does not load
  if nginx -t 2>/dev/null; then
    systemctl reload nginx
  else
    nginx -t || true
    eval "$1"
    echo "The nginx configuration did not load; it was put back and nginx left as it was." >&2
    exit 1
  fi
}

echo "== 1. folders"
install -d -o "$OWNER" -g "$OWNER" -m 755 "$WWW" "$WWW/releases"
install -d -o www-data -g www-data -m 700 "$CACHE"
mkdir -p "$ACME"

echo "== 2. the site"
if [ -e "$WWW/current" ]; then
  echo "already there: $(readlink "$WWW/current")"
else
  sudo -u "$OWNER" -H bash -lc "cd '$REPO' && bash infra/deploy.sh"
fi

echo "== 3. nginx"
command -v certbot >/dev/null || { apt-get update -qq && apt-get install -y certbot; }
[ -f /etc/ssl/certs/ssl-cert-snakeoil.pem ] || { apt-get install -y ssl-cert && make-ssl-cert generate-default-snakeoil; }
[ -f "$INC" ] || printf "$STANDIN" > "$INC"
had_site=0; [ -f "$AVAIL" ] && { had_site=1; cp -a "$AVAIL" "$AVAIL.bak"; }
install -m 644 "$REPO/infra/nginx/warcryer.org.conf" "$AVAIL"
ln -sfn "$AVAIL" "$ENABLED"
if [ $had_site = 1 ]; then undo="cp -a '$AVAIL.bak' '$AVAIL'"; else undo="rm -f '$ENABLED' '$AVAIL'"; fi
reload_or_undo "$undo"

echo "== 4. a certificate from Let's Encrypt"
if [ ! -f "$LIVE/fullchain.pem" ]; then
  if [ -n "${EMAIL:-}" ]; then WHO=(-m "$EMAIL"); else WHO=(--register-unsafely-without-email); fi
  certbot certonly --webroot -w "$ACME" -d warcryer.org -d www.warcryer.org --cert-name warcryer.org \
    --non-interactive --agree-tos "${WHO[@]}" --deploy-hook "systemctl reload nginx"
else
  echo "already there: $LIVE"
fi

echo "== 5. use it"
cp -a "$INC" "$INC.bak"
printf 'ssl_certificate     %s/fullchain.pem;\nssl_certificate_key %s/privkey.pem;\n' "$LIVE" "$LIVE" > "$INC"
reload_or_undo "cp -a '$INC.bak' '$INC'"

echo "== 6. checks"
echo -n "certificate on this machine: "
echo | openssl s_client -connect 127.0.0.1:443 -servername warcryer.org 2>/dev/null | openssl x509 -noout -subject -enddate | tr '\n' ' '; echo
for p in / /guides/members/ /download/ /api/status /api/release /no-such-page/; do
  echo -n "  $p on this machine: "
  curl -sk -o /dev/null -m 15 -w '%{http_code}\n' --resolve "warcryer.org:443:127.0.0.1" "https://warcryer.org$p" || true
done
echo -n "  title through Cloudflare: "
curl -s -m 15 https://warcryer.org/ | grep -o '<title>[^<]*</title>' || echo "(could not read it)"
echo -n "renewal is scheduled: "
systemctl is-enabled certbot.timer 2>/dev/null || echo "no certbot.timer; check how certbot renews on this machine"
cat <<'NEXT'
Expected above: 200 for the pages and both /api/ addresses, 404 for
/no-such-page/, and the title "Warcryer: voice that follows the chain of
command".

Left to do by hand, in Cloudflare, for warcryer.org:
  SSL/TLS > Overview: set the mode to "Full (strict)". The server now has a
  real certificate, so Cloudflare can check it. ("Automatic" is fine too.)
NEXT
