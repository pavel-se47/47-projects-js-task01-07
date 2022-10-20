const logins = ['Mango', 'robotGoogles', 'Poly', 'Aj4x1sBozz', 'qwerty123'];
let message;

console.log(addLogin(logins, 'Ajax')); // 'Логин успешно добавлен!'
console.log(addLogin(logins, 'robotGoogles')); // 'Такой логин уже используется!'
console.log(addLogin(logins, 'Zod')); // 'Ошибка! Логин должен быть от 4 до 16 символов'
console.log(addLogin(logins, 'jqueryisextremelyfast')); // 'Ошибка! Логин должен быть от 4 до 16 символов'

function isLoginValid(login) {
  const checkLoginLength =
    login?.length > 3 && login?.length < 16 ? true : false;

  return checkLoginLength;
}

function isLoginUnique(allLogins, login) {
  const hasLogin = allLogins?.includes(login);
  if (hasLogin) {
    false;
  } else {
    true;
  }

  return hasLogin;
}

function addLogin(allLogins, login) {
  if (isLoginValid(login) === false) {
    message = 'Ошибка! Логин должен быть от 4 до 16 символов!';
    // console.log(message);
    return message;
  }
  if (isLoginUnique(allLogins, login) === true) {
    message = 'Такой логин уже используется!';
    // console.log(message);
    return message;
  }
  allLogins.push(login);
  message = 'Логин успешно добавлен!';
  // console.log(message);
  return message;
}

isLoginValid('Ajax');
isLoginValid('robotGoogles');
isLoginValid('Zod');
isLoginValid('jqueryisextremelyfast');

isLoginUnique(logins, 'Ajax');
isLoginUnique(logins, 'robotGoogles');
isLoginUnique(logins, 'Zod');
isLoginUnique(logins, 'jqueryisextremelyfast');

addLogin(logins, 'Ajax');
addLogin(logins, 'robotGoogles');
addLogin(logins, 'Zod');
addLogin(logins, 'jqueryisextremelyfast');

console.log(logins);
