//Arrow Functions
/*
reference:
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Functions#arrow_functions

this is ahort sintax to write ur functions in JS for example:
*/

const getBrand = (brand) => ({
  brand: brand,
  webite: `www.${brand.toLowerCase()}.com`,
});

const brand = getBrand("Ye")
console.log(brand);

