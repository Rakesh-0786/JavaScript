// // through HTML elements
// const myHeading=document.querySelector("h1");

// // through css Selector
// const hElements=document.querySelector(".h");
// hElements.textContent="Updated Text";
// //document.querySelector is a method in JavaScript that allows you to select and retrive elements from the DOM(Document Object Model) using a CSS selector.
// // DOM Context: Document refers to the entire HTML Document that has been loaded into the browser.

// // Nested
// const firstListedItem=document.querySelector("h1 .h");
// myHeading.textContent="Hello,World!";

// let iceCream="Chocolate";
// if(iceCream==="Chocolate"){
//     alert("Yay,I love chocolate ice cream");
// }else{
//     alert("Aww, but chocolate is my favourite..");
// }


// // event handler
// document.querySelector("html").addEventListener("click", function (){
//     alert("Hello this")
// })

// Adding an image changer
const myImage=document.querySelector("img");
myImage.onclick = () =>{
    const mySrc=myImage.getAttribute("src");
    if(mySrc==="images/firefox-icon.png"){
        myImage.setAttribute("src", "images/firefox-icon.png");

    }
};

// 
// function multiply(num1,num2){
//     let result=num1*num2;
//     return result;
// }
// multiply(4,7);
// multiply(20,20);
// multiply(0.5,3);
