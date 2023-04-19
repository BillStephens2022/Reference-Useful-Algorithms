// Write a recursive function called someRecursive which accepts an array and a callback. 
// The function returns true if a single value in the array returns true when passed to 
// the callback. Otherwise it returns false.

function someRecursive(arr, cb) {
    if (arr.length === 0) return false;
    if (cb(arr[0])) return true;
    return someRecursive(arr.slice(1),cb);
}

// SAMPLE INPUT / OUTPUT

// example callback function checking if a value is odd.
const isOdd = val => val % 2 !== 0;

console.log(someRecursive([1,2,3,4], isOdd));// true
console.log(someRecursive([4,6,8,9], isOdd));// true
console.log(someRecursive([4,6,8], isOdd));// false
console.log(someRecursive([4,6,8], val => val > 10)); // false
