//Let Keyword
/*
    To avoid the hoisting,
    we can and its extremaly recomnded use
    the LET keyword to declare your variables
*/

for (let i = 0; i < 10; i++) {
    console.log(i);
}

/*

ReferenceError: i is not defined

console.log(i);

*/