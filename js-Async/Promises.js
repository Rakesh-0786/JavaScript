/*In JavaScript, a Promise is an Object that will produce a single value some time in the future.
If the Promise is successful, it will produce a resolved value, but if something goes wrong then it will
produce a reason why the promise failed.
 */

/*I Promise a Result! 
"Producing code" is code that can take some time
"Consuming code" is code that must wait for the result
A Promise is an Object that links Producing code and Consuming code.*/

// A Promise contains both the producing code and call to the consuming code.

let myPromise=new Promise(function(myResolve, myReject) {
    // Producing code (may take some time)
    myResolve(); //when successful
    myReject(); //when error
});

// Consuming code (Must wait for a fulfilled Promises)
myPromise.then(
    function(value){/*code if succeful */ },
    function(error){/*code if some error */}
);

// Promise Object Properties
// Pending
// Fullfiled
// Rejected
// The promise object supports two properties:state and result
// while a Promise object is pending (working) the result is undefined.
// when  a promise object is fullfilled the result is a value.
// when a promise object is  rejected the result is  an error object.


// how to use a Promise:
myPromise.then(
    function(value) {/*code if successful */},
    function(error){/*code if some error */}
);

