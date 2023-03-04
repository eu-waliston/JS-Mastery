//Break and Continue

/*
The BREAK keyword, tells for your program to stop
for example

*/
console.log("BREAK");
for (let i = 0; i <= 10; i++) {
    console.log(i);
    //i'll talk about 'if' later
    if (i == 5) {
        break;
    }
}

//in a different way, CONTINUE, will check the condition
//an show the results
console.log("CONTINUE");
for (let i = 0; i <= 10; i++) {

    if (i < 5) {
        continue;
    }
    console.log(i);
}

//continue and break work with while and do-while to
//in the same way that i show above