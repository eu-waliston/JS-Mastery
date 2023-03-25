//Logical Operator

/*
    Reference: 
    - https://www.w3schools.com/js/js_comparisons.asp
    - https://javascript.info/logical-operators
    JS have 4 Logical operators
    &&
    ||
    !
    ??

    for now ill talk about || and &&
    this kinda opoeraators allows us to connect on or more 
    expressions to build powerfull conditions
    here's an example:
*/

console.log(10 == 10 && "10" == "10");
console.log(10 == 10 || "10" == "10");


/*
    Now i'll talk about ! and ?? operators

    ! - NOT
        1 - Converts the operand to boolean type: true/false
        2 - Return the inverse value

    ?? - nullish coalescing operator

        - As it treats null and undefined similarly, we’ll use a special term here, in this article. For brevity, we’ll say that a value is “defined” when it’s neither null nor undefined.

        - In other words, ?? returns first argument if it's 
        not null/undefined. Otherwise, the second one

    for isntance: 
*/

console.log(!true);

let user;

alert(user ?? "Anonymous"); // Anonymous (user is undefined)

