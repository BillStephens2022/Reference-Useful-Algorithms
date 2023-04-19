// return all odd values from an array, recursive function

function collectOddValues(arr) {
    let newArr = [];

    if (arr.length === 0) {
        return newArr;
    }

    if (arr[0] % 2 !== 0) {
        newArr.push(arr[0]);
    }

    newArr = newArr.concat(collectOddValues(arr.slice(1)));
    return newArr;
}

console.log(collectOddValues([1,2,3,4,5,6,7,8,9]));

// non-recursive version
function collectOddValues2(arr) {
    let newArr = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 !== 0) {
            newArr.push(arr[i]);
        }
    }
    return newArr;
}

console.log(collectOddValues2([1,2,3,4,5,6,7,8,9]));
