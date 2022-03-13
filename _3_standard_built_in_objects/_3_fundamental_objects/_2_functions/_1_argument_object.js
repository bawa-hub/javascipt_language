// The arguments object behaves like an array though it is not an instance of the Array type.

function add() {
  let sum = 0;
  for (let i = 0; i < arguments.length; i++) {
    sum += arguments[i];
  }
  return sum;
}

console.log(add(1, 2)); // 3
console.log(add(1, 2, 3, 4, 5)); // 15
