// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

//*My initial attempt -- worked!
function reverse1(str) {
  const splitStr = str.split("");
  const reverse = [];
  const strLng = str.length;
  for (let i = 0; i < strLng; i++) {
    const item = splitStr.pop();
    reverse.push(item);
  }
  return reverse.join("");
}

//* Array function - reverse()
function reverse2(str) {
  //*takes the string and turns to array like I also did!
  //   const arr = str.split("");
  //   arr.reverse();
  //   return arr.join("");
  //*The above cleaned up
  return str.split("").reverse().join("");
}

function reverse3(str) {
  //*make sure not CONST as it changes with each iteration of the for of loop
  let reversed = "";

  for (let char of str) {
    reversed = char + reversed;
  }

  return reversed;
}

function reverse(str) {
  //*Reduce takes in 2! arguments - 1- arrow function 2- the starting value ie. ''
  //* Inside the arrow function, the first argument is the 1st thing that will be looped on each iteration the second is the newly introduced item to be iterated over with each loop... ie the next item in the string
  //   return str.split("").reduce((reversed, character) => {
  //     return character + reversed;
  //   }, "");
  //*shorter & clearer

  return str.split("").reduce((rev, char) => char + rev, "");
}

module.exports = reverse;
