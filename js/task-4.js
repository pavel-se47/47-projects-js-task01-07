const credits = 23580;
const pricePerDroid = 3000;
let totalPrice;

const amountDroid = prompt('Какое количество дроидов Вы хотите приобрести?');

const priceDroid =
  amountDroid === null
    ? 'Отменено пользователем!'
    : (totalPrice = pricePerDroid * amountDroid);

const purchaseAmount =
  priceDroid > credits
    ? alert('Недостаточно средств на счету!')
    : alert(
        `Вы купили ${amountDroid} дроида(ов), на счету осталось ${
          credits - priceDroid
        } кредитов.`
      );
