//Object Destructing

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

  toString: function () {
    return `Name: ${this.firtsName} Age ${this.age}`;
  },

  deleteMe: true,
};


const { firtsName, age, balance} = person;
console.log(firtsName);
console.log(age);
console.log(balance);