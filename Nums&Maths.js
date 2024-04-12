const score = 400
// console.log(score);

const balance = new Number(100) //specificly define number
console.log(balance);

// console.log(balance.toString().length); //Method tostring() convert 100 in string
console.log(balance.toFixed(1)); // returns precision value

const otherNumber = 123.8966

console.log(otherNumber.toPrecision(3));  // return 124

const hundreds = 1000000
// console.log(hundreds.toLocaleString('en-IN')); // values in Indian ruppees 10,00,000 
// console.log(hundreds.toLocaleString());// By default 1,000,000

// +++++++++++++ Maths  Library+++++++++++++++++++++++++++++
/*
console.log(Math);
console.log(Math.abs(-4)); //convert (-ve) value to (+ve)
console.log(Math.round(4.6)); // 5
console.log(Math.ceil(4.2)); // uppeer value choose 5
console.log(Math.floor(4.9)); //lower value choose 4
console.log(Math.min(4, 3, 6, 8)); //min value 3
console.log(Math.max(4, 3, 6, 8));
*/
console.log(Math.random()); // random Value between 0 to 1 
console.log((Math.random()*10) + 1); //shift value in left avoid 0 value case.
console.log(Math.floor(Math.random()*10) + 1); //only floor value 

const min = 10
const max = 20
//floor value within range 10 start with  minimum 10 
console.log(Math.floor(Math.random() * (max - min + 1)) + min) 
