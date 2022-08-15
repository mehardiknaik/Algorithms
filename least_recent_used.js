//with Class
class LRU{
    constructor(max){
        this.max=max
        this.values=new Map()
    }
    get(key){
        return this.values.get(key)
    }
    set(key,val){
        if(this.max===this.values.size){
            this.values.delete(this.values.keys().next().value)
        }
        this.values.set(key,val)
    }
}
const abc=new LRU(2)
abc.set("name","gajab")
abc.set("add","dvsdvdv")
abc.set("no","954563")
abc.set("em","scf@fs")
console.log("from class",abc.values)
console.log("from class",abc.get("em"))

//with Function

function LRUFun(max) {
    let catche=new Map()
    function set (key,val) {
        if(max===catche.size){
            catche.delete(catche.keys().next().value)
        }
        catche.set(key,val)
    }
    function get(key){
        return catche.get(key)
    }
    return {set,catche,get}
}

const ac=LRUFun(2)
ac.set("name","gajab")
ac.set("add","dvsdvdv")
ac.set("no","954563")
ac.set("em","scf@fs")
console.log("from function",ac.catche)
console.log("from function",ac.get("em"))