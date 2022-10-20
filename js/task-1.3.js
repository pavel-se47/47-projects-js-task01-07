const ADMIN_PASSWORD = 'jqueryismyjam';
let message;

const auth = prompt('Введите пароль');

if (auth === null) {
  message = 'Отменено пользователем!';
} else if (auth === ADMIN_PASSWORD) {
  message = 'Добро пожаловать!';
} else {
  message = 'Доступ запрещен, неверный пароль!';
}
alert(message);
