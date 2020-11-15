const Iterator = require('./Iterator');

const my_level_arr = ["A1","A2","B1","B2","C1","C2"];

let level_iterator = new Iterator(my_level_arr);

for(let index=0;index<my_level_arr.length-1;index++){
    console.log(level_iterator.current());
    level_iterator.next();
}

console.log(level_iterator.first());
console.log(level_iterator.last())