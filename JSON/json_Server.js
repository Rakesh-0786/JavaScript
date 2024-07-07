// parse the data with JSON.parse(), and the data becomes a JavaScript object.


// Sending Data:
// If you have data stored in a javaScript object, you can convert the object into JSON, and send it to the server.

console.log("Convert a JavaScript object into a JSON string and send it to the server.");

const myObj={name:"Rakesh", age:20, city:"Ropar",};
const myJSON=JSON.stringify(myObj);
window.location="demo_json.php?x=" + myJSON;;