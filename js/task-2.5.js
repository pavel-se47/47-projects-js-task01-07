const textOne = 'Latest technology news';
const textTwo = 'JavaScript weekly newsletter';
const textThree = 'Get best sale offers now!';
const textFour = '[SPAM] How to earn fast money?';
const stopWordOne = 'spam';
const stopWordTwo = 'sale';

const checkForSpam = function (message) {
  let optimizedMessage;

  optimizedMessage = message.toLowerCase();

  const checkSpam =
    optimizedMessage.includes(stopWordOne) ||
    optimizedMessage.includes(stopWordTwo);

  return checkSpam;
};

checkForSpam(textOne);
checkForSpam(textTwo);
checkForSpam(textThree);
checkForSpam(textFour);

console.log(checkForSpam(textOne));
console.log(checkForSpam(textTwo));
console.log(checkForSpam(textThree));
console.log(checkForSpam(textFour));
