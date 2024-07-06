// Two arguments(resolve and reject) are pre-defined by JavaAScript.
// We will not create them, but call one of them when the executor function is ready.
// very often we will not need a reject function.

async function myDisplay(){
    let myPromise=new Promise(function(res){
        res("hello!!");
    })
    let result=await myPromise;
    console.log(result);
}
myDisplay();




// let myPromise = new Promise(function(resolve, reject) {
//     // Simulate an asynchronous operation
//     let success = true;
//     if (success) {
//         resolve("Operation successful!"); // Resolve the promise with a value
//     } else {
//         reject(new Error("Operation failed!")); // Reject the promise with an error
//     }
// });

// myPromise.then(
//     function(value) {
//         console.log(value); // Logs: Operation successful!
//     },
//     function(error) {
//         console.error(error); // Logs: Error: Operation failed!
//     }
// );
