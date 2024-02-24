function kitchen(){

    let roast = 0;

    return function(){
        roast++

        return roast
    }
}

const fn1 = kitchen()

const fn2 = fn1()
console.log(fn2);