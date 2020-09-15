COMMENTHERE;
export type ValidWords<T extends string> = T extends ""
  ? "valid"
  : T extends WORDSHERE
  ? ValidJoiners<Rest>
  : "invalid";

type ValidJoiners<T extends string> = T extends ""
  ? "valid"
  : T extends JOINERSHERE
  ? ValidWords<Rest> | ValidJoiners<Rest>
  : "invalid";
