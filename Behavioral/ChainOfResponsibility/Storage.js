class Storage{
    constructor(name,inventory = [],deliveryTime=0){
        this.name = name;
        this.inventory = inventory;
        this.deliveryTime = deliveryTime;
    }
    lookInLocalInventory(itemName){
        let item_index = this.inventory.map(item=>item.name).indexOf(itemName);
        return this.inventory[item_index];
    }
    setNext(storage){
        this.next = storage;
    }
    find(itemName){
        let found = this.lookInLocalInventory(itemName);
        if(found){
            return {
                name:found.name,
                qty:found.qty,
                location:this.name
            }
        }
        else if(this.next){
            return this.next.find(itemName);
        }
        else{
            return `Not found:${itemName}`
        }
    }

}
module.exports = Storage;