const countryOne = 'Китай';
const countryTwo = 'Чили';
const countryThree = 'Австралию';
const countryFour = 'Индию';
const countryFive = 'Ямайку';

const deliveryPriceOne = 100;
const deliveryPriceTwo = 250;
const deliveryPriceThree = 170;
const deliveryPriceFour = 80;
const deliveryPriceFive = 120;

const countryDelivery = prompt('В какую страну необходимо доставить товар?');

if (countryDelivery === null) {
  alert('Отменено пользователем');
}

const normalizedToLowerCaseCountry = countryDelivery.toLowerCase();

switch (normalizedToLowerCaseCountry) {
  case 'китай':
    alert(`Доставка в ${countryOne} будет стоить ${deliveryPriceOne} кредитов`);
    break;

  case 'чили':
    alert(`Доставка в ${countryTwo} будет стоить ${deliveryPriceTwo} кредитов`);
    break;

  case 'австралия':
    alert(
      `Доставка в ${countryThree} будет стоить ${deliveryPriceThree} кредитов`
    );
    break;

  case 'индия':
    alert(
      `Доставка в ${countryFour} будет стоить ${deliveryPriceFour} кредитов`
    );
    break;

  case 'ямайка':
    alert(
      `Доставка в ${countryFive} будет стоить ${deliveryPriceFive} кредитов`
    );
    break;

  case '':
    alert(`Вы не ввели страну доставки`);
    break;

  default:
    alert('В вашей стране доставка не доступна');
}
