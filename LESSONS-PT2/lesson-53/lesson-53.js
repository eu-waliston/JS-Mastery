//Working with Maps

const map = new Map();
map.set('name' , "james")
map.set('age' , 22)

console.log(map.size);
console.log(map.has('age'));
// console.log(map.delete('age'));
// console.log(map.clear());

console.log(Object.fromEntries(map.entries()));

console.log(map);



