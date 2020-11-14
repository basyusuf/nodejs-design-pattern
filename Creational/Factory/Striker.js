class Striker{
    constructor(name,no,skill_power){
        this._name = name;
        this._no=no;
        this._skill_power=skill_power;
    }
    shoot(){
        console.log(`${this._name} shooting...`)
    }
    getInfo(){
        return `Name:${this._name} No:${this._no} Skill Power:${this._skill_power}`
    }
}
module.exports=Striker;