// compares 2 arrays to see if the values in array 2 are the squares of the values in array 1
// NOTE: This utilizes a frequency counter solution.

function same(arr1, arr2) {
  // checks if the length of each array is equal. 
  if (arr1.length !== arr2.length) {
    return false;
  }
  let frequencyCounter1 = {};
  let frequencyCounter2 = {};

  // creates objects which show key:value pairs to show the frequency(count) that each value occurs in the array
  for (let val of arr1) {
    frequencyCounter1[val] = (frequencyCounter1[val] || 0) + 1; 
  }
  for (let val of arr2) {
    frequencyCounter2[val] = (frequencyCounter2[val] || 0) + 1;
  }
  console.log(frequencyCounter1);
  console.log(frequencyCounter2);
  // checks if the square of each key in array 1 is in array 2
  for (let key in frequencyCounter1) {
    if (!(key ** 2 in frequencyCounter2)) {
        return false;
    }
    // checks if the count of each key and its square is the same
    if(frequencyCounter2[key ** 2] !== frequencyCounter1[key]) {
        return false;
    }
  }
  return true
}

const array1 = [5, 1, 2, 3, 3, 5];
const array2 = [1, 4, 25, 9, 25, 9];

console.log(same(array1, array2));  

