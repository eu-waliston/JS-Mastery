//Classes
class Person {
    constructor(name, gender, age) {
        this.name = name,
        this.gender = gender,
        this.age = age
    }

    sleep(){
        console.log(`${this.name} is slpeeping`);
    }

    eat() {
        console.log(`${this.name} is eating`);
    }

    toStringMethod(){
        return `Name: ${this.name}\n, Gender: ${this.gender}\n Age: ${this.age}`
    }
}

export default Person;
