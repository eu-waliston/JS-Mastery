//Spread Operator on Objects

const jamila = {
  firtsName: "Jamila",
  age: 21,
  isFemale: true,
  balance: 100.32,
  dob: new Date(2023, 02, 25).toJSON(),

  toString: function () {
    return `Name: ${this.firtsName} Age ${this.age}`;
  },

  deleteMe: true,
};

const address = {
  city: "London",
  postCode: "SW9",
};

const person = {
  ...jamila,
  address: { ...address },
};

console.log(person);


