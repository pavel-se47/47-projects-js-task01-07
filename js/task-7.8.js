const boxesAccess = document.querySelector('#boxes');
const controlsAccess = document.querySelector('#controls');
const renderAccess = document.querySelector('[data-action="render"]');
const destroyAccess = document.querySelector('[data-action="destroy"]');

let widthDiv = 20;
let heightDiv = 20;

const createBoxes = amount => {
  for (let i = 0; i < amount; i += 1) {
    const addNewDiv = document.createElement('div');
    boxesAccess.append(addNewDiv);
    widthDiv += 10;
    heightDiv += 10;
    addNewDiv.style.backgroundColor = `rgb(
        ${getRandom(0, 255)},
        ${getRandom(0, 255)},
        ${getRandom(0, 255)})`;
    addNewDiv.style.width = `${widthDiv}px`;
    addNewDiv.style.height = `${heightDiv}px`;
  }
};

const getRandom = (min, max) => Math.ceil(Math.random() * (max - min) + min);

renderAccess.addEventListener('click', () => {
  createBoxes(`${controlsAccess.firstElementChild.value}`);
});

destroyAccess.addEventListener('click', () => {
  boxesAccess.innerHTML = '';
});
