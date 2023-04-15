// Count all alphanumeric characters in a string:]
function charCount(str){
    let result = {}
    // loop over each character in the string
    for (let i = 0; i < str.length; i++) {
        let char = str[i].toLowerCase();
        // if the char is a number/letter (use REGEX for alphanumeric) AND is a key in object, add one to count
        if (/[a-z0-9]/.test(char)) {
            if (result[char] > 0) {
            result[char]++;
        //if the char is a number/letter AND not in object, add it to the object and set value to 1
            } else {
            result[char] = 1;
            };
        }
    }
    // if char is something else (i.e. space, special character, etc) don't do anything
    //return object at end
    return result;
}