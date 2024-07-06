//create a function that takes a strings as input and returns the strings reversed using string  manipulation techniques

// Function to reverse a string

function reverseString(input){
    return input.split('').reverse().join("");

}
const originalString="Hello,World";
const reversedString=reverseString(originalString);
console.log(reversedString);