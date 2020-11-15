const Conductor = require('./conductor');
const {ExitCommand,CreateCommand} = require('./command');

const {createInterface} = require('readline')
const rl = createInterface({
    input:process.stdin,
    output:process.stdout
});

console.log("create <fileName> <text> | exit | history");
rl.prompt()

rl.on("line",input =>{
    let [commandText,...remaining] = input.split(' ');
    let [fileName, ...fileText] = remaining;
    let text = fileText.join(' ');
    switch(commandText){
        case "history":
            Conductor.listHistory();
            break;
        case "exit":
            Conductor.run(new ExitCommand());
            break;
        case "create":
            Conductor.run(new CreateCommand(fileName,text));
            break;
        default:
            console.log("Undefined command");
            break;
    }
})