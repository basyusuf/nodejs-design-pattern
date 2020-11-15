const Mall = require('./Mall');
const Shopper = require('./Shopper');
const Store = require('./Store');

let yusuf = new Shopper("Yusuf");
let ugur = new Shopper("Ugur");
let berk = new Shopper("Berk");

let piazzaAVM = new Mall();

let nike = new Store("Nike");
let adidas = new Store("Adidas");

nike.subscribe(yusuf);
nike.subscribe(ugur);
nike.subscribe(berk);
nike.subscribe(piazzaAVM);

adidas.subscribe(yusuf);
adidas.subscribe(piazzaAVM);

nike.sale(50);
adidas.sale(20);

