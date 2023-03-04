//Other kinda Loops

/*
    How i say in the last lesson
    in JS exists a couple ways to loop
    now i'll show you more three ways using:
    - forEach
    - forIn
    - forOf 
    - for await...of
*/

let animes = ["Naruto", "Dragon Ball", "Soul Eater", "07 Ghosts", "Air TV"];

console.log("----for in----");
for(let anime in animes) {
    console.log(anime);
}

console.log("---for of---");
for (let anime of animes) {
    console.log(anime);
}

console.log("--for each--");
animes.forEach((anime) => {
    console.log(anime);
})

console.log("for await of");
/*
⁉️
The for await...of statement creates a loop iterating over async iterable objects as well as sync iterables. This statement can only be used in contexts where await can be used, which includes inside an async function body and in a module.
*/
async function* foo(){
    yield 1;
    yield 2;
}

(async function(){
    for await (const num of foo() ){
        console.log(num);

        break;
    }
})();