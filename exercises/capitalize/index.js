// --- Directions
// Write a function that accepts a string.  The function should
// capitalize the first letter of each word in the string then
// return the capitalized string.
// --- Examples
//   capitalize('a short sentence') --> 'A Short Sentence'
//   capitalize('a lazy fox') --> 'A Lazy Fox'
//   capitalize('look, it is working!') --> 'Look, It Is Working!'

//!My attempt
function capitalize1(str) {
  const newArr = str.split(" ");
  const differentArr = [];

  for (let word of newArr) {
    //*slice ,if not given a second parameter, will produce the rest of the string from the position indicated -- in this case 1 - all that comes after the first letter
    differentArr.push(`${word[0].toUpperCase()}${word.slice(1)}`);
  }

  return differentArr.join(" ");
}
// capitalize("a short sentence");

function capitalize(str) {
  let result = str[0].toUpperCase();

  for (let i = 1; i < str.length; i++) {
    if (str[i - 1] === " ") {
      result += str[i].toUpperCase();
    } else {
      result += str[i];
    }
  }

  return result;
}

module.exports = capitalize;
