class Conductor{
    constructor(){
        this.command_history = []
    }
    run(command){
        console.log(`Executing Command: ${command.name}`);
        command.execute();
        this.command_history.push(command);
    }
    listHistory(){
        this.command_history.map((historyItem)=>console.log(historyItem.name))
    }
}
module.exports = new Conductor();