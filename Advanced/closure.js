function kitchen(){

    let roast = 0;

    return function(){
        roast++

        return roast
    }
}

const fn1 = kitchen()

const fn2 = fn1()
// console.log(fn2);

const myFn = ()=> {
    let count = 0;

    return () => {
        count++

        return count
    }
}

const closed = myFn()

console.log(closed());
console.log(closed());
console.log(closed());

//note: closure use for still contained data from parent function and use after when need.and js not killed those data that use in child function

// t-i-q: in js garbage are collected by js. if we call fn js automatically collect unusual data and killed them. but when we use closure concept js not killed those data that related to the closure 