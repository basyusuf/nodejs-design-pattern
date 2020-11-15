const {InventoryItem,GoldenInventoryItem,DiamondInventoryItem} = require('./InventoryItem');
const Shopper = require('./Shopper')

let ipod = new InventoryItem("Ipod",50);
let golden_ipod = new GoldenInventoryItem(ipod);
let diamond_ipod = new DiamondInventoryItem(ipod);

let user = new Shopper("Yusuf",1600);

user.purchase(ipod);
user.purchase(golden_ipod);
user.purchase(diamond_ipod);