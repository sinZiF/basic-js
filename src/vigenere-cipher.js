const CustomError = require("../extensions/custom-error");


class VigenereCipheringMachine {
  encryptAlphabet = (text, symbol) => {
    const alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
    let objTxt = {};
    let symbolArr = symbol.toLowerCase().split('');
    symbolArr.forEach(cur => {
      objTxt[cur] = [];
      let firstArr = alphabet.slice(alphabet.indexOf(cur));
      let secondArr = alphabet.slice(0, alphabet.indexOf(cur));
      objTxt[cur] = [...firstArr, ...secondArr];
    })

    let numText = text.length;
    let numSymbol = symbol.length;
    while (numText > numSymbol) {
      numText = numText / numSymbol;
    }
    let repSymbol = symbol.toLowerCase().repeat(Math.ceil(numText)).split('');
    let smsText = text.toLowerCase().split('');

    let cipherSymbols = [];
    let cipherNum = 0;
    smsText.forEach(cur => {
      let num = alphabet.indexOf(cur);

      if (alphabet.includes(cur) || typeof cur === 'number') {
        cipherSymbols.push(objTxt[repSymbol[cipherNum]][num])
        cipherNum++;
      } else {
        cipherSymbols.push(cur);
      }
    })

    return cipherSymbols.join('').toUpperCase();
  }

  decryptAlphabet(cip, symbol) {
    const alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
    let objTxt = {};
    let symbolArr = symbol.toLowerCase().split('');
    symbolArr.forEach(cur => {
      objTxt[cur] = [];
      let firstArr = alphabet.slice(alphabet.indexOf(cur));
      let secondArr = alphabet.slice(0, alphabet.indexOf(cur));
      objTxt[cur] = [...firstArr, ...secondArr];
    })

    let numText = cip.length;
    let numSymbol = symbol.length;
    let numSymbols = numText / numSymbol;
    let repSymbol = symbol.toLowerCase().repeat(Math.ceil(numSymbols)).split('');
    let smsText = cip.toLowerCase().split('');

    let cipherSymbols = [];
    let cipherNum = 0;
    smsText.forEach(cur => {
      if (alphabet.includes(cur) || typeof cur === 'number') {
        let numSymbol = objTxt[repSymbol[cipherNum]].indexOf(cur)
        cipherSymbols.push(alphabet[numSymbol])
        cipherNum++;
      } else {
        cipherSymbols.push(cur);
      }
    })

    return cipherSymbols.join('').toUpperCase();
  }

  encrypt(sms, txt) {
    // throw new CustomError('Not implemented');
    // remove line with error and write your code here
    return this.encryptAlphabet(sms, txt);
  }
  decrypt(cipher, txt) {
    // throw new CustomError('Not implemented');
    // remove line with error and write your code here
    return this.decryptAlphabet(cipher, txt)
  }
}

module.exports = VigenereCipheringMachine;