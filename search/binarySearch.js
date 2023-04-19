// search for an item in an array and return the index.  assume a sorted index.

function binarySearch(arr, item) {
  let left = 0;
  let right = arr.length - 1;
  let middle = Math.floor((right + left) / 2);
  if ( (item > arr[arr.length - 1]) || (item < arr[0]) ) return -1;
  while (arr[middle] !== item && left <= right) {
    if (item < arr[middle]) {
      right = middle - 1;
    } else {
      left = middle + 1;
    }
    middle = Math.floor((left + right) / 2);
  }
  return arr[middle] === item ? middle : -1; 
}


// note: 12 is missing from the array
const sortedNumArray = [
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22,
  23, 24, 25,
];

console.log(binarySearch(sortedNumArray, 13)); // 11
console.log(binarySearch(sortedNumArray, 2)); // 1
console.log(binarySearch(sortedNumArray, 21)); // 19
console.log(binarySearch(sortedNumArray, 12));  // -1
console.log(binarySearch(sortedNumArray, -5));  // -1
console.log(binarySearch(sortedNumArray, 26));  // -1
