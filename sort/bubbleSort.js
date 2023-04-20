// non-optimized bubbleSort function.  largest items "bubble" up to the end of the array as it loops.
// the 'i' increments down so that the last item the array gets locked in since we already know its the largest.
// the next time through the 'i' loop the second to last item is locked in since we already know its the second largest, etc.
// the counting down of 'i' keeps the loop from duplicating work it has already done.
function bubbleSort1(arr) {
  for (let i = arr.length; i > 0; i--) {
    for (let j = 0; j < i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        // swap
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }
  return arr;
}

// difference with bubbleSort1 is that it defines the swap function using ES2015 notation (instead of longer way of doing a swap).
function bubbleSort2(arr) {
  // define swap function
  const swap = (arr, idx1, idx2) => {
    [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];
  };
  // below is pretty much same as bubbleSort1 except that it uses the swap function defined above.
  for (let i = arr.length; i > 0; i--) {
    for (let j = 0; j < i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        swap(arr, j, j + 1);
      }
    }
  }
  return arr;
}

const numArray1 = [29, 10, 14, 30, 37, 14, 18];
console.log(bubbleSort1(numArray1));

const numArray2 = [29, 10, 14, 30, 37, 14, 18];
console.log(bubbleSort2(numArray2));
