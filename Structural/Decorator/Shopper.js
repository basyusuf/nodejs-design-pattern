class Shopper{
    constructor(name,money) {
        this.name = name;
        this.money = money;
    }
    purchase(item){
        if(item.getPrice()<this.money){
            this.money -= item.getPrice();
            console.log(item.print()," purchased")
        }
        else{
            console.log("You need money ",this.name,"You can't purchase",item.print());
        }
    }
}

module.exports = Shopper;