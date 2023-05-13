//Classes
class Person {
    constructor(firstName,lastName,  gender, age) {
        this.firstName = firstName,
        this.lastName = lastName,
        this.gender = gender,
        this.age = age
    }

    sleep(){
        console.log(`${this.firstName} is slpeeping`);
    }

    eat() {
        console.log(`${this.firstName} is eating`);
    }

    get fullName() {
        return `${this.firstName} ${this.lastName}`
    }

    toString(){
        return `USer: ${this.firstName} ${this.lastName} Age: ${this.age} Gender: ${this.gender}`
    }
}

export default Person;
