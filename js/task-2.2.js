const messageOne = 'Proin sociis natoque et magnis parturient montes mus';
const messageTwo = 'Donec orci lectus aliquam est magnis';
const pricePerWordOne = 10;
const pricePerWordTwo = 20;
const pricePerWordThree = 40;

const calculateEngravingPrice = function (message, pricePerWord) {
  const splitSentence = message.split(' ');
  return splitSentence.length * pricePerWord;
};

calculateEngravingPrice(messageOne, pricePerWordOne);
calculateEngravingPrice(messageOne, pricePerWordTwo);
calculateEngravingPrice(messageTwo, pricePerWordThree);
calculateEngravingPrice(messageTwo, pricePerWordTwo);

console.log(calculateEngravingPrice(messageOne, pricePerWordOne));
console.log(calculateEngravingPrice(messageOne, pricePerWordTwo));
console.log(calculateEngravingPrice(messageTwo, pricePerWordThree));
console.log(calculateEngravingPrice(messageTwo, pricePerWordTwo));
