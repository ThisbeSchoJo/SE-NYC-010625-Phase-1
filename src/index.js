const restaurantMenu = document.getElementById('restaurant-menu')
const foodDetailImageElement = document.querySelector('.detail-image')
const foodNameElement = document.querySelector('.name')
const foodDescriptionDisplayElement = document.getElementById('description-display')

function addFoodImageToRestaurantMenu(food){
    const imgElement = document.createElement('img')
    imgElement.src = food.image

    imgElement.addEventListener('mouseover', () => {
        displayFoodDetails(food)
    })

    imgElement.addEventListener('click', () => {
        fetch(`http://localhost:3000/foods/${food.id}`, {
            method: "DELETE"
        })
        .then(response => {
            if(response.ok){
                imgElement.remove()
            }
            else{
                alert(`Error: Unable to delete Food # ${food.id}`)
            }
        })
    })

    restaurantMenu.appendChild(imgElement)
}

function displayFoodDetails(food){
    foodDetailImageElement.src = food.image
    foodNameElement.textContent = food.name
    foodDescriptionDisplayElement.textContent = food.description
}

fetch('http://localhost:3000/foods')
.then(response => response.json())
.then(foods => {
    displayFoodDetails(foods[0])

    foods.forEach(addFoodImageToRestaurantMenu)
})

// write your code here



//NOTES:
//What is an algorithm? It is essentially the code within a function/ the actual procedure (but not what encloses the procedure)
//Time complexity and space complexity are about how we can optimize 
//We want to try to imagine the process of what is happening behind built-in functions
//Big O Notation is a way we measure the time and space complexity
//time complexity - how long the program is expected to run your code or parts of your code
//You can talk about time complexity for a particular function

//Constant time complexity has the best time complexity, then linear, then logarithmic**, then quadratic
//Any time you access a key or the value of a key - it's just one look up, it isn't doing any extra work (O1) - it's just a constant
//constants are trimmed off
//If you are doing an iteration over an array, that would be linear time complexity

//If we know how long the array is, that would be a different story. But we often don't know the length of an array, so we use n (there are n executions of that line of code

//If the object has an unknown amount of key and value pairs, the space complexity is O(n) bc of the value of the parameter***
//push and pop are both O(1)
//shift and unshift are O(n)

//You count getting rid of a space as 1 step
//But you don't count constants, so you just remove that step and shift/unshift would just be O(n)
//time complexity is based on worse case scenario (if you do indexOf it might have to check every item in the list - might not even find it in the list)
//that's why there are a lot of algorithms that allow you to go to the middle of an array
//sometimes use a looping approach to avoid iterating through every single object in the array
const fruits = ['apple', 'banana', 'cherry', 'dragonfruit']

function getReversedArray(array){
    console.log(array)
    const reversedArray = [] // we start at empty bc we don't know what should go in there yet until we get to the next step
    console.log(reversedArray)
    for(let index = fruits.length -1; index >= 0; index--){ //one of the best approaches we can apply for reversing
        // console.log(fruits[index])
        reversedArray.push(fruits[index])
    }  
    console.log(reversedArray)
    return reversedArray //NEED TO RETURN
}

const reversedFruitsArray = getReversedArray(fruits)
// console.log(reversedFruitsArray)

//since we know the number of elements in the array, it is O(1)***, but if we didn't it would be O(n)

//arrays are mutable by rearranging the items in their positions, but strings are immutable so they are more complicated
//if you have a nested array or nested for loop, it will become O(n^2) quadratic time complexity

//not covering logarithmic this lecture
//essentially if you have an array, instead of looking through each of the arrays from start to finish, you can start in the middle
//O(log(n)) is going to be much smaller than O(n)  --- think about log(1000) = 3 (log is like the number raised to some number (10) that gives you another number...)
//.sort() will sort an array but it's destructive so would probably want to make a copy of the array first and THEN call .sort

//if you try to sort numbers - it sorts them as strings (looks at the first character rather than the whole number)

const numbers = [5, 23, 1, 67, 12,7]
// const sortedNumbers = [...numbers].sort()
numbers.sort((a,b) => a - b)
// >> [1, 5, 7, 12, 23, 67]
numbers.sort((a,b) => b - a)
// >> [67, 23, 12, 7, 5, 1]



function reverseFoodName(foodName){
    let reversedString = ""
    for(let index = foodName.length - 1; index >= 0; index--){
        reversedString += foodName[index]
    }
    return reversedString
}

const reversedResult = reverseFoodName("hello")
console.log(reversedResult)

//you can't mutate a string but you can mutate an array
//you can split a string into an array
const word = "flatiron"
word.split('') //pass in an empty string to tell it where to splt
//.split is non-destructive
//.join will put it back together
word.split('').join('')