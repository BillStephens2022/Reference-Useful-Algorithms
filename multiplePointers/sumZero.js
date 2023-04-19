// function accepts a sorted array of integers and finds the first pair where the sum is zero.  It returns an array that
// contains the array of two values that sum to zero, or returns 'undefined' if a pair doesn't exist.
//  ***NOTE: the array must be sorted for this function to work!
// This function uses the "Multiple Pointers Pattern"

function sumZero(arr) {
  let left = 0;
  let right = arr.length - 1;
  while (left < right) {
    let sum = arr[left] + arr[right];
    if (sum === 0) {
        return [arr[left], arr[right]];
    } else if (sum > 0) {
        right--;
    } else {
        left++;
    }
  }
}

const numArray = [-4,-3,-2,-1,0,1,2,5];
console.log(sumZero(numArray));
