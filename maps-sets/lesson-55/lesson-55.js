//Sets

const numbers = [1,1,2,2,3,3];
console.log(numbers);

const numbersSet = new Set();

numbersSet.add(1)
numbersSet.add(1)

numbersSet.add(2)
numbersSet.add(2)

numbersSet.add(3)
numbersSet.add(3)

console.log(numbersSet);

console.log(Array.from(new Set(numbersSet)));

