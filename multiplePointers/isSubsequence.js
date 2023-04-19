// function checks whether string 1 is included in string 2.  the order the characters appear matters.
// i.e. ('hello', 'hello world') would return true.
// i.e. ('sing', 'sting') would return true.
// i.e. ('abc', 'acb') would return false (the order the letters appear matters!)

function isSubsequence(str1, str2) {
  let i = 0;
  let j = 0;
  if (!str1) return true; // edge case
  while (j < str2.length) {
    if (str2[j] === str1[i]) {
        i++;
    }
    // if i gets to be the length of the first string, that means it has successfully
    // reached the end of the string by meeting the condition above on all letters.
    if (i === str1.length) {
        return true;
    }
    j++;
  }
  return false;
}

console.log(isSubsequence('hello', 'hello world')); // true
console.log(isSubsequence('sing', 'sting')); // true
console.log(isSubsequence('abc', 'abracadabra')); // true
console.log(isSubsequence('abc', 'acb')); // false (order matters)