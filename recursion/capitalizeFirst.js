// Write a recursive function called capitalizeFirst. Given an array of strings, 
// capitalize the first letter of each string in the array.

function capitalizeFirst (arr) {
  // add whatever parameters you deem necessary - good luck!
  if (arr.length === 1) {
    return [arr[0][0].toUpperCase() + arr[0].substr(1)];
  }
  let result = capitalizeFirst(arr.slice(0, -1));
  let str = arr.slice(arr.length -1)[0][0].toUpperCase() + arr.slice(arr.length - 1)[0].substr(1);
  result.push(str);
  return result;
}
  
console.log(capitalizeFirst(['car','taco','banana'])); // ['Car','Taco','Banana']