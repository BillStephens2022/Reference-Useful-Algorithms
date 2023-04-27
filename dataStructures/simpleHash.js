// Note:  these are not great hash functions, just demonstrations of how a simple one could work...

function simpleHash (key, arrayLen) {
    let total = 0;
    for (let char of key) {
        // map "a" to 1, "b" to 2, "c" to 3, etc.
        let value = char.charCodeAt(0) - 96;
        total = (total + value) % arrayLen;
    }
    return total;
}

console.log(simpleHash("pink", 10)); // 0
console.log(simpleHash("orangered", 10)); // 7
console.log(simpleHash("cyan", 10)); // 3


function slightlyBetterHash (key, arrayLen) {
    let total = 0;
    let WEIRD_PRIME = 31;
    for (let i = 0; i < Math.min(key.length, 100); i++) {
        let char = key[i];
        let value = char.charCodeAt(0) - 96;
        total = (total * WEIRD_PRIME + value) % arrayLen;
    }
    return total;
}

console.log(slightlyBetterHash("pink", 13)); // 5
console.log(slightlyBetterHash("blue", 13)); // 10
console.log(slightlyBetterHash("orangered", 13)); // 0
console.log(slightlyBetterHash("cyan", 13)); // 5