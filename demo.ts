import { ValidWords } from "./spellcheck";

// This is how you use the spell checker. Put your own string in here (lowercase
// only) and if it's spelled correctly, this file will typecheck. Otherwise
// you'll get an error like `Type '"valid"' is not assignable to type
// '"invalid"'`
const result: ValidWords<"the qxick brown fox jumped over the lazy dog."> =
  "valid";
