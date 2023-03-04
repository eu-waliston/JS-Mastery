//If Statement

/*
    Well now it's time to put all together
    logical operator, comprison operators, math operator

    I'll talk about an way in JS to test you codes or block
    of codes.

    the If statement return a boolean if they found the match of the codes that we pass. 
    we'll use everything that we learn to create powerful statements with the this operator.

    the sintax is simple:

    if(condition) {
        //code to execute
    } else {
        //if the code don't match 
    }

*/
let number = 10;

if(number > 10) {
    console.log("YES");
} else {
    console.log("NO");
}

//And inside the if condition we can use
//Everything!!! like:

if(number > 5 && number < 8) {
    console.log(number);
}

if(number > 5 || number < 8) {
    console.log(number);
}

/*
    Reference:
    - https://www.w3schools.com/js/js_if_else.asp
*/