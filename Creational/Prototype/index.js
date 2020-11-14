const Car = require('./Car');

let nissan = new Car("41 K 9999");
nissan.addPart("Gear");
nissan.addPart("Wheel");
nissan.addPart("Window");
nissan.addPart("Door");
nissan.addPart("Seat");

let volkswagen = nissan.clone();
volkswagen.setLicensePlate("34 YB 0000");
volkswagen.addPart("Exhaust");

console.log(nissan.getLicensePlate());
console.log(nissan.getCarPart());

console.log(volkswagen.getLicensePlate());
console.log(volkswagen.getCarPart());