// --- Directions
// Print out the n-th entry in the fibonacci series.
// The fibonacci series is an ordering of numbers where
// each number is the sum of the preceeding two.
// For example, the sequence
//  [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
// forms the first ten entries of the fibonacci series.
// Example:
//   fib(4) === 3

// //!my first solution worked!!
// function fib1(n) {
//   const fibArr = [0, 1];

//   for (let i = 2; i <= n; i++) {
//     let added = fibArr[fibArr.length - 2] + fibArr[fibArr.length - 1];
//     fibArr.push(added);
//   }
//   //   console.log(fibArr);
//   return fibArr[n];
// }

//!MEMOIZATION
function memoize(fn) {
  const cache = {};
  //* ...args in arguments means that i don't know how many arguments I am gonna get but take all of them and spread them into an array
  return function (...args) {
    if (cache[args]) {
      return cache[args];
    }
    //*fn is in this case slowFib and the apply method is how you get an array into the arguments
    const result = fn.apply(this, args);
    cache[args] = result;

    return result;
  };
}

function slowFib(n) {
  if (n < 2) {
    return n;
  }
  return fib(n - 1) + fib(n - 2);
}

const fib = memoize(slowFib);

module.exports = fib;
