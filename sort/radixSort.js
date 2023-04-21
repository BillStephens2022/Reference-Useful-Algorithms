// Radix sort is a special sorting algorithm that works on lists of numbers
// It never makes comparisons between elements.
// It exploits the fact that information about the size of a number is encoded in the # of digits.
// i.e. more digits = bigger number.

// getDigit helper function - returns the digit in num at the given place value
function getDigit(num, i) {
  return Math.floor(Math.abs(num) / Math.pow(10, i)) % 10;
}

// digitCount helper function - returns the number of digits in a number
function digitCount(num) {
  if (num === 0) return 1;  //special case b/c log10 of 0 is -Infinity
  return Math.floor(Math.log10(Math.abs(num))) + 1;
}

// mostDigits is a helper function which returns the most number of digits that appears in the array
function mostDigits(nums) {
  let maxDigits = 0;
  for (let i = 0; i < nums.length; i++) {
    maxDigits = Math.max(maxDigits, digitCount(nums[i]));
  }
  return maxDigits;
}

function radixSort(nums) {
  let maxDigitCount = mostDigits(nums);
  for (let k = 0; k < maxDigitCount; k++) {
    let digitBuckets = Array.from({length: 10}, () => []);
    for (let i = 0; i < nums.length; i++) {
        let digit = getDigit(nums[i], k);
        digitBuckets[digit].push(nums[i]);
    }
    // takes all of the individual arrays (i.e. the digitBuckets) and concatenates them into one array
    nums = [].concat(...digitBuckets);
  }
  return nums;
}

const numArray = [ 1, 0, 423, 7299, 46, 21, 19, 34343, 762, 56]
console.log(getDigit(123456, 4));  // 2 index 4 moving from right to left
console.log(digitCount(123456));  // 6
console.log(mostDigits(numArray)); // 5  (34343 has 5 digits)
console.log(radixSort(numArray)); // [0 , 1, 19, 21, 46, 56, 423, 762, 7299, 34343]