// const nums = ["e", "r", "e", "r", "d", "d", "x", "e", "q", "a", "s", "a"];

// const numObj = {};

// for (const num of nums) {
//   numObj[num] = numObj[num] + 1 || 1;
// }

// console.log(numObj);

// "scripts": {
//   "start": "react-scripts start",
//   "build": "react-scripts build",
//   "test": "react-scripts test",
//   "eject": "react-scripts eject"
// },

//!palindrome

// const x = 1001;

// const isPalindrome = function (x) {
//   const toStr = x.toString().split("");
//   const backwards = [];
//   console.log(toStr.length);
//   const theLength = toStr.length;
//   for (let i = 0; i < theLength; i++) {
//     console.log("full", i, toStr);
//     let a = toStr.pop();
//     console.log(a);
//     backwards.push(a);
//   }
//   console.log("back", backwards);
//   console.log(typeof x.toString());
//   console.log(typeof backwards.join(""));
//   if (backwards.join("") === x.toString()) {
//     return true;
//   } else {
//     return false;
//   }
// };
// // isPalindrome();

// console.log(isPalindrome(x));

//! Roman to Integer

const I = 1;
const V = 5;
const X = 10;
const L = 50;
const C = 100;
const D = 500;
const M = 1000;

// I - V & X

// X - L & C

// C - D & M

var romanToInt = function (s) {
  let sum;
  for (let i = 0; i < s.length; i++) {
    sum = sum + s[i];
  }
  console.log("test", sum);
};

romanToInt(`LVIII`);
