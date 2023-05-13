//Enhanced Object Properties

const brandProp = "BRAND";

const calculator = (brand, price) => ({
    [brandProp]: brand,
    price,
    getDiscount(){
        return this.price - (this.price * .30)
    }
})

const casion = calculator("casion", 10)

console.log(casion);

console.log(casion.getDiscount());

