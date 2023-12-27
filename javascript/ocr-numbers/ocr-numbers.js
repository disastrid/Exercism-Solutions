//
// This is only a SKELETON file for the 'OCR Numbers' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

const ENCODED_NUMBERS = [
  [' _ ', '| |', '|_|'], // 0
  ['   ', '  |', '  |'], // 1
  [' _ ', ' _|', ' |_'], // 2
  [' _ ', ' _|', ' _|'], // 3
  ['   ', '|_|', '  |'], // 4
  [' _ ', '|_ ', ' _|'], // 5
  [' _ ', '|_ ', '|_|'], // 6
  [' _ ', '  |', '  |'], // 7
  [' _ ', '|_|', '|_|'], // 8
  [' _ ', '|_|', ' _|']  // 9
  ];

export const convert = lines => {
  const digit = ENCODED_NUMBERS;
  if (typeof lines !== 'string') throw 'ERROR: The input was not a string!';
  for (let i = 0; i < lines.length; i++) {
    lines[i].slice('2');
  }
  console.log(lines[0]);
  if (lines[0] == ' _ ') {
    return 0;
  } else {
    return 1;
  }
};
