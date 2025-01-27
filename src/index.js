//Notes:
//Regular functions, Arrow functions and methods all deal with context in different ways
//If we never execute our code, there is no context
//With execution context, it's all about what variables, what functions, what data do we have access to in a particular scope
//scope and context are kind of like cousins -- scope is like what variables and functions do I have access to in the current scope
//with context, you have global context. Two keywords: window and 
//window is a special object that pertains to the execution context to the global scope but pertaining to the browser**
//For the window object, for any app that we run, there is a set amoutn of information that we always have access to by default.
//So functions and variables that we declare in our javascript will become available in window
//There are ways to manipulate the special keyword**
//We can change the value of the "this" keyword bc we're in a different scope
//If you have functions within functions, those wouldn't show up in the window though
//Anonymous functions would be lost bc we didn't declare them in global scope
//"displayFoodDetails" is globally accessible in the window object -- it is part of the data that is stored in memory for the global scope. 
//This means that hypothetically if you add too much data, you're using too much memory/computer has to work with a lot of memory -- which is one reason why we don't want to declare every variable in global scope
//You might not be able to see the varaibles in the window, but you can see the functions.
//You can add a variable globally available within the DOM (if you declare window.card = 'ace of spades' will add card : "ace of spades" to the window object). If you declare withouth "window" like so...
// card = 'ace of spades' then it will store this variable globally in the window object
//When you declare a variable with const, let, or var in the javascript, it doesn't get added to the window object because there is a chance they could be in function or block scope
//if you declare a variable without const, let, or var (generally considered bad practice but set that aside for a minute), then it will be globally available in the window
//detailImageElement = document.querySelector('.detail-image')
//So if you declare with const, var, or let it won't be globally available in window object
// but just bc we can do this, doesn't mean we necessarily should
//if it was globally accessible, it might introduce bugs
//So if we don't want to add in the global context, we make sure it is scope blocked to only be available in the function
//But named functions declared in global scope are always added to the window object and globally accessible
//"this" is a special object that the current execution context that we're in tells us extra information. And we can manipulate it and it has certain abilities bc it's globally accessible?*

//if you console.log("this") --- the default value will be the window object
// (window object gives us the functions and variables that are globally accessible)
//the value of "this" will vary and we can manipulate the value of "this" as well
//By default, the value of "this" will always be the window object
//But first.... why do we even need "this"
//if you look at any function, they have parameters. But through the value of "this" we wouldn't have to use a parameter. So you can replace your functionality thorugh use of context.
//But we have to understand how the behavior of our function is working

const restaurantMenuElement = document.getElementById('restaurant-menu')
const detailImageElement = document.querySelector('.detail-image')
const nameElement = document.querySelector('.name')
const descriptionDisplayElement = document.getElementById('description-display')

// Deliverable # 1 solution code goes here
function displayFoodDetails(){ //don't need to pass in "this" as the argument bc when you call the function you give it what the value of this will be
    console.log(this) // we want the value of this to be equal to food //now we can replace every reference of food to this and it will work the same way
    //this will be set to foods[0] bc that's what we set it to below...
    
    detailImageElement.src = this.image
    nameElement.textContent = this.name
    descriptionDisplayElement.textContent = this.description
}

function addFoodImageToRestaurantMenu(food){
    const imgElement = document.createElement('img')
    imgElement.src = food.image

    imgElement.addEventListener('mouseover', () => {
        // Deliverable # 3 solution code goes here
        console.log(food)
        // displayFoodDetails(food) //this is what we would have done in the past
        displayFoodDetails.call(food)//this will be the food object that we want to display
    })

    imgElement.addEventListener('click', () => {
        imgElement.remove()
        fetch(`http://localhost:3000/foods/${food.id}`, {
            method: "DELETE"
        })
    })

    restaurantMenuElement.appendChild(imgElement)
}

fetch('http://localhost:3000/foods')
.then(response => response.json())
.then(foods => {
    // Deliverable # 2 solution code goes here
    displayFoodDetails.call(foods[0]) //setting the value of this to foods[0]
    // displayFoodDetails(foods[0])
    foods.forEach(addFoodImageToRestaurantMenu)
})

// function eatIceCream(IcecreamName, price) {
//     console.log(this)
//     console.log(`${this.name} who is ${this.age} years old is eating ${icecreamName}. The price was ${price}!`)
//     // console.log("Ice cream eaten")
//     // console.log("Wow that was delicious ice cream")
// }

// eatIceCream() // console.logs "this" , which is the window object
// eatIceCream.call('hello world') //changes the value of "this" into the string that we passed in - becomes an object
// //call is another way to call a function but if you add a value into the parameter....
// //this gives you a string but as an object
//we could also use this to make a normal object with key value pairs

// eatIceCream.call({
//     name:"thisbe",
//     age: 29
// })
//we get the finished project inside an object
//Recap: you can change the value of this by passing in a value into .call()

//what happens if we do .apply()
//call and apply don't do quiteeee the same thing though -- it matters if there are parameters we are passing in
// eatIceCream.apply({
//     name:"thisbe",
//     age: 29
// }) //.apply() here would return the same thing as .call()
//but what if...

// eatIceCream.call({name: "Thisbe", age: 29}, "Chocolate Icecream", 5.99)
//But if 
// eatIceCream({name: "Thisbe", age: 29}, "Chocolate Icecream", 5.99) // but if you called this normally...
// but if you use call, XXX gets passed into the first parameter, XXX gets passed into the second parameter
//This is pretty related to object oriented programming


//What if I change call to apply.. lets see what happens
// eatIceCream.apply({name: "Thisbe", age: 29}, ["Chocolate Icecream", 5.99])
//The behavior will be the same for the first argument**, but will change with the next two arguments
//When you use apply there can only be two arguments, the second argument must be an array.
//The first argument will always be what we want the value of this to be.
//The second argument must be an array
//You'd only really use apply if you already have all your parameters in an array
//otherwise there is no point in making an array just for it to be taken apart later so in most cases you would just use .call() instead


//There is another one kind of similar to call
//call allows us to immediately change the value of this
//if you replace call with .bind,
//bind will retunr a function and lock the context value to whatever you pass into it
//so with bind you don't need to pass in any parameters, you just call bind on whatever your function is, and then whatever you pass in as an argument will be what the context is set to
// eatIceCream.bind({name:"Thisbe", age: 23})() //can call the function immediately
// A lot of times with bind we will store the return function into a variable

// const boundIcecreamFunction = eatIceCream.bind({name:"Thisbe", age: 23})
// boundIcecreamFunction("chocolate icecream", 5.00)
//it's a good idea to assign it to a variable so we can reference it and call it later
//we set the context (the value of this is whatever we pass in) and then we just call the function**

//What if I wanted to expand on this function....
//If I wanted to use the information and make it a string (once we have the information we can do whatever we want to it)
//Let's make a string that says "Thisbe eats chocolate ice cream" or something like that

// if this refers to some sort of object that has the key of name and key of age, then this.name will give us the value of Thisbe. this.age would give you the value of 29


//"this" is essentially just another way to pass information to our functions

// function printThis() {
//     console.log(this)
// }

// printThis()
// //the default value of this will be the window object (if we don't declare this anywhere)
// printThis.call() //Returns the default value of this (the window object)

//if the argument that you pass into .call is literally "undefined" then it will just ignore it 
//If you pass in "null" it also ignores it
// printThis.call(undefined)
// printThis.call(null)
// printThis.call(7)

// printThis.call("hello world") //returns {"hello world"}


//No difference if we use a named function or an anonymous function... but if we try it with an arrow function....
// const printThis = () => {
//     console.log(this) //defaults back to the window object
// }

//the value of this can't be manipulated for arrow functions
//their value of this can't be changed manually

const printThis = function() {
    console.log(this)
}


function outerFunction() {
    console.log(this)

    const innerFunction = () => {
        console.log(this) //because the arrow function is nested in another function, then this will be set to the same value as the outer function
    }
    innerFunction()
}
//An arrow functions context will always be the value of the this from the outer function

// outerFunction.call({name: "Bob", age: 34}) // this will make the this inside the nested arrow function be the this object
// outerFunction.call("steven") //this will make this inside the nested arrow function be {'steven'}
//if you're dealing with a method, the same thing applies - so if you have an arrow function nested inside of a method, the default value of this will just be the window object

// const student = {
//     name: "Daniel Smith",
//     age: 32,
//     introduction: function() {
//         console.log(this)
//     }
// }
// student.introduction()

//this references the object that this belongs to
//OUTPUT:
// {name: 'Daniel Smith', age: 32, introduction: ƒ}
//if your object key has a value of a function, the value is called a method (bc a method is technically just a function that belongs to an object and by making a function a value in an object, it belongs to the object... so it's a method)

// const student = {
//     name: "Daniel Smith",
//     age: 32,
//     introduction: function() {
//         console.log(`Hi! my name is ${this.name} and I'm ${this.age} years old.`)
//     }
// }
// student.introduction()

//This will log ...
//OUTPUT:
// Hi! my name is Daniel Smith and I', 32 years old.

// const student = {
//     name: "Daniel Smith",
//     age: 32,
//     introduction: () => {
//         console.log(this)
//     }
// }
// student.introduction()


//"this" will have the value of the window object bc the arrow function isn't nested (so this defaults to window object instead of to the value of this declared in an outer scope)



function createStudent() {
    const newStudent = {
        name: "Daniel Smith",
        age: 32,
        introduction: () => {
            console.log(this)
        }  
    }
    newStudent.introduction()
}

createStudent.call("hello")
//OUTPUT:
// String {'hello'}
//Because the nested arrow function looks to the outer function and this is assigned "hello" when we do createStudent.call("hello")



// function anotherFunc(param1, param2){
//     console.log(this)
//     console.log(param1)
//     console.log(param2)
// }
// const argumentsArray = ['apple', 'banana']

// anotherFunc.call({name: "baseball"}, argumentsArray[0], argumentsArray[1])
//OUTPUT:
// {name: 'baseball'}
// apple
// banana


//This is a better time to use apply bc we already have our parameters in an array
// function anotherFunc(param1, param2){
//     console.log(this)
//     console.log(param1)
//     console.log(param2)
// }
// const argumentsArray = ['apple', 'banana']

// anotherFunc.apply({name: "baseball"}, argumentsArray)
//OUTPUT:
// {name: 'baseball'}
// apple
// banana


function anotherFunc(){
    // console.log(this)
    // console.log(param1)
    // console.log(param2)
    const testFunc = (param1, param2) => {
        console.log(this)
        console.log(param1)
        console.log(param2)
    }

    testFunc
}
const argumentsArray = ['apple', 'banana']

anotherFunc.apply({name: "baseball"}, argumentsArray)


