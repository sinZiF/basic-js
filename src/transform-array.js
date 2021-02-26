const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {
  // throw new CustomError('Not implemented');
  // remove line with error and write your code here
  // transform([1, 2, 3, '--discard-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
  const discardNext = '--discard-next';
  const discardPrev = '--discard-prev';
  const doubleNext = '--double-next';
  const doublePrev = '--double-prev';

  let newArr = arr.slice();

  let filtered = arr.filter(fn);

  function fn (cur, ind) {
    if (typeof cur === 'number') {
      // let curFl = Math.floor(cur)
      // INTEGER
      if (cur >= 0) {
        if (arr.length === 2 && arr[ind + 1] === doubleNext) {
          newArr.splice(ind, 1)
          // newArr.splice(ind + 1, 0, cur)
        }
        return cur;
      }
    } else if (typeof cur === 'string') {
      if ((cur === discardPrev && ind === 0) || (cur === doublePrev && ind === 0)) {
        // DELET FIRST EL IF THE EL STRING
        newArr.splice(ind, 1);
      } else if (cur === discardNext) {
        // DISCARD NEXT
        if (arr[ind + 2] === discardPrev) {
          if (arr.length === 2 && typeof arr[ind + 1] === 'number') {
            return newArr = [];
          }
          newArr.splice(ind, 3)
        } else if (arr.length === 1) {
          return newArr = []
        }
        newArr.splice(ind, 2);
      } else if (cur === doubleNext) {
        if (arr.length === 1) {
          return newArr = [];
        }
        // DOUBLE NEXT
        newArr.splice(ind, 1);
      } else if (cur === discardPrev) {
        // DISCARD PREV
        if (cur === discardPrev && ind === 0) {
          newArr.splice(ind, 1);
        }
        newArr.splice(ind - 1, 2);
      } else if (cur === doublePrev) {
        // if (arr[ind + 1] === 4) {
        //   newArr.splice(ind, 1);
        //   return newArr.push(5)
        // }
        // DOUBLE PREV
        newArr.splice(ind, 2);
      }
    } else if (cur === NaN) {
      newArr.splice(ind, 1)
    }

  }
  return newArr;
};