
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

export default isAlphaNumeric;

