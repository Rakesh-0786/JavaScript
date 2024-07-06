/* In JavaScript, asynchronous refers to the ability of the code to execute tasks independently of the main program flow. This allows the program to continue executing other code without waiting for the asynchronous task to complete. Asynchronous programming is crucial for tasks that may take time to complete, such as fetching data from a server, reading a file, or waiting for user input.

key-concept:
callback functions.
Promises
Async Await
*/
// using Callbacks
console.log("Start");
setTimeout(function(){
    console.log("Async operation complete after 2 seconds");
},2000);
console.log("End");