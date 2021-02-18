const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
  // throw new CustomError('Not implemented');
  // remove line with error and write your code here (['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'

  let firstLetters = '';
  const txtUC = [];
  if (Array.isArray(members)) {
    members.forEach(cur => {
      if (typeof cur === 'string' && cur.length !== 0) {
        txtUC.push(cur.trim().toUpperCase())
      }
    });
    txtUC.sort();

    txtUC.forEach(cur =>  firstLetters += cur[0]);

    return firstLetters;
  } 

  return false;
};
