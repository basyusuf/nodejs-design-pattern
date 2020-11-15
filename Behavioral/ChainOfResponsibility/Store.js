const Storage = require('./Storage');

class Store{
    constructor(name,inventory=[]){
        this.name = name;
        this.inventory = inventory;

        let floor = new Storage("Store Floor",inventory.floor);
        let backroom = new Storage("Store Backroom",inventory.backroom);
        let localStore = new Storage("Local Store",inventory.localStore);
        let warehouse = new Storage("Warehouse",inventory.warehouse);

        floor.setNext(backroom);
        backroom.setNext(localStore);
        localStore.setNext(warehouse);

        this.storage = floor;
    }
    find(itemName){
        return this.storage.find(itemName);
    }

}
module.exports = Store;