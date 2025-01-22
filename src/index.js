const restaurantMenu = document.getElementById('restaurant-menu')
const foodDetailImageElement = document.querySelector('.detail-image')
const foodNameElement = document.querySelector('.name')
const foodDescriptionDisplayElement = document.getElementById('description-display')
const cryptocurrencyList = document.getElementById('cryptocurrency-list')


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

function addCryptocurrencyToList(cryptocurrency) {
    const liElement = document.createElement('li')
    liElement.textContent = `${cryptocurrency.name} (${cryptocurrency.symbol}): Rank #${cryptocurrency.rank}`
    cryptocurrencyList.appendChild(liElement)
}

fetch('http://localhost:3000/foods')
.then(response => response.json())
.then(foods => {
    displayFoodDetails(foods[0])

    foods.forEach(addFoodImageToRestaurantMenu)
})

fetch('http://api.coincap.io/v2/assets') //Don't need to tell method bc it's a GET request
.then(response => {
    if (response.ok){
        response.json().then(apiData => {
            const cryptocurrencyArray = apiData.data
            // apiData.data.forEach(cryptocurrency => {
            //     if(Number(cryptocurrency.rank <= 10) { //can use Number() because we have integers, otherwise would do parseInt()
            //         const liElement = document.createElement('li')
            //         liElement.textContent = `${cryptocurrency.name} (${cryptocurrency.symbol}): Rank #${cryptocurrency.rank}`
            //         const cryptocurrencyList = document.getElementById('cryptocurrency-list')
            //         cryptocurrencyList.appendChild(liElement)
            //     }
            // })
            // const filteredCryptocurrencies = apiData.data.filter(cryptocurrency => {
            //     return Number(cryptocurrency.rank <= 10)
            // })
            cryptocurrencyArray.forEach(addCryptocurrencyToList)
            

            const cryptocurrencySelectElement = document.getElementById("cryptocurrency-select")
            cryptocurrencySelectElement.addEventListener('change', () => {
                cryptocurrencyList.innerHTML = ""
                if (cryptocurrencySelectElement.value === 'all'){
                    cryptocurrencyArray.forEach(addCryptocurrencyToList)
                }
                else if (cryptocurrencySelectElement.value === 'less'){
                    cryptocurrencyArray.forEach(cryptocurrency => { //.forEach is used just to do something and not to get a return value (if you want/need a return value then you could choose to use map or filter or something)
                        if(Number(cryptocurrency.rank) <= 50){
                            addCryptocurrencyToList(cryptocurrency)
                        }
                    })
                }
                else if (cryptocurrencySelectElement.value === 'greater'){
                    cryptocurrencyArray.forEach(cryptocurrency => { //.forEach is used just to do something and not to get a return value (if you want/need a return value then you could choose to use map or filter or something)
                        if(Number(cryptocurrency.rank) > 50){
                            addCryptocurrencyToList(cryptocurrency)
                        }
                    })
                }
            })
        })
    }
    else{
        alert("Error: Unable to retrieve crypto currency data!")
    }
})