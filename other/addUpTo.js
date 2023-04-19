function addUpTo_v1(n) {
    let total = 0
    for (let i = 0; i <= n; i++) {
        total += i;
    }
    return total;
}

// improved version of previous function( Big O = O(1))
function addUpTo_v2(n) {
    return n * (n + 1) / 2;
}