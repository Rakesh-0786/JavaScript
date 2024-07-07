// Json Stringify is used to convert the Object into a String with JSON.stringfy().

// Imagine we have this object in JavaScript:
// const obj = {name: "John", age: 30, city: "New York"};

// Use the JavaScript function JSON.stringify() to convert it into a string.
// const myJSON = JSON.stringify(obj);
// console.log(myJSON);


// Stringify a JavaScript Array.
// It is also possible to stringify JavaScript arrays:

// Imagine we have this array in JavaScript:

// const arr = ["John", "Peter", "Sally", "Jane"];

// Use the JavaScript function JSON.stringify() to convert it into a string.

// const myJSON = JSON.stringify(arr);

// const arr=["Rakesh","Kumar","Ravi","Shashwat","Tiwari","Rishabh","Neta"];
// const myJSON=JSON.stringify(arr);
// console.log(myJSON);

// Import the node-localstorage module
const { LocalStorage } = require('node-localstorage');
const localStorage = new LocalStorage('./scratch'); // './scratch' is the directory for storing data

// Create an object
const myObj = { name: "John", age: 31, city: "New York" };

// Convert the object to a JSON string
const myJSON = JSON.stringify(myObj);

// Store the JSON string in localStorage
localStorage.setItem("testJSON", myJSON);

// Retrieve the JSON string from localStorage
let text = localStorage.getItem("testJSON");

// Parse the JSON string back to an object
let obj = JSON.parse(text);

// Access and log the object's properties
console.log(obj.name); // Logs: John
