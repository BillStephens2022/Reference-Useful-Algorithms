// Like merge sort, exploits the fact that arrays of 0 or 1 element are always sorted.
// Also a recursive function.
// Works by selecting one element (called the "pivot") and finding the index where the pivot
// should end up in the sorted array.
// Once the pivot is positioned appropriately, quick sort can be applied on either side of the pivot.
// for example array [5, 2, 1, 8, 4, 7, 6 ,3].  if you select 5 as the starting point.  move all elements (unsorted) less than
// 5 and move them to the left.  all elements greater than 5 go to the right.  Then, we know 5 is in the right spot - this is the "pivot".
// then keep doing this recursively (picking a number and moving rest of items to left and right) until the full array is sorted.


// pivot helper function which is used recursively in the quickSort function.
function pivot(arr, start = 0, end = arr.length) {
  // basic swap function
  const swap = (arr, idx1, idx2) => {
    [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];
  };
  let pivot = arr[start];
  let swapIdx = start;
  for (let i = start + 1; i < arr.length; i++) {
    if (pivot > arr[i]) {
      swapIdx++;
      swap(arr, swapIdx, i);
    }
  }
  swap(arr, start, swapIdx);
  return swapIdx;
}


function quickSort(arr, left = 0, right = arr.length - 1) {
  if (left < right) {
    let pivotIndex = pivot(arr, left, right);
    // left side of pivot
    quickSort(arr, left, pivotIndex - 1);
    // right side of pivot
    quickSort(arr, pivotIndex + 1, right);
  }
  return arr;
}

const numArray = [100, 4, 6, 9, 1, 2, 5, 3, -3];
console.log(quickSort(numArray));  // [-3, 1, 2, 3, 4, 5, 6, 9, 100]