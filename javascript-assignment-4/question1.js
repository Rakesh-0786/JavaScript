// Create an object representing a car with properties like "make," "model," and "year" Write a function to
// display all the properties of the car.


const car={
    make:"Toyato",
    model:"Ford Mustang",
    year:2023,
};
 function displayCarProperties(car){
    for(const property in car ){
        console.log(`${property}: ${car[property]}`);
    }
 }

 displayCarProperties(car);
// console.log(car)