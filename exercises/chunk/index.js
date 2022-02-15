// --- Directions
// Given an array and chunk size, divide the array into many subarrays
// where each subarray is of length size
// --- Examples
// chunk([1, 2, 3, 4], 2) --> [[ 1, 2], [3, 4]]
// chunk([1, 2, 3, 4, 5], 2) --> [[ 1, 2], [3, 4], [5]]
// chunk([1, 2, 3, 4, 5, 6, 7, 8], 3) --> [[ 1, 2, 3], [4, 5, 6], [7, 8]]
// chunk([1, 2, 3, 4, 5], 4) --> [[ 1, 2, 3, 4], [5]]
// chunk([1, 2, 3, 4, 5], 10) --> [[ 1, 2, 3, 4, 5]]

//!My first attempt didn't work!:(
// function chunk1(array, size) {
//   let mainArr = [];
//   const length = array.length;
//   for (let j = 0; j < length; j++) {
//     let subArr = [];
//     for (let i = 0; i < size; i++) {
//       if (array[1]) {
//         const firstItem = array[0];
//         subArr.push(firstItem);
//         array.shift();
//         console.log(array);
//       }
//     }
//     mainArr.push(subArr);
//     subArr = [];
//   }
//   console.log(mainArr);
//   return mainArr;
// }

//!looking through the array and checking if the new container array has an 'inner-array' and what length it is?

//!then either creating a new arr with the current number || adding a number to the existing arr if it is smaller than size
function chunk2(array, size) {
  const mainArr = [];

  for (let num of array) {
    const last = mainArr[mainArr.length - 1];

    if (!last || last.length === size) {
      mainArr.push([num]);
    } else {
      last.push(num);
    }
  }

  return mainArr;
}

function chunk(array, size) {
  const chunked = [];
  let index = 0;

  while (index < array.length) {
    //*index starts off at "0" and will go on till 2 -- then when index is = to '2'  the slice will go on from 2 to 2 + size -- then 2 will be added to index making it 4

    chunked.push(array.slice(index, index + size));
    index += size;
  }
  return chunked;
}

module.exports = chunk;
