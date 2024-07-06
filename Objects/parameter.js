// function myFunction(x,y){
//     if(y===undefined){
//         y=2;
//     }
//     return x*y;
// }
// console.log(myFunction(4));

function myFunction(x,y=10){
    return x+y;
}
console.log(myFunction(5));

// Function Rest Parameter:
// The rest parameter(...) allows a function to treat an indefinite number of arguments as an array.
// Example:
function SubmitEvent(...args){
    let sum=0;
    for(let arg of args)
        sum+=arg;
    return sum;
}
let x=SubmitEvent(3,5,5,3,12,324,12,1);
console.log(SubmitEvent(x));