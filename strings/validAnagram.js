// compares 2 strings to see if they are anagrams of one another.  
// NOTE: This utilizes a frequency counter solution.


function validAnagram(str1, str2) {
    // checks if the length of each string is equal. 
    if (str1.length !== str2.length) {
      return false;
    }
    const letterCount = {};
  
    // creates an object with the letter count of each letter in str1
    for (let i = 0; i < str1.length; i++) {
      let letter = str1[i];
      letterCount[letter] ? letterCount[letter] += 1 : letterCount[letter] = 1; 
    }
    console.log(letterCount);
   
    // loops through each letter in str2 and check if it occurs in the lettercount object created from str1
    for (let i = 0; i < str2.length; i++) {
      let letter = str2[i]
      // if can't find letter or letter is zero then it's not an anagram
      if (!letterCount[letter]) {
          return false;
      } else {
        letterCount[letter] -= 1;
      }
    }
    return true
  }
  
  const str1 = "a gentleman";
  const str2 = "elegant man";
  
  console.log(validAnagram(str1, str2));  
  