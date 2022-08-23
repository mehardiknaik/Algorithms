function throttlefun(fun,time){
  let throttle=false
  return function (...args){
    if(!throttle){
      throttle=true
      setTimeout(()=>{
        throttle=false
      },time)
      fun.apply(this,args)
    }
  }
}
function test(d){
  console.log("wd",d)
}
const CallFunc=throttlefun(test,1000)
CallFunc(1)
CallFunc(1)