const total = 100;
const ordered = 10;

const amount =
  ordered > total
    ? 'На складе недостаточно твоаров!'
    : 'Заказ оформлен, с вами свяжется менеджер';
console.log(amount);
