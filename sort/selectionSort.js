// similar to bubbleSort, but instead of first placing large values into sorted position, it places small values
// into sorted position

function selectionSort(arr) {
  // define swap function
  const swap = (arr, idx1, idx2) => {
    [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];
  };
  for (let i = 0; i < arr.length; i++) {
    let lowest = i;
    for (let j = i + 1; j < arr.length; j++) {
        if (arr[j] < arr[lowest]) {
            lowest = j;
        }
    }
    if (i !== lowest) swap(arr, i, lowest);
  }


  return arr;
}

const numArray = [34, 22, 10, 19, 17];
console.log(selectionSort(numArray)); // [10, 17, 19, 22, 34]
