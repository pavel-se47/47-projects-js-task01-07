const valueAccess = document.querySelector('#value');
const incrementBtnAcess = document.querySelector('[data-action="increment"]');
const decrementBtnAcess = document.querySelector('[data-action="decrement"]');

let counterValue = Number(valueAccess.textContent);

const increment = () => {
  counterValue += 1;
  valueAccess.textContent = counterValue;
};

const decrement = () => {
  counterValue -= 1;
  valueAccess.textContent = counterValue;
};

incrementBtnAcess.addEventListener('click', increment);
decrementBtnAcess.addEventListener('click', decrement);
