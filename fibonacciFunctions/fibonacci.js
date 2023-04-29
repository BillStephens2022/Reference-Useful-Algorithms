// recursive fibonacci - not optimal (slow when working with larger #'s)

function fibRecursive(num) {
    if (num <= 2) return 1;
    return fibRecursive(num-1) + fibRecursive(num-2);
}

// 'Memoized' verstion, eliminates recursive calls of fib(n)'s already solved.  i.e. if doing fib(10),
// it won't keep resolving fib(3) or fib(4) since it has already solved these and stored in the 
// memo array.  This is a 'top-down' approach.
function fibMemo(num, memo=[undefined, 1, 1]) {
  if (memo[num] !== undefined) return memo[num];
  let result = fibMemo(num-1, memo) + fibMemo(num-2, memo);
  memo[num] = result;
  return result;
}

console.log(fibMemo(5)); // 5
console.log(fibMemo(10)); // 55
