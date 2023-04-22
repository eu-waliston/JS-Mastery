import {Person, SoftwareEngineer} from "./inheritance.js";

const alex = new Person("Alex", "Smith", "M", 25);
const bob = new SoftwareEngineer("Bob", "Smith", "M", 25, ['Js', 'GoLang'])

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


//Inheritance


console.log(bob.firstName);
console.log(bob.lastName);
console.log(bob.age);
console.log(bob.gender);
console.log(bob.fullName);

//Setter
bob.fName = "Hunter"

//behaviors
bob.eat();
bob.sleep();
console.log(bob.toString());
bob.code()

