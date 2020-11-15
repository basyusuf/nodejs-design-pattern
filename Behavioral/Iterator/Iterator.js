class Iterator{
    constructor(iterator_list=[]){
        this.items = iterator_list;
        this.current_index = 0;
    }
    first(){
        let [first] = this.items;
        return first;
    }
    last(){
        let [last] = [...this.items].reverse();
        return last;
    }
    hasNext(){
        return this.current_index<this.items.length -1;
    }
    current(){
        return this.items[this.current_index];
    }
    next(){
        if(this.hasNext()){
            this.current_index += 1;
        }
        return this.current();
    }
    prev(){
        if(this.current_index !==0){
            this.current_index -= 1;
        }
        return this.current();
    }
}
module.exports = Iterator;