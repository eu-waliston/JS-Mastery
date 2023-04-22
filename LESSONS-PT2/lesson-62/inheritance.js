//Classes
class Person {
  constructor(firstName, lastName, gender, age) {
    (this.firstName = firstName),
      (this.lastName = lastName),
      (this.gender = gender),
      (this.age = age);
  }

  sleep() {
    console.log(`${this.firstName} is slpeeping`);
  }

  eat() {
    console.log(`${this.firstName} is eating`);
  }

  get fullName() {
    return `${this.firstName} ${this.lastName}`;
  }

  set fName(fName) {
    this.firstName ? this.firstName : (this.firstName = fName);
  }

  toString() {
    return `USer: ${this.firstName} ${this.lastName} Age: ${this.age} Gender: ${this.gender}`;
  }
}

class SoftwareEngineer extends Person {
  constructor(firstName, lastName, gender, age, programingLanguages) {
    super(firstName, lastName, gender, age);
    this.programingLanguages = programingLanguages;
  }

  code() {
    console.log(`${this.fullName} is coding using ${this.programingLanguages}`);
  }
}
export { Person, SoftwareEngineer };
