const Store = require('./Store');
const inventory = require('./inventory.json');

let skiShop = new Store("My Ski Shop",inventory);

let search_text = "powder skis";
let result = skiShop.find(search_text);

console.log(result);