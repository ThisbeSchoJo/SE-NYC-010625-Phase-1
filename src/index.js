// // write your code here
// function buyIcecream(pricePerScoop=1, numberOfScoops=1, getTotalIcecreamPrice) {
//     console.log(getTotalIcecreamPrice)
//     // console.log(price)
//     console.log(`Ask server for ${numberOfScoops} scoop(s) of ice cream...`);
//     console.log(`Pay $${getTotalIcecreamPrice(pricePerScoop, numberOfScoops)}.00 for ice cream.`);
//     console.log('Waiting to retrieve order...');
//     console.log('Got ice cream!');
// }

// function getTotalPrice(price, scoops){
//     return price * scoops;
// }

// // buyIcecream(2, 4, function (price, scoops) {
// //     return price * scoops
// // })

// buyIcecream(11, 1, (price, scoops) => price * scoops)

// const sum = (num1, num2) => num1 + num2;
// console.log(sum(1,2))

// buyIcecream(2, 4, getTotalPrice)
// buyIcecream(3, 12)
// buyIcecream()

// console.log(getTotalPrice(3,4))





//Deliverable 1
function flatburgerGreeting() {
    console.log("Welcome to Flatburger!")
}

//Deliverable 2
function printGreeting(greeting) {
    console.log(greeting)
}

//Checking work
// flatburgerGreeting()
// printGreeting()

//Deliverable 3
function getSum(num1, num2) {
    return num1 + num2;
}

//Deliverable 4
const getSumString = function(sum, num1, num2) {
    return `${num1} + ${num2} = ${sum(num1, num2)}`
}
//Checking work
// console.log(getSum(7, 14))
// console.log(getSumString(getSum, 7, 14))

//Deliverable 5
const getAverage = (num1 = 0, num2 = 0) => (num1 + num2)/2
// console.log(getAverage(5,10))