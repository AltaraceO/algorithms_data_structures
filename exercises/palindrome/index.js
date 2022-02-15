// --- Directions
// Given a string, return true if the string is a palindrome
// or false if it is not.  Palindromes are strings that
// form the same word if it is reversed. *Do* include spaces
// and punctuation in determining if the string is a palindrome.
// --- Examples:
//   palindrome("abba") === true
//   palindrome("abcdefg") === false

//!My first attempt
function palindrome1(str) {
  let reversed = "";
  for (let letter of str) {
    reversed = letter + reversed;
  }

  if (reversed === str) {
    return true;
  }

  return false;
}

//!using split and reverse
function palindrome2(str) {
  const reversed = str.split("").reverse().join("");

  //*this will produce a boolean value
  return reversed === str;
}

function palindrome(str) {
  //*Remember to return the every as i would with map. and return the callback inside every
  return str.split("").every((char, i) => {
    //*str length -i - so that it changes with every loop and gets closer to the middle from the  other side -- and -1 because the index starts at zero but the length is counted with an initial 1
    return char === str[str.length - i - 1];
  });
}

palindrome("abc");

module.exports = palindrome;
