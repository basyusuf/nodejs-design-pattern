let Logger = require('./Logger');
function main(){
    let logger1 = new Logger();
    let logger2 = new Logger();
    let logger3 = new Logger();

    logger1.sendLog("Logger 1 say 'Hi!'");
    logger2.sendLog("Logger 2 say 'Hi!'");
    logger3.sendLog("Logger 3 say 'Hi!'");

    //Select any class and call it.
    console.log(logger3.getMessages());
}

main();