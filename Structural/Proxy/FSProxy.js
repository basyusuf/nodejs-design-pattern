class FSProxy{
    constructor(fs_object){
        this.fs = fs_object;
    }
    readFile(path,format,callback){
        console.log(path)
        if(!path.match(/.md$|.MD$/)){
            return callback(new Error('Can only MD files'))
        }
        else{
            this.fs.readFile(path,format,(error,contents)=>{
                if(error){
                    console.error(error)
                    return callback(error);
                }
                return callback(null,contents);
            })
        }
    }
}
module.exports = FSProxy;