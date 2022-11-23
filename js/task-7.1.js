const category = document.querySelectorAll('.item');

const amountCategoryEl = () => {
  console.log(`В списке ${category.length} категории`);
};

const nameAndAmountCategory = array => {
  array.forEach(elem => {
    console.log(`Категория: ${elem.firstElementChild.textContent}`);
    console.log(
      `Количество элементов: ${elem.lastElementChild.children.length}`
    );
  });
};

amountCategoryEl(category);
nameAndAmountCategory(category);
