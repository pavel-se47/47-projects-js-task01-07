const nameInputAccess = document.querySelector('#name-input');
const nameOutputAccess = document.querySelector('#name-output');

nameInputAccess.addEventListener('input', event => {
  event.currentTarget.value
    ? (nameOutputAccess.textContent = event.currentTarget.value)
    : (nameOutputAccess.textContent = 'незнакомец');
});
