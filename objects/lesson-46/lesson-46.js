//Lexical this

const person = {
  firstName: "Jamila",
  age: 22,
  car: ["Tesla", "Ferrari"],
  toString() {
    console.log(`Name: ${this.firstName}, age: ${this.age}`);
  },

  deleteMe: true,
};
