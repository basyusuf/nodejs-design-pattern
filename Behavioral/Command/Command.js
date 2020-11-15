const fs = require('fs');
const path = require('path');
class ExitCommand{
    get name(){
        return "Exit Command"
    }
    execute(){
        process.exit(0)
    }
}
class CreateCommand{
    constructor(fileName,text){
        this.fileName = fileName;
        this.body = text;
        this.fullPath = path.join(__dirname,fileName);
    }
    get name(){
        return `Create file => [${this.fileName}]`
    }
    execute(){
        fs.writeFile(this.fullPath,this.body,f=>f);

    }

}
module.exports = {ExitCommand,CreateCommand}