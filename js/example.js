const reverseString = string => {
  let newString = '';
  for (let i = 0; i < string.length; i += 2) {
    if (string[i + 1] === undefined) {
      newString += string[i];
      break;
    }
    newString += string[i + 1] + string[i];
  }
  return newString;
};

console.log(reverseString('movies'));
//omivse

console.log(reverseString('films'));
//ifmls
