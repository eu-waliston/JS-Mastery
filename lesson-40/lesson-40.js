//Function Default Parameter

/*
reference :
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Default_parameters

This occur when we set a value to a function for example:
*/

const calculate = (x, y =5) => {
    return x * y;
}

console.log(calculate(5));