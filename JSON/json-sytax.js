// The JSON syntax is a subset of the javaScript sytax.

// JSON Syntax Rules:
// JSON Syntax is derived from JS object Notation sytax:
// Data is in name/value pairs
// Data is separated by commas
// Curly braces hold objects
// Square brackets hold arrays

// jSON Data - A Name and a Value
// JSON data is written as name/value pairs (aka key/value pairs).

// A name/value pair consists of a field name (in double quotes), followed by a colon, followed by a value:

// Example
// "name":"John"

// Exmple:
const myObj={name:'Rakesh' , age:20,city:"Ropar"};
// It can be Accessed like this
console.log(myObj.name);
console.log(myObj["name"]);

// Data Can be modified like this:
myObj.name="Kumar";
console.log(myObj.name);
myObj["name"] = "Gilbert";
console.log(myObj["name"])

// Both JSON and XML can be used to receive data from a web server.

// Valid Data Types
// In JSON, values must be one of the following data types:

// a string
// a number
// an object (JSON object)
// an array
// a boolean
// null

// JSON values cannot be one of the following data types:

// a function
// a date
// undefined

// JSON Arrays
// Values in JSON can be arrays.

// Example
{
"employees":["John", "Anna", "Peter"]
}