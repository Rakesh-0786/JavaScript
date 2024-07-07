// A common use of JSON is to Exchange data to/from a web server.
// When receiving data from a web server, the data is always a string.
// Parse the data with JSON.parse(), and the data becomes a JavaScript object.

// Example - Parsing JSON
// Imagine we received this text from a web server:

// '{"name":"John", "age":30, "city":"New York"}'
// Use the JavaScript function JSON.parse() to convert text into a JavaScript object:

// const obj = JSON.parse('{"name":"John", "age":30, "city":"New York"}');
const txt='{"name":"Rakesh", "age":20,"city":"Ropar"}'
const obj=JSON.parse(txt);
console.log(obj);
console.log(obj.name+" ,"+ obj.age);


// in array
const text = '[ "Ford", "BMW", "Audi", "Fiat" ]';
const myArr = JSON.parse(text);
console.log(myArr[0]);
