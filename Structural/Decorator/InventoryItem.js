class InventoryItem{
    constructor(name,price){
        this.name = name;
        this.price = price;
    }
    getPrice(){
        return this.price;
    }
    print(){
        return `${this.name}`;
    }
}
class GoldenInventoryItem{
    constructor(baseItem){
        this.name = `Golden ${baseItem.name}`;
        this.price = 1000 + baseItem.price;
    }
    getPrice(){
        return this.price;
    }
    print(){
        return `${this.name}`;
    }
}
class DiamondInventoryItem{
    constructor(baseItem){
        this.name = `Diamond ${baseItem.name}`;
        this.price = 1500 + baseItem.price;
    }
    getPrice(){
        return this.price;
    }
    print(){
        return `${this.name}`;
    }
}
module.exports = {InventoryItem,GoldenInventoryItem,DiamondInventoryItem};