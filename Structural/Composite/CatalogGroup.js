class CatalogGroup{
    constructor(group_name,composite=[]){
        this.group_name = group_name;
        this.composite = composite;
    }
    getPrice(){
        return this.composite.reduce((total,nextItem)=>total += nextItem.getPrice(),0)
    }
    print(){
        return this.composite.map(item=>console.log(item.print()))
    }
}
module.exports = CatalogGroup;