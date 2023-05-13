//Custom Errors
class MyError extends Error {
    constructor(message) {
        super(message)
        this.name = "My Error"
    }
}
const error = new MyError("Opps");
console.log(error.message);
