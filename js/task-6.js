let input;
let total = 0;

for (let i = 0; input !== null; i += Number(input)) {
  input = prompt('Введите произвольное число');
  total += Number(input);
}

if (input === null) {
  alert(`Общая сумма чисел равна ${total}`);
}
