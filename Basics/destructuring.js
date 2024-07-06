const person = {
    firstName: "Rakesh",
    lastName: "Kumar",
    age: 20
};

// Destructuring assignment with default value
const { firstName, lastName, nation = "Indian", ...rest } = person;

console.log(firstName);  // Output: Rakesh
console.log(lastName);   // Output: Kumar
console.log(nation);     // Output: Indian
console.log(rest);       // Output: { age: 20 }
console.log(person);     // Output: { firstName: 'Rakesh', lastName: 'Kumar', age: 20 }
