const CustomError = require("../extensions/custom-error");

module.exports = function getSeason(date) {
  // throw new CustomError('Not implemented');
  // remove line with error and write your code here
  const seasons = [ 'winter', 'spring', 'summer', 'autumn'];

  if (date instanceof Date) { 
    if (date.getMonth() === 11 || date.getMonth() === 0 || date.getMonth() === 1) {
      return seasons[0]
    } else if (date.getMonth() === 2 || date.getMonth() === 3 || date.getMonth() === 4) {
      return seasons[1]
    } else if (date.getMonth() === 5 || date.getMonth() === 6 || date.getMonth() === 7) {
      return seasons[2]
    } else if (date.getMonth() === 8 || date.getMonth() === 9 || date.getMonth() === 10) {
      return seasons[3]
    }

  } else if (date === undefined) {
    return 'Unable to determine the time of year!'
  } else {
    throw new Error('Error')
  }


};

try {
  throw new Error('Error')
} catch (e) {
  e.message
}
