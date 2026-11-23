// The Learn section: articles written and published in the Warcryer service's admin, fetched at build time
// by tools/sync-learn.mjs into learn.json. Their text arrives already drawn as HTML (escaped text and a
// fixed set of tags, made by the same code that drew the editor's preview).
import data from "./learn.json";

export type LearnCategory = { key: string; name: string; slug: string; path: string; description: string };
export type LearnArticle = {
  id: number;
  categoryKey: string;
  slug: string;
  path: string;
  title: string;
  description: string;
  promise: string;
  html: string;
  toc: { anchor: string; title: string }[];
  faq: { question: string; answer: string }[];
  words: number;
  firstPublishedAt: string;
  publishedAt: string;
  drafted: boolean;
  related: string[];
};

export const ARTICLES = data.articles as LearnArticle[];
export const MOVED = data.moved as { from: string; to: string }[];
/** The categories that have an article, in their fixed order. */
export const CATEGORIES = (data.categories as LearnCategory[]).filter((c) => ARTICLES.some((a) => a.categoryKey === c.key));
export const HAS_LEARN = ARTICLES.length > 0;

export const categoryOf = (a: LearnArticle): LearnCategory => CATEGORIES.find((c) => c.key === a.categoryKey)!;
export const articlesIn = (c: LearnCategory): LearnArticle[] => ARTICLES.filter((a) => a.categoryKey === c.key);
export const articleAt = (path: string): LearnArticle | undefined => ARTICLES.find((a) => a.path === path);

const DAY = new Intl.DateTimeFormat("en-GB", { day: "numeric", month: "long", year: "numeric", timeZone: "UTC" });
export const day = (iso: string): string => DAY.format(new Date(iso));
/** At a reading pace of about 220 words a minute. */
export const minutes = (a: LearnArticle): number => Math.max(1, Math.round(a.words / 220));
/** Shown as new for three weeks. */
export const isNew = (a: LearnArticle, now = Date.now()): boolean => now - new Date(a.firstPublishedAt).getTime() < 21 * 86_400_000;
