const path = require('path');
const FSProxy = require('./FSProxy');

const fs = new FSProxy(require('fs'));

let txt_file = path.join(__dirname,"readme.txt");
let md_file = path.join(__dirname,"readme.md");

let result = (error,contents)=>{
    if(error){
        console.log(error);
        process.exit(0);
    }
    console.log("Reading file...");
    console.log(contents);
}

fs.readFile(md_file,"UTF-8",result);
fs.readFile(txt_file,"UTF-8",result);

