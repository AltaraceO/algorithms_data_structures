// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a step shape
// with N levels using the # character.  Make sure the
// step has spaces on the right hand side!
// --- Examples
//   steps(2)
//       '# '
//       '##'
//   steps(3)
//       '#  '
//       '## '
//       '###'
//   steps(4)
//       '#   '
//       '##  '
//       '### '
//       '####'

//!my initial solush --works!
function steps1(n) {
  let counter = 0;

  for (let i = 0; i < n; i++) {
    counter++;
    let second = n - counter;
    let str = "";
    for (let j = 0; j < counter; j++) {
      str += "#";
    }
    for (let k = 0; k < second; k++) {
      str += " ";
    }
    console.log(str);
  }
}

//!simplest solution
function steps2(n) {
  for (let i = 0; i < n; i++) {
    let str = "";
    for (let j = 0; j < n; j++) {
      if (j <= i) {
        str += "#";
      } else {
        str += " ";
      }
    }
    console.log(str);
  }
}

//!solution with recursion
function steps(n, row = 0, stair = "") {
  if (n === row) return;

  if (n === stair.length) {
    console.log(stair);
    steps(n, row + 1);
    return;
  }

  if (stair.length <= row) {
    stair += "#";
  } else {
    stair += " ";
  }

  steps(n, row, stair);
}

module.exports = steps;
