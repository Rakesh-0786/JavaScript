// JavScript Closures:
/*JavaScript variables can belong to the local and global scope.

Global varibales can be made local(private) with closures.


Variales created without a declarations keyword(var,let,or const) are
always global, even if they are created inside  a function;


*/
// console.log(myFunction());
// function myFunction(){
//     a=4;

// }

// closures:
/*
A closures in javaScript is a function that has acess to the variables in 
its parent scope,even after the parent function has completed execution.
This allows for data to be closed over or remembered by the inner function , 
even after the outer function has returned. 

In others words, a closure gives you access to an outer function's scope from an
inner function.
*/

// example:
// this is called the lexical scoping.

// function init(){
//     var name="Rakesh"; //name is a local variable created by init

//     function displayName(){
//         // displayName() is the inner function that forms the closure
//         console.log(name); //use varibale declared in the parent function
    
//     }
//     displayName();
// }
// init();


// THis is the called the function Scope and Global Scope 

// if(Math.random() >0.5){
//     var x=1;
// } else{
//     var x=2;
// }
// console.log(x);


// // this is called the blocked Scope and the block scoped are only able with the let and const keywords.
// if(Math.random() >0.5){
//     const x=1; 
// } else{
//     const x=2;
//     console.log(x);
// }
// console.log(x);


function makeFunc(){
    const name="Rakesh";
    function displayName(){
        console.log(name);
    }
    return displayName();
}
const myFunc=makeFunc();
myFunc();