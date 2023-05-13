//Iterating Maps

const map = new Map();
map.set('name' , "james")
map.set('age' , 22)

console.log(map.keys());

for(const k of map.keys()) {
    console.log(k);
}

console.log("---------");

for(const k of map.values()) {
    console.log(k);
}




