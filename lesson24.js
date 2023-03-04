/**
    More about loops, now i'll teach you
    another way to loop the:

    - Do While

    this is an special loop because, it will
    'loop' once always before test  your condition
*/

let animes = [
    "One Piece",
    "Bleach",
    "Naruto",
    "Dragon Ball",
    "Soul Eater"
]
index = 0;
do {
    console.log(animes[index]);
    index++;
}while(index < animes.length)

