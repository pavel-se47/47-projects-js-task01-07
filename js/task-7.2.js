const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];

const addNewElementList = array => {
  array.forEach(elem => {
    const createListEl = document.createElement('li');
    createListEl.textContent += elem;

    const addListEl = document.querySelector('#ingredients');
    addListEl.append(createListEl);
  });
};

addNewElementList(ingredients);
