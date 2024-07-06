/*Function Sequence :
javaScript  functions are executed in the sequence they are called.Not in the sequence they are defined.
 */

function myDisplayer(some){
    console.log(some);
}

function myFirst(){
    myDisplayer("hello");
}
function mySecond(){
    myDisplayer("GoodBye!");
}
myFirst();
mySecond();

function myCalculator(num1, num2){
    let sum=num1+num2;
    return sum;
}
let result=myCalculator(5,5);
console.log(result);