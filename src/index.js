const burgers = [
    {
        name: "Flatburger",
        image: "./assets/food/flatburger.jpeg",
        description: "Our signature Flatburger which is a super delicious cheeseburger that'll leave you wanting another Flatburger! It's too good to be true!"
    },
    {
        name: "Maple Bacon Burger",
        image: "./assets/food/maple-bacon-burger.jpeg",
        description: "A great option for a breakfast burger or a great option for brunch if you're hungry enough to eat 2 of these burgers!"
    },
    {
        name: "Mushroom Burger",
        image: "./assets/food/mushroom-burger.webp",
        description: "A mushroom burger with our exclusive Flatburger melted cheese!"
    },
    {
        name: "Avocado Bun Burger",
        image: "./assets/food/avocado-bun-burger.jpeg",
        description: "A healthier take on our signature Flatburger but with avocado buns!"
    },
    {
        name: "Ramen Burger",
        image: "./assets/food/ramen-burger.jpeg",
        description: "If you love ramen and burgers, what are you waiting for? Order our exclusive ramen burger now!"
    }
]

const otherFoods = [
    {
        name: "French Fries",
        image: "./assets/food/french-fries.jpeg",
        description: "The good old french fries made in Flatburger style!"
    },
    {
        name: "Burrito",
        image: "./assets/food/burrito.webp",
        description: "A Flatburger style burrito with our exclusive Flatburger melted cheese and any meat of your choosing in addition to your choice of additional ingredients!"
    },
    {
        name: "Taco",
        image: "./assets/food/taco.jpeg",
        description: "The Flatburger exclusive Taco! Get it while supplies last!"
    },
    {
        name: "Hot Dog",
        image: "./assets/food/hot-dog.jpeg",
        description: "The Flatburger exclusive Hot Dog! Get it while supplies last!"
    },
    {
        name: "Onion Rings",
        image: "./assets/food/onion-rings.jpeg",
        description: "The Flatburger exclusive Onion Rings! Get them while supplies last!"
    }
]

// write your code here
//NOTES
//DOM = Document Object Module

// document.body //targets the body of the document
//the body is what we see on the page (we don't really see the <head>)
// document.querySelector('h3') //finds the first h3 element
//We can use methods to search for elements that exist in the document
//can use querySelector to search by ID, classname, etc. - but it will only return the first it finds that fill the condition
//it is helpful to store these elements in variables
//you can then retrieve those elements with the variables
//you can update things in the element with the assignment operator
// h3Element.textContent = "Thisbe SJ" //changes the text in the h3 element to Thisbe SJ
//you can modify an image's content similarly, but instead of textContent we would do src
//you can also look for all elements that fit a condition
// document.querySelectorAll('.name') //will find all the elements that are class "name"
//the same way we target classes in CSS (".") is the same way you target classes in the DOM
// document.querySelector('.name') //will just find the first element that has the class "name"


//Deliverable #4
// const nameElement = document.querySelector('.name') //Step 1: find the element 
// console.log(nameElement)
// nameElement.textContent = burgers[0].name //step 2: change text content to the name of the first burger in the burgers array
// console.log(nameElement)
// console.log(burgers[0].name)
// console.log(burgers[1].description)
// console.log(burgers)
//.querySelector is the least specific
const newH3Element = document.createElement('h3')
newH3Element // returns <h3></h3>
//currently this element is kind of like a leaf on it's own
//if we want to add this new element to the DOM... we have to attach it to another element in the DOM
newH3Element.textContent = "Hello there!" // you have to give it text content or src so it shows up on the page
// document.body.appendChild()
document.querySelectorAll('h3')[0] //the query selector goes in order of the nesting
document.querySelector('h3') //querySelctor deeply checks each branch before going to next (so goes inward before going down... if that makes sense)
//with append or prepend we're adding to what we have so far
//compared to textcontent, where you are replacing everything you have
//you can also get an element by its ID
//there should only be one element with a given ID
const foodDetailElement = document.getElementById("food-detail")
//if you did it with querySelector it would look like this
// const foodDetailElement = document.querySelector("#food-detail")

//using the createElement method() to create a new element
const h1Element = document.createElement('h1')
//Setting the textContent for this new element
// h1Element.textContent = "Ice cream is the best dessert ever!"
//Using the prepend method to add this new element before the #food-detail element as the first child of #food-detail
foodDetailElement.prepend(h1Element)

const h2Element = document.createElement('h2')
h2Element.textContent = "I love pizza"

foodDetailElement.append(h2Element)
//You can add either strings or nodes or both with .append (but you probably don't want to do this much)
//but you can't add strings with .appendchild()
//querySelectorAll() and getElementsByClassName()
//querySelectorAll() gives you a node list
//getElementsByClassNmae() gives you an html collection
// const detailImageElements = document.querySelectorAll(".detail-image") //must specify to look for all elements with the class name detail image with "."
// console.log("detailImageElements")
// const detailImageElements = document.getElementsByClassName("detail-image")//don't need to specify with "." bc it already knows to look by class name

const selectedElements = document.getElementsByClassName("detail-image")

const allDivElements = document.querySelectorAll('div')

//iterating over the NodeList stored in allDivElements variable with for...of
for(const element of allDivElements) {
    console.log(element)
}

//Modifying the innerHTML attribute of an element to specify HTML that should be rendered inside of the element
console.log(foodDetailElement.innerHTML) // prints a string of all the html code within the food-detail element
// foodDetailElement.innerHTML = "<h1>I love Javascript</h1>" // replaces the html content in there (similar to textContent)
//innHTML can have some security risk though... so be careful using
//usually better to use textContent

//Differences between textContent, innerText, and innerHTML
// foodDetailElement.textContent = "<h1>I love Javascript</h1>" //will display whatever is in the quotes and display it as text -- won't do any html rendering (wouldn't read the \n)
// foodDetailElement.innerHTML = "<h1>I love Javascript</h1>" //will render html text  (won't read the \n)
// foodDetailElement.innerText = "<h1>I love\nJavascript</h1>" //not that important/used that often but it will add in a break where that \n (won't be read as part of the string)

//Removing elements from the DOM but it still exists!
const descriptionDisplayElement = document.getElementById("description-display")
console.log(descriptionDisplayElement)
// descriptionDisplayElement.remove()
// console.log(descriptionDisplayElement)

//src of the image...
// const newImgElement = document.createElement('img')
// console.log(newImgElement)
// newImgElement.src = burgers[0].image//setting the src content
// console.log(newImgElement)
// foodDetailElement.appendChild(newImgElement)//getting the image on the page...


//Deliverable 1
//probably should use a for...of loop bc it's an array we want to iterate through
const restaurantMenuElement = document.getElementById("restuarant-menu") //want it to have global scope bc we will reference it on other ones
for(const burger of burgers) {
    // console.log(burger)
    const imgElement = document.createElement('img')
    imgElement.className = "burger"
    imgElement.src = burger.image
    restaurantMenuElement.appendChild(imgElement)
}

// //(my worse version of deliverable 1)
// for (let index = 0; index < burgers.length ; index++) { //iterates through the burgers array with a for loop
//     // console.log(burgers[index])
//     const newImgElement = document.createElement('img') //creates an img element
//     newImgElement.className = "burger" //set the className attribute of img to "burger"
//     newImgElement.src = burgers[index].image //set the src attribute of img to the element with the if restaurant-menu
//     const newRestaurantMenu = document.getElementById("restaurant-menu")
//     newRestaurantMenu.appendChild(newImgElement)
// }

//Deliverable 2
otherFoods.forEach(food => { // don't need parantheses around foodElement bc it's the only parameter
    const imgElement = document.createElement('img')
    imgElement.src = food.image
    restaurantMenuElement.appendChild(imgElement)
})

//Deliverable 3
const detailImageElement = document.querySelector(".detail-image")
detailImageElement.src = burgers[0].image

//Deliverable 4
const nameElement = document.querySelector(".name")
nameElement.textContent = burgers[0].name

//Deliverable 5
const displayElement = document.getElementById("description-display")
displayElement.textContent = burgers[0].description

//Deliverable 6
const foodImgElements = document.querySelectorAll(' div#restaurant-menu img')
for(const imgElement of foodImgElements) {
    imgElement.style = "border-style: solid; border-color: red; border-width: 3px";
}
// const divElement = document.getElementById("restaurant-menu")
// const menuImages = divElement.querySelectorAll("img")
// menuImages.forEach(image => {
//     image.style = "border-style: solid; border-color: red; border-width: 3px";
// })

//Deliverable 7
const burgerImgElements = document.getElementsByClassName("burger")
for(const imgElement of burgerImgElements) {
    imgElement.style.borderColor = "blue"
}
// for (let i = 0 ; i < burgerImgElements.length; i++)
//     burgerImageElements[i].style.borderColor = "blue"
    

// const arrayOfBurgerImageElements = []
// for (let i=0; i < burgerImageElements.length; i++) {
//     arrayOfBurgerImageElements.push(burgerImageElements[i])
// }
// // console.log(arrayOfBurgerImageElements)
// arrayOfBurgerImageElements.forEach(image => {
//     image.style.borderColor = "blue"
// })

