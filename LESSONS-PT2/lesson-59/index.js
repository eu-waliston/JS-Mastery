//Objects
import Person from "./Person.js";

const user = new Person("James", "male", 20);

//properties
console.log(user.name);
console.log(user.age);
console.log(user.gender);

// behavior
user.eat();
user.sleep();
console.log(user.toStringMethod());





