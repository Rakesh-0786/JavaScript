/*JavaScript-Callbacks:-
" I WILL CALL BACK LATER"
A callBack is a function passed as an argument to another function.
This technique allows a function to call another function .
A callback function can run after another function has finished.

in Real World Callback function are used with the Asynchronous.

 */
// Example 1

function displayMessage(message){
    console.log(message);
}

function processUserInput(callback){
    const input="Hello,World";
    callback(input);
}

processUserInput(displayMessage);


// Example 2
function myDisplayer(someThing){
    console.log(someThing);
}

function myCalculator(num1, num2,myCallback){
let sum=num1+num2;
myCallback(sum);
}
myCalculator(4,5,myDisplayer);

// Example 3
const myNumbers=[4,1,-20,-7,5,9,-6];
console.log(myArray);
const postNumbers=removeNeg(myNumbers, (x) => x >=0);
function removeNeg(numbers, callback) {
    const myArray = [];
    for (const x of numbers) {
      if (callback(x)) {
        myArray.push(x);
      }
    }
    return myArray;
  }