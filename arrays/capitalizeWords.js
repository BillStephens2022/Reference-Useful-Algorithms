// Write a recursive function called capitalizeWords. Given an array of words, 
// return a new array containing each word capitalized.

function capitalizeWords (arr) {
    // add whatever parameters you deem necessary - good luck!
    if (arr.length === 1) {
      return [arr[0].toUpperCase()];
    }
    let result = capitalizeWords(arr.slice(0, -1));
    result.push(arr.slice(arr.length - 1)[0].toUpperCase());
    return result;
  }
    
  console.log(capitalizeWords(['car','taco','banana'])); // ['CAR','TACO','BANANA']