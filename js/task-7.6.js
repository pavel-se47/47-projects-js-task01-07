const validationInputAccess = document.querySelector('#validation-input');
const lengthEl = validationInputAccess.getAttribute('data-length');

const validation = () => {
  validationInputAccess.addEventListener('blur', () => {
    validationInputAccess.value.length !== Number(lengthEl)
      ? validationInputAccess.classList.add('invalid') ||
        validationInputAccess.classList.remove('valid')
      : validationInputAccess.classList.add('valid') ||
        validationInputAccess.classList.remove('invalid');
  });
};

validation();
