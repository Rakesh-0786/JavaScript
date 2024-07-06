//jaavaScript Promise Examples
// To demonstrate the use of promise, we will use the callback.
// waiting for a timeout
// waiting for a file

// Waiting for a Timeout
// Example using callback
setTimeout(function(){
    myFunction("Hey Guuys!");
  },2000);
    function myFunction(value){
        console.log(value);
    }

    // Exmample using Promise
    let myPromise=new Promise(function(res,rej){
        setTimeout(function(){
            res("Hello EveryOne!");
            // rej("eroor");
        },3000);
    });

    myPromise.then(function(value){
        console.log(value);
    })