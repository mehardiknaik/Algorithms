array=[5,1,4,2,3,-1]

function sort(arr){
    for(let i=0;i<arr.length; i++){
        let currnum=arr[i]
        let previndex=i-1
        while(previndex >=0 && arr[previndex]>currnum){
            arr[previndex+1]=arr[previndex]
            previndex--
        }
        arr[previndex+1]=currnum
    }
     return arr
}
console.log(sort(array))