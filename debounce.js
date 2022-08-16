function DebouncFun (fn, d) {
    let timer;
    return function (...args) {
      clearTimeout(timer);
      timer = setTimeout(() => {
        fn.apply(this, arguments);
      }, d);
    };
  };

function test(a){
    console.log("test called",a)
}
CallFunc = this.DebouncFun(test, 1400);

CallFunc(1)
CallFunc(2)
CallFunc(3)