// JavaScript Hoisting refers to the process whereby the interpreter appears to move the declaration of functions,variables,classes, or imports to the top of their scope.
/* In JavaScript, hoisting refers tp the built-in behavior of the languages through
which declarations of functions, variablees, and classes are moved to the top of their 
scope-all before code execution.In turn, this allows us to use functions, variables, and classes before they are declared.

*/


// console.log(x===undefined);
// var x=3;

// (function (){
//     console.log(x);
//     var x="local value";
// })();
// console.log(x);

// Function Hoisting

console.log(greeting());
function greeting (){
    return "Hello there";
}

// console.log(greeting());