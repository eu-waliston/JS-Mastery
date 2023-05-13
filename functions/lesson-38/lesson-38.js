//Functions Overview

//referece:
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Functions

//A function realy its a serie of statements
//that performe a task

const  getBrand = function(brand) {
    console.log(brand);

    return {
        brand: brand,
        website: `www.${brand}.com`
    }
}

const brand = getBrand("AmigosCode");
console.log(brand);