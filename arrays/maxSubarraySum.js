// function accepts an array of integers and a number called num.  The function calculates
// the maximum sum of n consecutive elements in the array.
// i.e. maxSubarraySum([1,2,5,2,8,1,5], 2) = 10
// i.e. maxSubarraySum([1,2,5,2,8,1,5], 4) = 17
// i.e. maxSubarraySum([4,2,1,6], 1) = 6
// i.e. maxSubarraySum([4,2,1,6,2], 4) = 13
// i.e. maxSubarraySum([], 4) = null
// this function utilizes the 'Sliding Window' pattern to solve.


function maxSubarraySum(arr, num) {
  let maxSum = 0;
  let tempSum = 0;
  // return null if the number is greater than the length of the array since not valid.
  if (arr.length < num) return null;
  // first, we sum the first grouping of numbers and store the value as maxSum and then set equal to tempSum.
  // in the example, we add 1, 2, 5, 2, which equals 10.
  for (let i = 0; i < num; i++) {
    maxSum += arr[i];
  }
  tempSum = maxSum;
  // next, we use the 'sliding window', to calc tempSum ,
  // we subtract the first number from the old group and add the last number in the new group. from previous for loop, 
  // we have a value of 10 (from adding 1,2,5,2).  Now we subtract the first number (1) from that grouping and then add 
  // the next number in the array which is 8.  So the new value for tempSum is 17 (10 - 1 + 8).  This is greater than 
  // the previous maxSum, so 17 becomes the new maxSum.
  for (let i = num; i < arr.length; i++) {
    tempSum = tempSum - arr[i - num] + arr[i];
    maxSum = Math.max(maxSum, tempSum);
  }
  return maxSum;
}

console.log(maxSubarraySum([1,2,5,2,8,1,5], 4))