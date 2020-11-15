class CatalogItem{
    constructor(name,price){
        this.name = name;
        this.price = price;
    }
    getPrice(){
        return this.price;
    }
    print(){
        return `Name:${this.name.toUpperCase()} - Price :${this.price}TL`
    }
}
module.exports = CatalogItem;