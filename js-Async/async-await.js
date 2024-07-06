// async and await make promises easier to write
// async makes a function return a Promise 
// await make a function wait for a Promise


// The keyword async before a function makes the function return a promise.
async function myFunction(){
    return "Hello";
}

function myDisplayer(some){
    console.log(some);
}
async function myFunction(){
    return "HEllo!";
}

myFunction().then(
    function(value){
        myDisplayer(value);
    },
    function(error){
        myDisplayer(error);
    }
);


// Await
// The Await keyword can only be used inside an async function.
// The await keyword makes the function pause the execution and wait for a resolved promise before it continues.
// let value=await Promise;

// basic syntax.

async function myDisplay(){
    let myPromise=new Promise(function(res,rej){
        res("Hello from Rakesh!");
    });
   let result=await myPromise;
   console.log(result);
}
myDisplay();
