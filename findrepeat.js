a=[{name:'rahul',marks:50,type:'marks'},{name:'chinamay',marks:20,type:'marks'},{name:'ashish',marks:45,type:'marks'},{name:'vikas',marks:29,type:'marks'},{name:'chinamay',marks:10,type:'grace'}]


function findRepeat(arr) {
    let data={}
    for (let i = 0; i < arr.length; i++) {
        if(data[arr[i]['name']]){
            data[arr[i]['name']]['Grace']=arr[i]['type']=='marks'?data[arr[i]['name']]['marks']:arr[i]['marks']
           data[arr[i]['name']]['marks']+=arr[i]['marks']
        }else{
            data[arr[i]['name']]=arr[i]
        }
    }
    return Object.values(data)
}
console.time('doSomething')
console.log(findRepeat(a))
console.timeEnd('doSomething')