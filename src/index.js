const greeting = "Welcome to Flatburger!";

const num1 = 7;

let num2 = "14";
console.log(typeof num2);

num2 = Number(num2);
console.log(typeof num2);

const sum = num1 + num2;

const sumString = `${num1} + ${num2} = ${sum}`;
console.log(sumString);

if (num1 === 7 || num1 === 49) {
    console.log("That's a lucky number!");
} else if (num1 > 7 && num1 < 49) {
    console.log("That might be a lucky number!");
} else {
    console.log("That's not a lucky number");
}

const luckyPhrase = num1 === 7 && num2 === 7 ? "Lucky Sevens!" : "Better luck next time";
console.log(luckyPhrase);