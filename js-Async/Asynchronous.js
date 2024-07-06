/*Asynchronous JavaScript:-
 */
function myDisplayer(someThing){
    console.log(someThing);
}

function myCalculator(num1,num2,callback){
    let sum=num1+num2;
    callback(sum);
}
myCalculator(1,2,myDisplayer);


// Waiting for a TimeOut:
// SetTimeout: it allows to run a function after a certain amount of time has passed.

// When using the JavaScript function setTimeout(), we can specify a callback function to be executed on timeout.

setTimeout(myFunction,3000);
function myFunction(){
    console.log("Hey Guys, This is Rakesh");
}

// Instead of passing the name of a function as an argument to another function, you can always pass a whole function instead.

setTimeout( () =>{
    console.log("Heyy");
},2000);


// SetInterval:-
// In JavaScript the setinterval function is used to repeatedly execute a specified function or code block at a fixed time interval.
// Waiting for Intervals:
// When using the JavaScript function setInterval(), we can specify a callback function to be executed for each interval.

// Example

// setInterval(function , milliseconds, param1, param2,...);
// function: This parameter specifies the function that will be executed at each interval defined by milliseconds.
// milliseconds: This parameter specifies the time interval (in milliseconds) between each execution of the function.
// param1, param2, ...: Optional parameters that represent arguments passed to the function specified by function.

setInterval(function() {
    console.log("Whatsup!");
},2000);


// using a nameed function 
function greet(){
    console.log("hellooo!");
}
setInterval(greet,1000);


// Passing parameters to the function
function displayMessage(message){
    console.log(message);
}
setInterval(displayMessage,2000,"This message Repeats every 2 seconds");
