// Write a function called sameFrequency. Given two positive integers, find out if the two numbers have 
// the same frequency of digits.

function sameFrequency(num1, num2){
 
    num1 = num1.toString();
    num2 = num2.toString();
      if (num1.length !== num2.length) {
      return false;
    }
    let frequencyCounter1 = {};
    let frequencyCounter2 = {};
  
    // creates objects which show key:value pairs to show the frequency(count) that each value occurs in the array
    for (let digit of num1) {
      frequencyCounter1[digit] = (frequencyCounter1[digit] || 0) + 1; 
    }
    for (let digit of num2) {
      frequencyCounter2[digit] = (frequencyCounter2[digit] || 0) + 1;
    }
    console.log(frequencyCounter1);
    console.log(frequencyCounter2);
    // checks if the square of each key in array 1 is in array 2
    for (let key in frequencyCounter1) {
      if (!(key in frequencyCounter2)) {
          return false;
      }
      // checks if the count of each key and its square is the same
      if(frequencyCounter2[key] !== frequencyCounter1[key]) {
          return false;
      }
    }
    return true
  }

  console.log(sameFrequency(3589578, 5879385));