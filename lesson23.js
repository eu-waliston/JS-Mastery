/**
    More about loops, now i'll teach you
    another way to loop the:
    - While
    The loop loops through a block of code as long as a specified condition is true.
*/

let animes = [
    "Naruto",
    "Dragon Ball",
    "Air TV",
    "Mnemosine"
]


let index = 0;

while(index < animes.length) {
    console.log(animes[index]);

    //You need this line to stop your loop
    //otherwhise they will loop forever
    index = index + 1; //or index++
}