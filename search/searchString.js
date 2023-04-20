// function to search for a shorter string within a longer string.

function searchString(long, short) {
  let count = 0;
  for (let i = 0; i < long.length; i++) {
    for (let j = 0; j < short.length; j++) {
        if (short[j] !== long[i + j]) break;
        if (j === short.length - 1) count++;
    }
  }
  return count;
}

const longString = "lorie loled"
const shortString = "lo"

console.log(searchString(longString, shortString)); // 2