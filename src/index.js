//NOTES
//Events are user interactions with the computer (submit, click)
//side note: it's not best practice to store all this info in the js file
//On Monday we'll optimize and put this info in a json file


//DOMContentLoaded is used when you ahve specific lines you want to wait to run until after the DOM is loaded
//Otherwise just have "defer" in script in html code
//You have to think about when you're trying to access elements
//So if you're trying to grab an element or do something to an element, you need to wait until the DOM has finished loading
//if you're creating a new element, you don't need to wait bc we're creating the element ourselves
//but if you're trying to access something from the DOM (like getting an element by ID or classanme or querySelector)
//functions and variables don't need to wait until DOM loads bc that code only executes when we call the fucntion
const foods = [
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
    },
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

function displayFoodDetails(food){ //you can call this food bc of scope - priority is within the parameter. If you call the variable it will check the function first, if it doesn't find it there, it goes one layer out, (and out again until it finds it), the global scope is the last place it will look
    const detailImageElement = document.querySelector('.detail-image')
    const nameElement = document.querySelector('.name') 
    const descriptionDisplayElement = document.getElementById('description-display')
    
    detailImageElement.src = food.image
    nameElement.textContent = food.name
    descriptionDisplayElement.textContent = food.description
}

function addFoodImageToRestaurantMenu(foodObject) {
    const foodImageElement = document.createElement('img')
    foodImageElement.src = foodObject.image

    foodImageElement.addEventListener("click", () => {
        displayFoodDetails(foodObject)
    })
    const restaurantMenuElement = document.getElementById('restaurant-menu')
    restaurantMenuElement.appendChild(foodImageElement)
}


//this will be on the final challenge/assessment (DOMContentLoaded)
document.addEventListener('DOMContentLoaded', () => {
    //addEventListener are methods (functions that belong to an object) - tells an element to listen for an event and do something when the event occurs
    foods.forEach(addFoodImageToRestaurantMenu)

    displayFoodDetails(foods[0]) // will set the default main picture and description to the first burger

    const newFoodFormElement = document.getElementById("new-food")
    newFoodFormElement.addEventListener("submit", (event) => { //for every eventListener pass in string of event and the callback function
    event.preventDefault() //call .preventDefault on the parameter event (an event object), so that it stops the refresh
    // it would be bad for the page to refresh right now because you won't be able to persist data (we would lose the food/info submitted) -- but we'll cover this later
    const newNameInputElement = document.getElementById('new-name')
    const newImageInputElement = document.getElementById('new-image')
    const newDescriptionTextareaElement = document.getElementById('new-description')

    const newFood = { //setting the variable to an object so it matches the objects that are already in the foods array
        name: newNameInputElement.value,
        image: newImageInputElement.value,
        description: newDescriptionTextareaElement.value
    }
// looks very similar to the forEach() .... 
//commented out bc now all we have to do is pass it to the newFoodObject function
    // const foodImageElement = document.createElement('img')
    // foodImageElement.src = newFood.image

    // foodImageElement.addEventListener('click', () => {
    //     displayFoodDetails(newFood)
    // })

    // restaurantMenuElement.appendChild(foodImageElement)


    // console.log(newDescriptionTextareaElement)
    // console.log(foods)
    // foods.push(newFood)
    // console.log(foods)
    addFoodImageToRestaurantMenu(newFood)

})
})

//Instead of the foods.for each a few lines down, we could do this ...


//Deliverable 1
// foods.forEach(food => { //could also be done with the for...of // could also do the same thing with .map (it would just also give you some additional info - would return an array of whatever you set (like an array of the food names if you put return food.name))
//     // const foodImageElement = document.createElement('img') //creating img elements
//     // foodImageElement.src = food.image //setting the src of each image to the image link from the foods array
//     addFoodImageToRestaurantMenu(food) // deleted all other code bc now we can just call the function AddFoodImagetoRestaraurantMenu on each of the foods in the foods array
//     // foodImageElement.addEventListener("click", () => { //add the event and then the event handler (which is a callback function) - anonymous arrow function works well here // you don't need to have a parameter for this one (like you do for submitting a form) bc it doesn't have a problematic default
    //     displayFoodDetails(food)
    //     //Next few lines were deleted bc redundant and displayFoodDetails function was created/called bc more efficient
    //     // detailImageElement.src = food.image //the parameter "food" changes each cycle and the .image will access the image/src for each image
    //     // nameElement.textContent = food.name //will access the name for each food
    //     // descriptionDisplayElement.textContent = food.description
    // }) 
    // restaurantMenuElement.appendChild(foodImageElement)

//"DRY" - don't repeat yourself


//Deliverable 2
//NOTES ON SUBMIT EVENT
//Adding a new food to be added to the page when the user submits it on form
//There is default behavior that happens with a form and if we want it to not happen we have to prevent that
//want to make something happen when the user clicks the submit button
//but want to add the event listener to the form because XXXX


//if an element doesn't have text content, you can get what is inside with element.value (so like for an input element or an img)

//side note: <input type="password" --- instead of "text" --- will make the text you type just dots on screen