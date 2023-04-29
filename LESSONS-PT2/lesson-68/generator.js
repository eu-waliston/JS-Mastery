//Generators
const generator = function*(){
    yield 1;
    yield "WE";
    yield {name: "waliston", gender: "MEN"};
}

console.log(generator);
let gen = generator();
// console.log(gen.next());
let result = gen.next();

while(!result.done){
    console.log(result.value);
    result = gen.next();
}



