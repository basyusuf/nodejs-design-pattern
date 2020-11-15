const CatalogItem = require('./CatalogItem');
const CatalogGroup  = require('./CatalogGroup');

let cream1 = new CatalogItem("Dove",90);
let cream2 = new CatalogItem("BodyF",30);
let cream3 = new CatalogItem("Haci Sakir",5);

let cream_group = new CatalogGroup("Cream Group",[cream1,cream2,cream3]);

cream_group.print();
console.log(cream_group.getPrice());

let shoes1 = new CatalogItem("Nike",220);
let shoes2 = new CatalogItem("Adidas",200);
let shoes3 = new CatalogItem("Puma",170);

let shoes_group = new CatalogGroup("Shoes Group",[shoes1,shoes2,shoes3]);

shoes_group.print();
console.log(shoes_group.getPrice());

let company_group = new CatalogGroup("My Company",[cream_group,shoes_group]);
company_group.print();
console.log(company_group.getPrice());