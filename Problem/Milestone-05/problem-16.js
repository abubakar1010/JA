// Task-5:
// Generate a random number between 10 to 20.

const minValue = 10;

const maxValue = 20;

let randomNum = Math.round(Math.random() * ((maxValue - minValue)) + minValue)
console.log(randomNum);
