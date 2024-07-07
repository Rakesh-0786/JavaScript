<<<<<<< HEAD
//  Imagine you work for an e-commerce com-any1 Your task is to create a function that takes the -rices of all 
// the -roducts in a customer's cart as in-ut -arameters1 The function should then calculate and return the 
// total sum of all the -roduct -rices1 This will hel- the com-any easily calculate the total cost of the 
// customer's sho--ing cart


function calculateTotalCartValue() {
    let totalValue = 0;
    for (let i = 0; i < arguments.length; i++) {
      totalValue += arguments[i];
    }
    console.log(`The total cart value is ${totalValue}`);
    return totalValue;
  }
  
  calculateTotalCartValue(125, 20, 30);
  
  // OUTPUT: The total cart value is 175
  
=======
//  You are building a simple login system+ Implement the login feature that has two variables: username and
// password+ You should -he-k if the username is "admin" and the password is "12345"+ If both -onditions are
// true, print "Login su--essful"W otherwise, print "Invalid -redentials"+

let username="admin";
let password="12345";
if(username=="admin" && password=="12345"){
    console.log("Login Succesfully");
}
else{
    console.log("invalid credentials");
}


>>>>>>> origin/main
