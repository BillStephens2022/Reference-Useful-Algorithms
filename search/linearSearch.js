// search for an item in an array and return the index

function linearSearch(arr, item) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === item) {
        return i;
    }
  }
  return -1;
}

const namesArray = ["bill", "carolyn", "jimmy", "johnny", "tommy", "timmy"];
console.log(linearSearch(namesArray, "tommy")); // 4
console.log(linearSearch(namesArray, "micky")); // -1

const numArray = [1, 44, 67, 21, 19, 14];
console.log(linearSearch(numArray, 14)); // 5
console.log(linearSearch(numArray, 67)); // 2
console.log(linearSearch(numArray, 22)); // -1
