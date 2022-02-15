// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

function anagrams2(stringA, stringB) {
  //*this RegEx will remove anything that is not a-zA-Z
  const first = stringA.replace(/[^\w]/g, "").toLowerCase();
  const second = stringB.replace(/[^\w]/g, "").toLowerCase();

  if (first.length !== second.length) {
    return false;
  }

  const firstObj = {};
  const secondObj = {};

  for (let letter of first) {
    firstObj[letter] = firstObj[letter] + 1 || 1;
  }
  for (let letter of second) {
    secondObj[letter] = secondObj[letter] + 1 || 1;
  }

  console.log(firstObj);
  console.log(secondObj);
}
// anagrams("rail safety", "fairy tales");

//!One that works with a comparison -- FOR IN
function anagrams3(stringA, stringB) {
  const first = buildCharMap(stringA);
  const second = buildCharMap(stringB);

  if (Object.keys(first).length !== Object.keys(second).length) {
    return false;
  }

  for (let char in first) {
    if (first[char] !== second[char]) {
      return false;
    }
  }

  return true;
}

//*instead of 2 for loops build a helper function
function buildCharMap(str) {
  const pureChars = str.replace(/[^\w]/g, "").toLowerCase();

  const newObj = {};

  for (let letter of pureChars) {
    newObj[letter] = newObj[letter] + 1 || 1;
  }

  return newObj;
}

//!using SORT
function anagrams(stringA, stringB) {
  //   const first = cleanUp(stringA);
  //   const second = cleanUp(stringB);
  //   if (cleanUp(stringA) !== cleanUp(stringB)) {
  //     return false;
  //   }
  //   return true;
  //*will either be true or false!!

  return cleanUp(stringA) === cleanUp(stringB);
}

function cleanUp(str) {
  //*at the end the SPLIT turns the string into an array that can then be SORTED and JOINED back into a string!
  return str.replace(/[^\w]/g, "").toLowerCase().split("").sort().join("");
}

module.exports = anagrams;
