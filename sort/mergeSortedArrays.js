// merges sorted arrays and sorts them

function mergeSortedArrays(arr1, arr2) {
  let result = [];
  let i = 0;
  let j = 0;
  while (i < arr1.length && j < arr2.length) {
    if (arr2[j] > arr1[i]) {
      result.push(arr1[i]);
      i++;
    } else {
      result.push(arr2[j]);
      j++;
    }
  }
  while (i < arr1.length) {
    result.push(arr1[i]);
    i++;
  }
  while (j < arr2.length) {
    result.push(arr2[j]);
    j++;
  }
  return result;
}

const numArray1 = [1, 10, 50];
const numArray2 = [2, 14, 99, 100];
console.log(mergeSortedArrays(numArray1, numArray2)); // [1, 2, 10, 14, 50, 99, 100]
