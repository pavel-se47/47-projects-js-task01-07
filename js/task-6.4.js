import users from './users.js';

const getInactiveUsers = users => {
  return users.filter(user => user.isActive !== true);
};

console.log(getInactiveUsers(users)); // [объект Moore Hensley, объект Ross Vazquez, объект Blackburn Dotson]
