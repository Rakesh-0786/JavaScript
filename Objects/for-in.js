// const person={
//     name:"Rakesh",
//     age:20,
//     city:"Ropar"
// };
// for(let key in person){
//     console.log(key,person[key]);
// }

// const x=function(a,b){
//     return a*b;
// }
// console.log(x(2,4));

// console.log(myFunction(3));
// function myFunction(y){
//     return y*y;
// }


// anonymous self invoking function (function without name).
(function () {
    console.log("Hello")
})();



// function can be Used as Values

function myFunction(a,b){
    return a*b;
}
let x=myFunction(4,3);
console.log(x);