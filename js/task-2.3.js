const textOne = 'The quick brown fox jumped over the lazy dog';
const textTwo = 'Google do a roll';
const textThree = 'May the force be with you';

const findLongestWord = function (string) {
  const splitSentence = string.split(' ');
  let longestWord = splitSentence[0];

  for (const word of splitSentence) {
    if (word.length > longestWord.length) {
      longestWord = word;
    }
  }

  return longestWord;
};

findLongestWord(textOne);
findLongestWord(textTwo);
findLongestWord(textThree);

console.log(findLongestWord(textOne));
console.log(findLongestWord(textTwo));
console.log(findLongestWord(textThree));
