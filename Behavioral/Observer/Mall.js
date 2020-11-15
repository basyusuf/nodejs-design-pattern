class Mall{
    constructor(){
        this.sales = [];
    }
    notify(storeName,discount){
        this.sales.push({store:storeName,discount});
    }
}
module.exports=Mall;