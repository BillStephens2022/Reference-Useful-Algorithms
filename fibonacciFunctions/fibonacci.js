// recursive fibonacci - not optimal (slow when working with larger #'s and will crash if num too large)

function fibRecursive(num) {
    if (num <= 2) return 1;
    return fibRecursive(num-1) + fibRecursive(num-2);
}

console.log("fibRecursive: ", fibRecursive(5)); // 5
console.log("fibRecursive: ", fibRecursive(10)); // 55

// 'Memoized' verstion, eliminates recursive calls of fib(n)'s already solved.  i.e. if doing fib(10),
// it won't keep resolving fib(3) or fib(4) since it has already solved these and stored in the 
// memo array.  This is a 'top-down' approach.
function fibMemo(num, memo=[undefined, 1, 1]) {
  if (memo[num] !== undefined) return memo[num];
  let result = fibMemo(num-1, memo) + fibMemo(num-2, memo);
  memo[num] = result;
  return result;
}

console.log("fibMemo: ", fibMemo(5)); // 5
console.log("fibMemo: ", fibMemo(45)); // 1134903170  
//NOTE:  fib of 45 would be VERY slow to calc using the recursive function


// 'bottom-up' approach.  as it solves smaller nums, it saves in memory and builds up the array
// as it approaches num.  This is most optimized and can do larger nums quickly and without crashing.
function fibTable(num) {
    if (num <= 2) return 1;
    let fibNums = [0, 1, 1];
    for (let i = 3; i <= num; i++) {
        fibNums[i] = fibNums [i-1] + fibNums[i-2];
    }
    return fibNums[num];
  }

console.log("fibTable: ", fibTable(5)); // 5
console.log("fibTable: ", fibTable(60)); // 1548008755920