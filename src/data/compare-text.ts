// Sentences the comparison pages build from a list of product names.
import { DISCORD } from "./site";
import { CHECKED } from "./compare";

export function trademarkNote(names: string[]): string {
  const many = names.length > 1;
  const marks = many ? `${names.slice(0, -1).join(", ")} and ${names[names.length - 1]}` : names[0];
  const verb = many ? "are trademarks of their owners" : "is a trademark of its owner";
  const them = many ? "them" : "it";
  const theirs = many ? "their" : "its";
  return `${marks} ${verb}, named here only for comparison. Warcryer is not affiliated with ${them}. What is said about ${them} on this page was checked against ${theirs} own published pages on ${CHECKED}; if something here is wrong or out of date, tell us on the <a href="${DISCORD}">Warcryer Discord</a> and it will be corrected.`;
}
