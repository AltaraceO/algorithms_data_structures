// --- Directions
// Write a function that returns the number of vowels
// used in a string.  Vowels are the characters 'a', 'e'
// 'i', 'o', and 'u'.
// --- Examples
//   vowels('Hi There!') --> 3
//   vowels('Why do you ask?') --> 4
//   vowels('Why?') --> 0

function vowels1(str) {
  let counter = 0;
  const vowels = ["a", "e", "i", "o", "u"];

  for (let letter of str) {
    for (let item of vowels) {
      if (letter.toLowerCase() === item) {
        counter = counter++;
      }
    }
  }
  return counter;
}

//!Solution using includes, I tried doing this but i didn't think of comparing the vowels arr to the STR instead of the other way around
function vowels2(str) {
  let counter = 0;
  const theVowels = ["a", "e", "i", "o", "u"];

  for (let char of str.toLowerCase()) {
    if (theVowels.includes(char)) {
      counter++;
    }
  }

  return counter;
}

//!Using RegEx
function vowels(str) {
  const matches = str.match(/[aeiou]/gi);
  return matches ? matches.length : 0;
}

// vowels("how are are");

module.exports = vowels;
