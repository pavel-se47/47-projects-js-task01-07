let input;
const numbers = [];
let total = 0;

for (let i = 0; input !== null; i += Number(input)) {
  input = prompt('Введите произвольное число');
  const checkNan = Number.isNaN(Number(input));
  console.log(checkNan);

  if (input === null) {
    alert(`Общая сумма чисел равна ${total}`);
  } else if (checkNan === true) {
    alert('Было введено не число, попробуйте еще раз');
  } else {
    numbers.push(input);
    total += Number(input);
  }
}
