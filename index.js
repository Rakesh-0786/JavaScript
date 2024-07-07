
// DOM Methods part2

// console.log(document);
// we  can access the domain with the help of document.domain
// console.log(document.domain)


// we can also get the URl with the help of document.URl
// console.log(document.URL);

//  console.log(document.head)

//  we can access the all element present in the document with the help of Document.all
// console.log(document.all)


// we can also access the index element with the help of document.all[2]

// console.log(document.all[4]);



//we can also change the title name with the help of document.title

// document.title="Rakesh kumar"


// const body=document.body;

// add Text 
// we can add text with the help of append 

 
// body.append('hello','bye everyone')

// body.appendChild('hello','bye')

// create  new element 
// const div=document.createElement('div')


// adding text to the element
// we can add the text in the body of any tag with the help of innerText and TextContent
// div.innerText="javascript"
// div.textContent="Javascript"
// body.append(div)
// body.appendChild(div)
//  console.log(div)



// difference between textcontent and innerText 
// innertext only get the visible part whereas the textContent pick the visible part as well as hidden part along with the spacing.


// const div=document.querySelector('div')
//  console.log(div.innerText)
// console.log(div.textContent)



// const body=document.body;

// strong element
// const div=document.createElement('div')
// const strong=document.createElement('strong');
// strong.innerText="this is a bold text";
// div.appendChild(strong);

// innerHtml
// innerHTML is an HTML element property that has two uses for web developers: 1) You can use it to get the internal HTML content of any HTML element as an HTML string. 2) You can also use it to set or change elements' innerHTML content. 

// div.innerHTML='<strong> <p>This is a bold text</p> </strong>'

// body.append(div)



// remove elements
// there are two methods to remove the element
// 1  .remove()
// 2  div.removeChild(spanOne)

const div=document.querySelector('div');

const spanOne=document.getElementById('one')
const spanTwo=document.getElementById('two')

// spanOne.remove()

// div.removeChild(spanOne)


// attributes properties and methods
// we can get the value of attribute with the help of getAttributes()

// console.log(spanOne.getAttribute('name'))

// we can also add the attributes with the help of setAttribute
// Attributes take two parameter one attribute name and second is value


// spanOne.setAttribute('name','Rakesh')




// we can also remove the attribute 

// spanOne.removeAttribute('name')

// we can also chnage the ID value
// spanOne.id="wbgdecf"



// classes methods or properties
// we can easily add the new class with the help of .add()

//  spanTwo.classList.add("new-class")
//  spanOne.classList.add("first-class")

//  we can aslo remove the class with the help of remove ()
// spanTwo.classList.remove("new-class")

// spanTwo.className="jdkncjvwj"
// spanTwo.className="new-class a b c dsjakjwbfcn"


// toggle
// toggle help to hide the visible element and visible the hide element
// it works like swtich button 

// spanOne.classList.toggle("new-class")

// style

// spanOne.style.setProperty('color','green')
spanOne.style.backgroundColor='green'
spanOne.style.color='blue'

