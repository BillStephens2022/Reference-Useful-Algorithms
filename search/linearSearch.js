// search for an item in an array and return the index

function linearSearch(arr, item) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === item) {
        return i;
    }
  }
  return -1;
}

const arr = ["bill", "carolyn", "jimmy", "johnny", "tommy", "timmy"];
console.log(linearSearch(arr, "tommy")); // 4
console.log(linearSearch(arr, "micky")); // -1