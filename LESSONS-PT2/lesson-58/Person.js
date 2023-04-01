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
        console.log(`${his.name} is eating`);
    }

    toString(){
        return Person.toString()
    }
}

export default Person;