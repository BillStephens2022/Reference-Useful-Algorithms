// uses JavaScript's built-in sort function

// ascending order numbers - compare functions are for use with sort function
function numberCompareAsc(num1, num2) {
    return num1 - num2;
}

// ascending order numbers
function numberCompareDesc(num1, num2) {
    return num2 - num1;
}

// sort by length of string - ascending
function compareByLen(str1, str2) {
    return str1.length - str2.length;
}


const numArray = [6, 4, 15, 10];
const strArray = ["Stephens", "Bill", "Data Structures", "Algorithms"]

// sort ascending order
console.log(numArray.sort(numberCompareAsc)); // [4, 6, 10, 15]

// sort descending order
console.log(numArray.sort(numberCompareDesc)); // [15, 10, 6, 4]

// sort by length, ascending order
console.log(strArray.sort(compareByLen)); // ["Bill", "Stephens", "Algorithms", "Data Structures"]