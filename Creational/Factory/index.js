const playerFactory = require('./playerFactory');

let goalkeeper = playerFactory('GoalKeeper',"Volkan Demirel",1,99,"Right");
let striker = playerFactory('Striker',"Papiss Cisse",9,73);

console.log(goalkeeper.getInfo());
console.log(striker.getInfo())