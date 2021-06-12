let template1 = "The *adjectives* brown *nouns* *adverbs* *verbs* the " +
"*adjectives* yellow *nouns*, who *adverbs* *verbs* his *nouns* and looks around.";
let template2 = "The *nouns* *verbs* the *nouns*'s *nouns*."

//all word arrays must be same length.
const MADLIB_VOCAB = {
  nouns: ["cat", "dog", "gopher", "ball", "fireman"],
  adjectives: ["lazy", "fiesty", "wild", "happy", "frantic"],
  verbs: ["bites", "jumps", "sniffs", "boops", "sweeps"],
  adverbs: ["lazily", "quickly", "silently", "harshly", "gently"]
};

const MADLIB_VOCAB_KEYS = Object.keys(MADLIB_VOCAB);
const randomIndex = MADLIB_VOCAB.nouns.length;

console.log(madlibs(template1) + "\n");
// The "sleepy" brown "cat" "noisily"
// "licks" the "sleepy" yellow
// "dog", who "lazily" "licks" his
// "tail" and looks around.

console.log(madlibs(template1) + "\n");
// The "hungry" brown "cat" "lazily"
// "licks" the "noisy" yellow
// "dog", who "lazily" "licks" his
// "leg" and looks around.

console.log(madlibs(template2) + "\n");      // The "fox" "bites" the "dog"'s "tail".

console.log(madlibs(template2) + "\n");      // The "cat" "pats" the "cat"'s "head".

function madlibs(template) {
  MADLIB_VOCAB_KEYS.forEach(key => {
    while (template.includes(`*${key}*`)) {
      template = template.replace(`*${key}*`, MADLIB_VOCAB[key][Math.floor(Math.random() * randomIndex)]);
    }
  });
  return template;
}