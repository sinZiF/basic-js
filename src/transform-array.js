const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {
  // throw new CustomError('Not implemented');
  // remove line with error and write your code here
  const discardNext = '--discard-next';
  const discardPrev = '--discard-prev';
  const doubleNext = '--double-next';
  const doublePrev = '--double-prev';

  const resolve = [];

  function fn(cur, ind) {
    if (typeof cur === 'number') {
      if ((arr[ind - 1]  !== discardNext || arr[ind + 1] !== discardPrev) &&
        (arr[ind - 1] !== discardNext && arr[ind + 1] !== doublePrev) &&
        (arr[ind -1] !== discardNext && arr[ind + 1] !== doublePrev)&&
        (arr[ind - 1] !== doublePrev && arr[ind + 1] !== discardPrev)) {
        resolve.push(cur)
      } else if ((arr[ind - 1] === doubleNext && arr[ind + 1] === doublePrev)) {
        resolve.push(cur)
      } else if (arr[ind -1] === doublePrev) {
        resolve.push(cur)
      }
    } else if (typeof cur === 'string' || cur === true || cur === Infinity || cur === false) {
      if (cur === doubleNext && arr[arr.length - 1] !== doubleNext) {
        resolve.push(arr[ind + 1])
      } else if (cur === doublePrev && arr[0] !== doublePrev) {
        if (arr[ind - 2] !== discardNext) {
          resolve.push(arr[ind - 1])
        }
      } else if (cur !== discardPrev && cur !== discardNext && cur !== doublePrev && cur !== doubleNext){
        resolve.push(cur)
      }
    } else {
        resolve.push(cur)
    }

  }
  
  try {
    if (Array.isArray(arr)) {
      arr.filter(fn);
      return resolve
    } else {
      throw new Error('Error')
    }
  } catch (e) {
    e.message
    return resolve = [];
  }
};