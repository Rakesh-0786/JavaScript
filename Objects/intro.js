// Methods for Defining JavaScript Objects
/*Using an Object Literal
Using the new keyword
Using an object Constructor
Using Object.assign()
using Object.create()
using Object.fromEnties()

An Object literal is a list of property name:values inside curly braces {}.

{firstName="Rakesh",lastName:"kumar", age:50, eyeColor:"blur"};

An object literal is also called an object initializer.


// create an Object
const person={};

// add Properties
person.firstName="Rakesh";
person.lastName="Kumar";
person.age="45";
person.eyeColor="black";



// Create an empty javaScript object using new Object() and add 4 properties:
// Create an Object
const person=new Object();

// Add
person.firstName="rakesh";
person.lastName="kumar";
person.age=23;
person.eyeColor="blur";
 */

// Object Constructor Functions

// Sometimes we need to create many objects of the same type.
// To create an Object type we use an object constructor function.
// IT is considered good practise to name constructor fucnction with an upper-case first letter.


// function  Person(first, last,age, eye){
//     this.firstName=first;
//     this.lastName=last;
//     this.age=age;
//     this.eyeColor=eye;
// }
// const MyPerson=new Person("Rakesh","Kumar",32,"blue");
// console.log(MyPerson);

// JavaScript Object.assign()
// The object.assign() method copies properties from one or more source objects to a target object.

// Create target Object

const person1={
    firstName:"Rakesh",
    lastName:"Kumar",
    age:20,
    eyeColor:"blue"
};

// Create Source object
 const person2={firstName:"Rakesh", lastName:"kumar"};

//  Assign Source to Target
console.log(Object.assign(person1,person2));
// JavaScript Object.entries()
// ECMASCRIPT 2017 added the Object.entries() method to Objects.
// Object.entries() returns an array of the key/value pairs in an object.
let txt=Object.entries(person1,person2);
console.log(txt);


