// builds up the sort by gradually creating a larger left portion which is always sorted and inserting the next value where it belongs.
// in other words, take each element and insert it where it belongs.
// performs better (as far as Big O) with nearly sorted data

//STEPS
// 1. start by picking the 2nd element of the array.
// 2. compare the 2nd element with the one before it and swap if necessary.
// 3. continue to next element and if it is in the incorrect order, iterate through the sorted portion (i.e. the left side) of the array
// to place the element in the correct place.
// 4. repeat until the array is sorted.

function insertionSort(arr) {
  for (let i = 1; i < arr.length; i++) {
    let currentVal = arr[i];
    let j;
    for (j = i - 1; j >= 0 && arr[j] > currentVal; j--) {
      arr[j+1] = arr[j];
    }
    arr[j+1] = currentVal;
  }
  return arr;
}

const numArray = [2, 1, 9, 76, 4];
console.log(insertionSort(numArray)); // [1, 2, 4, 9, 76]
