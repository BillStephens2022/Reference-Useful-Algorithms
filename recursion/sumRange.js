// recursive sumRange function.  sumRange(5) = 15 (5 + 4 + 3 + 2 + 1)

function sumRange(num) {
    if (num === 1) return 1;
    return num + sumRange(num-1);
}

console.log(sumRange(5));