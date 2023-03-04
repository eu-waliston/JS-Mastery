//Loops
/*
When you want to repete a piece of code a lot of times
for example:
*/

console.log("Alex");
console.log("jamila");
console.log("joe");
console.log("Aisha");

/*
but if you have 100 names, u'll repeat 100 times this console.log ?
well now that the loop come to play,
in JS we have a couple ways to do a loop we have:

- for
- while
- do while

I'll show you how the FOR works:
*/
console.log("_____FOR____\n");

for (let i = 0; i < 10; i++) {
    console.log(i);
        
}

console.log("\n");
//with a array
let names = [
    "Alex",
    "jamila",
    "joe",
    "Aisha"
]
for (let i = 0; i < names.length; i++) {
    console.log(names[i]);
}

//Easy right ? , now you cann repete your code
