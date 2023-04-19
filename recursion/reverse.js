// Write a recursive function called reverse which accepts a string and returns a new string in reverse.

function reverse(str) {
  if (str.length <= 1) return str;
  return reverse(str.slice(1)) + str[0];
}

console.log(reverse('awesome')); // 'emosewa'
console.log(reverse('rithmschool')); // 'loohcsmhtir'

// non-recursive solution
function reverse2(str) {
  let newStr = "";
  for (let i = (str.length - 1); i > -1; i--) {
    newStr = newStr.concat(str[i]);
  };
  return newStr;
}

console.log(reverse2('awesome')); // 'emosewa'
console.log(reverse2('rithmschool')); // 'loohcsmhtir'