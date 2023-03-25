//Working with Objects

const person = {
  firtsName: "Jamila",
  age: 21,
  isFemale: true,
  balance: 100.32,
  dob: new Date(2023, 02, 25).toJSON(),
  address: {
    city: "London",
    postCode: "SW9",
  },

  toString: function(){
    return `Name: ${this.firtsName} Age ${this.age}`
  },

  deleteMe: true
};

person.lastName = "Ahmed"

console.log(person.toString());

console.log(person);

for(p in person ) {
    console.log(person[p]);
}

let keys = Object.keys(person)
let values = Object.values(person)

console.log([keys, values]);


