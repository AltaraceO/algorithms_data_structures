// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

function reverseInt(n) {
  const toStr = parseInt(n.toString().split("").reverse().join(""));

  //*turn it back to negative
  //   if (n < 0) {
  //     return toStr * -1;
  //   }

  //   return toStr;

  //*To spare the 'if' times it by Math.sign()

  //*if 'n' is negative the result will be *-1   or   *+1 if positive
  return toStr * Math.sign(n);
}

module.exports = reverseInt;
