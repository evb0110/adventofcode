const fs = require('fs');

const keypad = fs
    .readFileSync('keypad2.txt', 'utf-8')
    .replace(/  /g, '&')
    .replace(/ /g, '')
    .split('\n')
    .reverse()
    ;

const keypadObject = {};
const keypadReverseObject = {};

keypad.forEach((row, j) => {
  const elems = row.split('');
  elems.forEach((elem, i) => {
    const node = [i, j];
    if (elem == '&') return;
    keypadObject[elem] = [i, j];
    keypadReverseObject[[i, j].toString()] = elem;
  })
})

const numberToNode = (number) => {
  return [...keypadObject[number]];
      // this spread is crucial
      // without it mutating node in the main program
      // spoils all the keypad data in this module
}

const nodeToNumber = (node) => {
  return keypadReverseObject[node.toString()];
}

module.exports = {
  numberToNode,
  nodeToNumber,
}