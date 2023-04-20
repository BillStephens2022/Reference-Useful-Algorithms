// uses the Merge Sort method of sorting an array.
// this is a recursive function, 1st part of it is mergeSort, breaks down the array into several arrays - 1 element per array. 
// it keeps dividing the array in half until it achieves this.
// since an array with a single element is sorted by default, you can then use mergeSortedArrays to merge them.


function mergeSort(arr) {
    if(arr.length <= 1) return arr;
    let mid = Math.floor(arr.length/2);
    let left = mergeSort(arr.slice(0, mid));
    let right = mergeSort(arr.slice(mid));
    return mergeSortedArrays(left, right);
}

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

const numArray = [10, 24, 76, 73, 72, 1, 9];
console.log(mergeSort(numArray)); // [1, 9, 10, 24, 72, 73, 76]
