const Person = require('./Person');

class PersonBuilder{
    constructor(name){
        this.name = name;
    }
    isEmployee(){
        this.isEmployee = true;
        return this;
    }
    isShopper(){
        this.isEmployeer = false;
        return this;
    }
    addHour(hour){
        this.hour = hour;
        return this;
    }
    addMoney(money){
        this.money = money;
        return this;
    }
    addCart(list){
        this.cart = list;
        return this;
    }
    build(){
        return new Person(this.name,this.isEmployee,this.hour,this.money,this.cart);
    }
}
module.exports=PersonBuilder;