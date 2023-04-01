import Person from "./class.js";

const alex = new Person("Alex", "Smith", "M", 25);

//properties
console.log(alex.firstName);
console.log(alex.lastName);
console.log(alex.age);
console.log(alex.gender);
console.log(alex.fullName);

//Setter
alex.fName = "Hunter"

//behaviors
alex.eat();
alex.sleep();
console.log(alex.toString());





