import users from './users.js';

const getSortedUniqueSkills = users => {
  return users
    .flatMap(user => user.skills)
    .filter((skill, index, array) => array.indexOf(skill) === index)
    .sort();
};

console.log(getSortedUniqueSkills(users));
// [ 'adipisicing', 'amet', 'anim', 'commodo', 'culpa', 'elit', 'ex', 'ipsum', 'irure', 'laborum', 'lorem', 'mollit', 'non', 'nostrud', 'nulla', 'proident', 'tempor', 'velit', 'veniam' ]
