//Hoisting
/**
 * JavaScript Hoisting refers to the process whereby the interpreter appears to move the declaration of functions, variables or classes to the top of their scope, prior to execution of the code.
 *
 * reference => https://developer.mozilla.org/en-US/docs/Glossary/Hoisting
 */

for(var i = 0; i <= 10; i++) {
    console.log(i);
}

console.log('value of i outside loop ' + i);