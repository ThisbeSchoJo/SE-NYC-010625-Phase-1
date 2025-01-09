// write your code here
//NOTES
//ARRAYS
const studentNames = ['Thisbe', 'Obi', 'Brandon']
// if you don't have a variable....
// ['Thisbe', 'Obi', 'Brandon']
// , the array is stand alone 
// and wouldn't be able to be accessed anywhere else

//You can add elements to an array with .push and .unshift (deconstructively)
//or you can add elements to an array with .slice() (non-deconstructively)
//.push, .unshift, .slice are methods (like functions but they have the ".")
//.push and .unshift return the new number of elements in the array
//You can add any data types to arrays 
// (they can hold strings, numbers, bootleans, other arrays, objects, etc)
//can retrieve the name of elements in an array with bracket notation
//indices start at 0
// studentNames[0]
// >>'Thisbe SJ'
//You can see the length of an array with .length
//studentNames.length
//>> 3
//To change the value of an element in an array...
//you can use bracket notation and the assignment operator

studentNames[2] = 10
//>>studentNames = ['Thisbe', 'Obi', '10']

//SHORTCUT TIP: command delete will delete whole line when coding
//"CRUD" - create, retrieve, update, delete  = 4 basic operations 
// that can be performed on data

studentNames.push((num) => num * 2)
//>>studentNames = ['Thisbe', 'Obi', '10', '(num) => num * 2']

// You can call a function that is inside of an array by adding parantheses
studentNames[3](5)
//>>10

//You can add elements to the beginning of an array with .unshift
//You can add multiple at a time
const studentNames2 = ['Thisbe SJ', 'Brandon Bakus'];
// console.log(studentNames2)
studentNames2.push("Cynthia Butler")
// console.log(studentNames2)
studentNames2.unshift("Ace Smith")
// console.log(studentNames2)
studentNames2.push("Tosca SJ", "Tati SJ") //Adds 2 to end
// console.log(studentNames2)
studentNames2.unshift("Aaron Johnson", "Erana James") //Adds 2 to beginning
// console.log(studentNames2)
//////////////////////////////////

//Can use .pop and .shift to remove elements from an array
//.pop removes from end
//.shift removes from beginning
studentNames2.pop()
// console.log(studentNames2)
studentNames2.shift()
// console.log(studentNames2)

//You can destructively remove an element from an  array with .splice
// //if you just give one argument, that is where it will start splicing, 
// //And if you don't give it a stop, it will default to going to the end
// console.log(studentNames2)
// studentNames2.splice(1)
// console.log(studentNames2) //returns ['Erana James']
//if you give it two arguments,
//first tells you where to start splice
//second tells you the number of elements to remove
// console.log(studentNames2)
studentNames2.splice(1,1)
// console.log(studentNames2)
//a third argument would tell you 
// console.log(studentNames2)
studentNames2.splice(1,1, "Ruby Cruz") //Replaces student at index 1
// console.log(studentNames2)
//You don't have to remove anything though... Could just add in a student somewhere
// console.log(studentNames2)
studentNames2.splice(1,0, "Kit") //Adds student at index 1
// console.log(studentNames2)
//You could also use a delete operator (more common to use with objects)
//But it won't do it properly because it will just leave an empty spot....
//If you only pass in "0" you'll delete all elements from the array
//studentNames2.splice(0)
//>>studentNames2 = []
//Can add as many elements as you want at once with .splice
// studentNames2.splice(0,0,"Shane","Vi")
// // console.log(studentNames2)
// studentNames2.splice(0,2) //just removing the two I just added
// console.log(studentNames2) 

//You can use .slice to non-destructively alter an array
//first argument is starting point 
// (getting all the elements from the original starting at that point)
// studentNames2.slice(0)
// console.log(studentNames2)
//Important to know nondestructive methods (especially important for React)
//Second argument is the stopping point NOT including the element at that index
// console.log(studentNames2)
// const studentNames3 = studentNames2.slice(1,3)
// console.log(studentNames2) //studentNames2 will look the same because .slice is not destructive
// console.log(studentNames3)

//NOTES
//OBJECTS
//Can be empty when you declare it
//Objects have key value pairs (separated by a colon)
const person = {
    name: 'Thisbe Scho-Jo'
}
//You can reference the name of a key with dot notation
//And then you can look up the value of a key...
// console.log(person.name)
//if you try to look up a key that doesn't exist...
//You get undefined

//An array is an object data type
//technically you could add elements to an array with dot notation bc of this
//but it's bad practice so don't do it

//can also use dot notation to add a new element
// person.age
// console.log(person.age)
person.age = 29
// console.log(person.age)
// console.log(person)
//You can also add a new element with bracket notation
//must put "" around the new key
person["isStudent"] = true
// console.log(person)
// console.log(person.age)

//You can also use dot notation to modify objects
person.name = "Ruby Cruz"
// console.log(person)

//You can also refer to a variable to set a key's value
const keyName = 'age'
// console.log(person[keyName])
person[keyName] = 58
// console.log(person)

//Sometimes you can't use dot notation...
//if the keys are named all weirdo
// person.phone-numer = "1234567890" //this is syntactically invalid key name bc of the "-"
//you won't be able to name the key "phone-number" with dot notation but you could use bracket notation
person['phone-numer']="1234567890"
// console.log(person)
//if you name something poorly like this, then you won't be able to reference with dot notation everrr

//You can't rename a key technically, but you could delete the key value pair and replace it
delete person['phone-numer']
// console.log(person)
person.phoneNumber = '1234567890'
// console.log(person)

//You might want to save the key value pair somewhere before you delete it (forever)
const temporaryStorage = person['phone-numer']

person.phoneNumber = temporaryStorage

//Objects are not ordered! Order is arbitrary and can't be relied on

//WHEN TO USE ARRAYS VS OBJECTS
//if you want the same data type for each element, it makes sense to use an array
//if you're trying to describe a certain entity, it might make more sense to do an object

//side note: you can call dot notation on a string (treats it like an object)
//which is why you can call...
//'hello'.toUpperCase

//NOTES
//LOOPING


//FOR LOOP
//you can call a function over and over again with a for loop
//you want to define loop conditions
//for loop condition you need to specify a starting point index
//first part is telling you where to start (0)
//counter tells you when to stop the loop - what condition must be met
//the third part increments - you want to eventually no longer meet the condition
//(or else you'll have an infinite loop)
for(let counter = 0; counter < 10; counter++){ //fyi - it doesn't have to be called "counter"
    // console.log("Welcome to Flatburger Restaurant!")
}
//with a for loop, you know how many times exactly you want to loop
//while loop is a bit more open ended,
//while loop continues until a condition is met

//WHILE LOOP
//must decalre the variable for the while loop
let counter = 0
while(counter < 10) { //this will result in an infinite loop
    // console.log("Welcome to Thisbickle's Pickles")
    counter++ // you could also end a loop with "break"
}

//If you don't have the info you need for a for loop to do it's thing, then you can use a while loop

//NOTES
//ARRAY ITERATION WITH for...of VS LOOPING THROUGH AN ARRAY's ELLEMENTS WITH A REGULAR FOR LOOP
//first with a regular for loop
for(let index=0; index < studentNames2.length; index++) {
    // console.log(studentNames2[index]) //you can reference index in the square brackets so it updates to the current one each time (instead of just printing the same name each time)
}
//but we can do better than this by *iterating* through an array
//the array takes care of the iterating for us
//so now... using for...of
for(const name of studentNames2) {//we can redeclare the variable because it gets dumped out with each iteration (but you can't do that what a for loop)
    // console.log(name) //can cycle through the array - we use a variable to hold the current iteration of the array
}

//Object iteration with for...in (can't be done with for...of)
//You can't iterate over an object with for... of (maybe bc they don't have a set order of structure)
for(const key in person) {
    // console.log(person[key])//this will give you all the values
}

//forEach array iterator method -- must give it a callback function (first argument will be called)
studentNames2.forEach((name) => { //give it a parameter so it has something to hold each of the values as we iterate over them
    // console.log(name)
})
//forEach doesn't return anything but map, filter, and find will return something


//map() Array iterator method

//since map() returns something, we can assign it to a variable/make it into an array
const studentIntros = studentNames2.map((student) => {
    return `Hi ${student}!` // if you don't return anything, it will default to making an array of undefineds
})
// console.log(studentIntros)

//filter() and find() Array iterator methods
//find and filter are similar in that they both look for a condition that is met
//also in both cases you're returning an array (same as map)
const numbers = [7, 14, 21, 28]

//filter() Array iterator method
const filteredNumbers = numbers.filter((number) => {
    return number < 15 // will only return whatever is true.. so set it to something that is true for the criteria you want to capture, e.g., numbers less than 15
}) //we want to get a new array (from the numbers array) but only with the numbers that meet a certain condition
// console.log(filteredNumbers)

// console.log(studentNames2)
//Another exampleL: could also use filter array iterator method to filter certain names
const filteredNames = studentNames2.filter((name) => {
    return name[0] === "E" // will only return whatever is true.. so set it to something that is true for the criteria you want to capture, e.g., names that start with E
}) //we want to get a new array (from the studentNames2 array) but only with the names that meet a certain condition
// console.log(filteredNames)

//find() Array iterator method
//different from filter in that it will give you the first element that meets that condition
const foundNumber = numbers.find((number) => {
    return number <15 // just gives you the first element that meets criteria - doesn't give you an array
}) // will give you "undefined" if none of the elements meet the criteria
// console.log(foundNumber)

const foundName = studentNames2.find((name) => {
    return name[0] === "E" // will only return the first name that meets this condition
})
console.log(foundName)







//DELIVERABLES
const foodsArray = []
const burgerObject = {
    name: "Flatburger"
}

burgerObject.description = "Our signature Flatburger which is a super delicious cheeseburger that'll leave you wanting another Flatburger! It's too good to be true!"
console.log(burgerObject)

burgerObject["price"] = 14.99
console.log(burgerObject)

foodsArray.push(burgerObject)
console.log(foodsArray)

const burgerObject2 = {
    name: "Maple Bacon Burger",
    description: "A great option for a breakfast burger or a great option for brunch if you're hungry enough to eat 2 of these burgers!",
    price : 7.99
}

foodsArray.push(burgerObject2)
console.log(foodsArray)

const vegFriendly = {
    name: "veggie burger",
    description: "Great option for vegetarians",
    price: 10
}

const uglyDog = {
    name: "hotdog with fixins",
    description: "She's ugly but p good",
    price: 5
}

const freeSlop = {
    name: "sloppy joe",
    description: "Not first date friendly",
    price: 0
}

foodsArray.push(vegFriendly, uglyDog, freeSlop)
console.log(foodsArray)

// console.log(foodsArray.name[0])
for (let i=0; i<foodsArray.length; i++) {
    console.log(foodsArray[i].name)
}


for(const food of foodsArray) {
    console.log(food.description)
}

foodsArray.forEach((food) => {
    console.log(food.price)
})

const flatburger = foodsArray.find((food) => {
    return food.name === "Flatburger"
})
console.log(flatburger)

const cheapFoods = foodsArray.filter((food) => {
    return food.price < 10.99
})
console.log(cheapFoods)

const priceOfFoodsArray = foodsArray.map((food) => {
    return food.price
})
console.log(priceOfFoodsArray)
