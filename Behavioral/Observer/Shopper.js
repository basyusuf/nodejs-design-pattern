class Shopper{
    constructor(name){
        this.name=name;
    }
    notify(storeName,discount){
        console.log(`Hey ${this.name}! There is a sale at ${storeName}! ${discount}% for everything!`)
    }
}
module.exports = Shopper;