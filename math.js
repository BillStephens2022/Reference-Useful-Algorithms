// sums number plus all preceding numbers down to 1 (i.e. addUpTo(5) = 5 + 4 + 3 + 2 + 1)
// not the best way to do this, especially with very large #'s. (Big O = (O(n)))
// function below this one (i.e. addUpTo_v2) is better (Big O = O(1))
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
