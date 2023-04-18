

// Function counts each alphanumeric character in a string and places
// the result in an object where key is the character and value is the count.

// OPTION 1 - using a REGEX to determine if character is alphanumeric
function charCount(str){
    let result = {}
    // loop over each character in the string
    for (let char of str) {
        char = char.toLowerCase();
        // if the char is a number/letter (use REGEX for alphanumeric) AND is a key in object, add one to count
        if (/[a-z0-9]/.test(char)) {    
        //if the char is a number/letter AND not in object, add it to the object and set value to 1
        // originally had an if/else statement, but was able to refactor.
        // if result[char] doesn't exist yet, it will use a value of 1.  if it exists it will increment by 1
           result[char] = ++result[char] || 1;
        }
    }
    // if char is something else (i.e. space, special character, etc) don't do anything
    //return object at end
    return result;
}

// OPTION 2 - using a separate, more efficient function (import isAlphaNumeric from this repo) 
// to determine if char is alphanumeric.  Is Alphanumeric function is more efficient than a REGEX.

import isAlphaNumeric from "./isAlphaNumeric.js";

function charCount_v2(str){
    let result = {}
    // loop over each character in the string
    for (let char of str) {
        char = char.toLowerCase();
        // if the char is a number/letter (use REGEX for alphanumeric) AND is a key in object, add one to count
        if (isAlphaNumeric(char)) {    
        //if the char is a number/letter AND not in object, add it to the object and set value to 1
        // originally had an if/else statement, but was able to refactor.
        // if result[char] doesn't exist yet, it will use a value of 1.  if it exists it will increment by 1
           result[char] = ++result[char] || 1;
        }
    }
    // if char is something else (i.e. space, special character, etc) don't do anything
    //return object at end
    return result;
}

// console.log(charCount("Hello There, My Name is Bill!"));

console.log(charCount_v2("Hello There, My Name is Bill!"));
