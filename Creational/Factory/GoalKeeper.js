class GoalKeeper{
    constructor(name,no,skill_power,hand){
        this._name = name;
        this._no=no;
        this._skill_power=skill_power;
        this._hand=hand;
    }
    keep(){
        console.log(`${this._name} keeping...`)
    }
    getInfo(){
        return `Name:${this._name} No:${this._no} Skill Power:${this._skill_power} Hand:${this._hand}`
    }
}
module.exports=GoalKeeper;