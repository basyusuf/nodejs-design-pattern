class Logger{
    constructor(){
        this.logs = [];
    }
    getMessages(){
        return this.logs;
    }
    sendLog(message){
        let time = new Date().toISOString();
        this.logs.push({message:message,timestamp:time})
        console.log(`Message:${message} - TimeStamp:${time}`)
    }
}
class Singleton{
    constructor(){
        if(!Singleton.instance){
            console.log("Create Object...")
            console.log(Singleton.instance)
            Singleton.instance = new Logger();
            console.log(Singleton.instance)
        }
        return Singleton.instance;
    }
}
module.exports=Singleton;

//Note: Delete Singleton Class and module.exports = New Logger() easy way to use Singleton :)