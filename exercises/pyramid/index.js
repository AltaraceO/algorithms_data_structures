// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a pyramid shape
// with N levels using the # character.  Make sure the
// pyramid has spaces on both the left *and* right hand sides
// --- Examples
//   pyramid(1)
//       '#'
//   pyramid(2)
//       ' # '
//       '###'
//   pyramid(3)
//       '  #  '
//       ' ### '
//       '#####'

function pyramid1(n) {
  const jLoop = n * 2 - 1;
  //*Mid-POINT
  const midPoint = Math.floor(jLoop / 2);
  for (let i = 0; i < n; i++) {
    let str = "";
    for (let j = 0; j < jLoop; j++) {
      if (midPoint - i <= j && midPoint + i >= j) {
        str += "#";
      } else {
        str += " ";
      }
    }
    console.log(str);
  }
}

//! recursion solution
function pyramid(n, row = 0, str = "") {
  if (row === n) {
    return;
  }

  if (str.length === n * 2 - 1) {
    console.log(str);
    return pyramid(n, row + 1);
  }
  const midPoint = Math.floor((2 * n - 1) / 2);

  let add;
  if (midPoint - row <= str.length && midPoint + row >= str.length) {
    add = "#";
  } else {
    add = " ";
  }

  pyramid(n, row, str + add);
}

pyramid(3);

// pyramid(10);

module.exports = pyramid;
