//Objeect
/***
 * In JS an object is a collnection of propertyes
 * declared by KEY + VALUE
 * For Example:
*/

let person = {
    firtsName: "Felipe",
    lastName: "Lukas",
    age: 22,
    balance: 100.32,
    dob: new Date().toJSON(),
    isMale: true,
    address: {
        city: "London",
        postCode: "SW9"
    }
}
//Exists a lot ways to acees a data on your object
//the first:
console.log(person);

//you can also use a dot (.) to choose what property 
//access like:
console.log(person.firtsName);
console.log(person.address.city);
console.log(Object.values(person));
console.log(Object.keys(person));
console.log(JSON.stringify(person));