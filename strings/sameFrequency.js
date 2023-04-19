// Write a function called sameFrequency. Given two positive integers, find out if the two numbers have
// the same frequency of digits.

function sameFrequency(num1, num2) {
  num1 = num1.toString();
  num2 = num2.toString();
  if (num1.length !== num2.length) return false;

  let frequencyCounter1 = {};
  let frequencyCounter2 = {};

  // creates objects which show key:value pairs to show the frequency(count) that each value occurs in the array
  for (let i = 0; i < num1.length; i++) {
    frequencyCounter1[num1[i]] = (frequencyCounter1[num1[i]] || 0) + 1;
  }
  for (let i = 0; i < num2.length; i++) {
    frequencyCounter2[num2[i]] = (frequencyCounter2[num2[i]] || 0) + 1;
  }
  console.log(frequencyCounter1);
  console.log(frequencyCounter2);

  // checks if the count of each key is the same
  for(let key in frequencyCounter1) {
    if (frequencyCounter1[key] !== frequencyCounter2[key]) return false;
  }
  return true;
}

console.log(sameFrequency(3589578, 5879385));
