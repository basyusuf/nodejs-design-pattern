const GoalKeeper = require('./GoalKeeper');
const Striker = require('./Striker')

playerFactory = (type,name,no,sp,hand)=>{
    if(type==="GoalKeeper"){
        return new GoalKeeper(name,no,sp,hand);
    }
    else{
        return new Striker(name,no,sp);
    }
}

module.exports=playerFactory;