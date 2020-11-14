class Person{
    constructor(name,isEmployee,hour,money,cart){
        this.name=name;
        this.isEmployee = isEmployee;
        this.hour = hour || 0;
        this.money = money || 0;
        this.cart = cart || []
    }
    toString(){
        return JSON.stringify(this);
    }
}
module.exports=Person;