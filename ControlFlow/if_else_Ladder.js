// if 
const isUserloggedIn = true;
const temperature = 41;

if ( temperature === 40 ){
    console.log("less than 50");
} else {
    console.log("temperature is greater than 50");
}
/*
 Comparision operator :  <, >, <=, >=, ==, !=, ===, !==,?(Ternary)
== -> Only check value equal or not, Ex:"2"==2 ->True 
=== -> check equal both value and Type,Ex:"2"===3->False
?: -> ex: a=4 b=6 
     c=a>b ?(a-b):(b-a); =>answer:2
*/

// const score = 200
// if (score > 100) {
//     let power = "fly"
//     console.log('User power: ${power}');
// }

// console.log('User power: ${power}');


//Else-if ladder
const balance = 1000

if (balance > 500) console.log("test1"),console.log("test2");

if (balance < 500) {
    console.log("less than 500");
} else if (balance < 750) {
    console.log("less than 750");
    
} else if (balance < 900) {
    console.log("less than 750");
    
} else {
    console.log("less than 1200");

}

const userLoggedIn = true;
const debitCard = true;
const loggedInFromGoogle = false;
const loggedInFromEmail = true;

if (userLoggedIn && debitCard && 2==3) {
    console.log("Allow to buy course");
}

if (loggedInFromGoogle || loggedInFromEmail) {
    console.log("User logged in");
}
