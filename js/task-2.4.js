const sentenceOne = 'Curabitur ligula sapien, tincidunt non.';
const sentenceTwo = 'Vestibulum facilisis, purus nec pulvinar iaculis.';
const sentenceThree = 'Curabitur ligula sapien.';
const sentenceFour =
  'Nunc sed turpis. Curabitur a felis in nunc fringilla tristique.';
const maxLength = 40;

const formatString = function (string) {
  let formatSentence;
  for (let i = 0; i <= string.length; i += 1) {
    if (string.length < maxLength) {
      return string;
    }
    formatSentence = string.slice(0, 40);
    return `${formatSentence}...`;
  }
};

formatString(sentenceOne);
formatString(sentenceTwo);
formatString(sentenceThree);
formatString(sentenceFour);

console.log(formatString(sentenceOne));
console.log(formatString(sentenceTwo));
console.log(formatString(sentenceThree));
console.log(formatString(sentenceFour));
