// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {
  let newObj = {};
  //*this is a counter basically looping through obj and this will be the highest
  let max = 0;
  //*this will be the character that appeaser most
  let maxChar = "";

  for (let letter of str) {
    //*using Ternary
    // newObj[letter] = newObj[letter] ? newObj[letter] + 1 : 1;

    //*using BOOLEAN
    newObj[letter] = newObj[letter]++ || 1;
  }

  //!INSIDE A FOR IN LOOP CHAR IS THE KEY
  for (let char in newObj) {
    if (newObj[char] > max) {
      max = newObj[char];
      maxChar = char;
    }
  }

  return maxChar;
}

maxChar("abcccccccd");

module.exports = maxChar;
