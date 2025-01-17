const restaurantMenu = document.getElementById('restaurant-menu')
const foodDetailImageElement = document.querySelector('.detail-image')
const foodNameElement = document.querySelector('.name')
const foodDescriptionDisplayElement = document.getElementById('description-display')
const newNameInputElement = document.getElementById('new-name')
const newImageInputElement = document.getElementById('new-image')
const newDescriptionInputElement = document.getElementById('new-description')

let currentlyDisplayedFoodId //want this to be the Id for the photo being displayed

function addFoodImageToRestaurantMenu(food){
    const imgElement = document.createElement('img')
    imgElement.src = food.image
    imgElement.addEventListener('mouseover', () => {
        displayFoodDetails(food)
    })
    restaurantMenu.appendChild(imgElement)

    imgElement.addEventListener('click', () => {
        // write your code here for Deliverable # 3
        // Optimistic rendering for DELETE request
        // imgElement.remove()
        // fetch(`http://localhost:3000/foods/${food.id}`, {
        //     method: "DELETE" //You don't need headers bc just deleting
        // })
        // Pessimistic rending for DELETE needs .then
        fetch(`http://localhost:3000/foods/${food.id}`, {
            method: "DELETE" //You don't need headers bc just deleting
        })
        .then(response => {
            if(response.ok){ //if response is okay, update the DOM
                imgElement.remove()
            }
            else{ //if response is not okay, don't update the DOM and send an alert message
                alert(`Error: Unable to delete Food #${food.id}`)
            }
        }
    })
}

function displayFoodDetails(food){
    foodDetailImageElement.src = food.image
    foodNameElement.textContent = food.name
    foodDescriptionDisplayElement.textContent = food.description

    const numberInCartCountElement = document.getElementById('number-in-cart-count')
    numberInCartCountElement.textContent = food.number_in_cart

    currentlyDisplayedFoodId = food.id
}

function addNewFood(event){
    event.preventDefault()

    const newFood = {
        name: newNameInputElement.value,
        image: newImageInputElement.value,
        description: newDescriptionInputElement.value
    }

    fetch('http://localhost:3000/foods', {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
        },
        body: JSON.stringify({...newFood, number_in_cart: 0}) //could also add a new variable instead of using spread operator
    })
    .then(response => {
        if(response.ok){
            response.json().then(newFoodData => {
                addFoodImageToRestaurantMenu(newFoodData)
            })
        }
        else{
            alert("Error: Unable to add new food!")
        }
    })

    event.target.reset()
}

function addToCart(event){
    event.preventDefault()

    const numberToAddInputElement = document.getElementById('number-to-add')
    const numberInCartCountElement = document.getElementById('number-in-cart-count')

    const sum = Number(numberInCartCountElement.textContent) + Number(numberToAddInputElement.value) //this is also part of the PATCH request for some reason

    // write your code here for Deliverable # 1
    //Optimistic rendering for PATCH request should include the rendering itself bc that's where the PATCH request happens**
    // numberInCartCountElement.textContent = sum
    // fetch(`http://localhost:3000/foods/${currentlyDisplayedFoodId}`, {
    //     method: "PATCH",
    //     headers: {
    //         "Content-Type" : "application/json" //need to study this line bc I keep forgetting "Content-Type"
    //     },
    //     body: JSON.stringify({
    //         "number_in-cart" : sum
    //     })
    // })
    //Pessimisteric rendering for PATCH:
    numberInCartCountElement.textContent = sum

    fetch(`http://localhost:3000/foods/${currentlyDisplayedFoodId}`, {
        method: "PATCH",
        headers: {
            "Content-Type" : "application/json", //need to study this line bc I keep forgetting "Content-Type"
            "Accept" : "aaplication/json"
        },
        body: JSON.stringify({
            "number_in-cart" : sum
        })
    })
    .then(response => {
        console.log(response)
        if (response.ok){
            response.json().then(updatedFood => {
                numberInCartCountElement.textContent = updatedFood.number_in_cart
            })
        }
        else{
            alert(`Error: Unable to add Food #${currentlyDisplayedFoodId} to cart!`) //converts whatever you pass into it into a string (can only print a string with an alert)
        }
    })
    


    event.target.reset()
}

fetch('http://localhost:3000/foods')
.then(response => response.json())
.then(foods => {
    displayFoodDetails(foods[0])

    foods.forEach(addFoodImageToRestaurantMenu)
})

const newFoodForm = document.getElementById('new-food')
newFoodForm.addEventListener('submit', addNewFood)

const addToCartForm = document.getElementById('add-to-cart-form')
addToCartForm.addEventListener('submit', addToCart)

//Pessimistic -wait for the POST request to be fulfilled before updating the DOM (updating the DOM and making the POST request are independent of each other)
//Optimistic -you don't wait for the request to be fulfilled before updating the DOM (if the POST fails, we don't update the DOM  - they are dependent on each other)


//NOTES on PATCH and DELETE
//PATCH request needs an id so it knows which one it is updating
//(PATCH is used for a partial update where you specify what you want to update - PUT is a complete update)
//DELETE you don't get data from the server, but you get a response and can make sure it's okay

