a="The quick onyx goblin jumps over the lazy dwarf."

function panagram(str){
    let arr=str.split("")
    let data=[]
    for(let i=0;i<arr.length; i++){
        let code=arr[i].toLowerCase().charCodeAt()
        if(code>96 && code < 123){
            data[code-97]=true
        }
        
    }
    if(data.filter(e=>e).length==26) return true
    else return false
}
console.log(panagram(a))