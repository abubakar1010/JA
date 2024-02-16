
console.log('first line');

setTimeout(() => {
    
    console.log("async fn");
}, 1000);

console.log('last line');

// note: this a example of asynchronous processing because it not stop 3 second for print second line. 

//t-i-q: function which is passed as a argument to another higher function that called typically a call back function

