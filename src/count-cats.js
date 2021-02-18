const CustomError = require("../extensions/custom-error");

module.exports = function countCats(matrix) {
  // throw new CustomError('Not implemented');
  // remove line with error and write your code here [ [0, 1, '^^'], [0, '^^', 2], ['^^', 1, 2] ] 
  let arr = matrix.length;
  let num = 0;
  for (let i = 0; i < matrix.length; i++) {
    matrix[i].forEach(cur => {
      if (cur === '^^') {
        num++;
      }
    })
  }
  return num;

};
