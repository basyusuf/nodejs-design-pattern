const PersonBuilder = require('./PersonBuilder');

//Personal
let yusuf = new PersonBuilder("Yusuf").isEmployee().addHour(40).build();
let ugur = new PersonBuilder("Ugur").isEmployee().addHour(20).build();

//Shopper
let busra = new PersonBuilder("Busra").isShopper().addMoney(10000).build();
let ayse = new PersonBuilder("Ayse").isShopper().addCart([{items:[{id:1,type:"t-shirt"}],total_price:100}]).build();

console.log(yusuf.toString());
console.log(ugur.toString());
console.log(busra.toString());
console.log(ayse.toString());