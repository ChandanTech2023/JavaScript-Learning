//Write a js program to find Factorial of Number Using Reduce and for loop method
let a=5
// function fact(num){
//     let arr =Array.from(Array(num+1).keys()) //method for making new array
//     console.log(arr.slice(1,));
//     let c= arr.slice(1,).reduce((a,b)=>{
//         return a*b
//     })
//     return c
     
// }
// console.log(fact(a)); 

//Using For loop 
function Factorial(num){
    let fact=1
    for (let index = 1; index <=num; index++) {
        fact =fact*index
    }
    return fact
}
console.log(Factorial(a))
