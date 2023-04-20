// swap 2 items in an array - provide array and the two indices you want to swap

function swap (arr, idx1, idx2) {
    let temp = arr[idx1];
    arr[idx1] = arr[idx2];
    arr[idx2] = temp;
    return arr;
}

function swap2 (arr, idx1, idx2) {
    [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];
    return arr;
}

const numArray1 = [45, 23, 18, 19];
const numArray2 = [45, 23, 18, 19];

console.log(swap(numArray1, 0, 1)); // [23, 45, 18, 19]
console.log(swap2(numArray2, 0, 1)); // [23, 45, 18, 19]