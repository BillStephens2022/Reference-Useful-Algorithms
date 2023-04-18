// function accepts a sorted array and counts the unique values in the array.
// ***NOTE:  array must be sorted
// uses Multiple Pointers method

function countUniqueValues(arr) {
  // if statement here handles edge case where empty array is passed in.
  if (arr.length === 0) return 0;
  let i = 0;
  for (let j = 1; j < arr.length; j++) {
    if (arr[i] !== arr[j]) {
      i++;
      arr[i] = arr[j];
    };
    
  }
  // returns the count of unique #'s in the array.  
  // instead, if you want an array of unique #'s, you could return arr.slice(0, i+1);
  return i + 1;  
}

let numArray = [1, 1, 1, 1, 3, 3, 3, 4, 4, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 10];  
// returns 5 since there are 5 unique values in the array (1, 3, 4, 5, 10)
console.log(countUniqueValues([]));