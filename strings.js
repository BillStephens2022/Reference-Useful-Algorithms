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

// tests if a character in a string is alphanumeric (alternative to a REGEX, performance is better)
// since performance bettwer than a REGEX, could be used in charCount function above as an alternative.
function isAlphaNumeric(char){
    let code = char.charCodeAt(0);
    if (!(code > 47 && code < 58) &&      // numeric (0-9)
        !(code > 64 && code < 91)  &&     // upercase alpha (A-Z)
        !(code > 96 && code < 123)) {     // lowercase alpha (a-z)
      return false;
    }
    return true;
}