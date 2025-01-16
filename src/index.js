const restaurantMenu = document.getElementById('restaurant-menu')

fetch('http://localhost:3000/foods')
.then(response => response.json())
.then(foods => {
    displayFoodDetails(foods[0])

    foods.forEach(addFoodImageToRestaurantMenu)
})

function addFoodImageToRestaurantMenu(food){
    const imgElement = document.createElement('img')
    imgElement.src = food.image
    imgElement.addEventListener('click', () => {
        displayFoodDetails(food)
    })
    restaurantMenu.appendChild(imgElement)
}

function displayFoodDetails(food){
    const foodDetailImageElement = document.querySelector('.detail-image')
    foodDetailImageElement.src = food.image

    const foodNameElement = document.querySelector('.name')
    foodNameElement.textContent = food.name

    const foodDescriptionDisplayElement = document.getElementById('description-display')
    foodDescriptionDisplayElement.textContent = food.description
}

function handleSubmit(event){
    event.preventDefault()

    const newNameInputElement = document.getElementById('new-name')
    const newImageInputElement = document.getElementById('new-image')
    const newDescriptionInputElement = document.getElementById('new-description')

    const newFood = {
        name: newNameInputElement.value,
        image: newImageInputElement.value,
        description: newDescriptionInputElement.value
    }



    //You don't want to immediately make a POST, PATCH, and DELETE requests on page load bc it will try to post something every time the page loads - and then you'll have issues
    //You want these requests to be controlled (like in response to an event)
    //Okay to do it with GET request because we're just retrieving info to see
    //Default method for any request is GET, so you don't need to pass in method:GET in request
    //Optimistic rendering for POST requests: the rendering on the page is independent of the POST request (you can add the image to the page and then make the POST request or vice versa)
    //Pessimistic means you're always going to wait for the POST request to be successful before you put the image on the page
    //Might want pessimisstic request in case your POST request fails (user would see image and then when they refreshed it would be gone bc it didn't persist)

    //GET request can be called on a single item "http://localhost:3000/foods/1" or the full resource name "http://localhost:3000/foods" but POST can only be called on the full resource "http://localhost:3000/foods"
    // addFoodImageToRestaurantMenu(newFood)
    // //Optimistic
    // fetch('http://localhost:3000/foods', { //make sure you're sending your request to the right location
    //     method: "POST", //specify the request type
    //     headers: {
    //         "Content-Type" : "application/json"  //need to specify the type of content data that is being sent -- this data is intended to be read in JSON format
    //     },
    //     body: JSON.stringify(newFood) //This is the data we are sending -- Whatever you pass into the body should be stringified and it should be an object
    // })

    //Pessimistic Rendering ()
    fetch('http://localhost:3000/foods', { //make sure you're sending your request to the right location
            method: "POST", //specify the request type
            headers: {
                "Content-Type" : "application/json"  //need to specify the type of content data that is being sent -- this data is intended to be read in JSON format
            },
            body: JSON.stringify(newFood) //This is the data we are sending -- Whatever you pass into the body should be stringified and it should be an object
    })
    // .then(response => response.json())
    // .then(newFoodData => addFoodImageToRestaurantMenu(newFoodData))
    .then(response => {
        if(response.ok){
            response.json().then(newFoodData => addFoodImageToRestaurantMenu(newFoodData))
        }
        else {
            alert("Error: unable to add new food!") //"Defensive programming" - strategy to make sure things make sense before we render it on the page
        }
    })
    //Would only really make sense to use optimistic rendering if you want a faster response and you aren't worried about the request being unsuccessful

    event.target.reset()
}

const newFoodForm = document.getElementById('new-food')
newFoodForm.addEventListener('submit', handleSubmit)


//A POST request is for new features we want to add
//So that we can persist data!!!
