//Spread Operator on Arrays

const a = [1,2,3]
const b = [4,5]

const numbers = [...a, ...b]
console.log(numbers);

const add = (n1, n2) =>  n1 + n2;

// console.log(add(b[0], b[1]));
console.log(add(...b));
console.log(add(...a));

