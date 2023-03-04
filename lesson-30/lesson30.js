//Ternary if statement

/*
    Reference 
    - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Conditional_Operator

    this operator is aeasy way when we have to test 
    a simples If statement, its make ur code more clean
    for example:
*/

let number = 101;

if(number % 2 == 0) {
    console.log('even');
} else {
    console.log('odd');
}

/*
    now with the Ternary operator
*/

let result = number % 2 == 0 ? 'evn' : 'odd';

//It's more simple right ?
