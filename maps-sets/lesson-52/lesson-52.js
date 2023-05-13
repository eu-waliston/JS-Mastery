//Maps vs Objects

const person = {
    firstName: "James",
    lastName: "Edwin Webb",
    age: 85
}

console.log(person);

const map = new Map();
map.set('firstName' , "James")
map.set('firstName' , "Edwin Webb")
map.set({age: "foo"}, 85)

console.log(map);