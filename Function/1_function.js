function addTwoNum(a,b){
   return a+b ;
}
let c= addTwoNum(4,2)
console.log("Result :",c);
// console.log(typeof addTwoNum);


// function myname(){
//     console.log("C")
//     console.log("H")
//     console.log("A")
//     console.log("N")
//     console.log("D")
//     console.log("U")

// }
// //here myname->reference and ()->execute
// myname()

function logUserMessage(username){
    if(!username){
        console.log("Please enter username")
        return;

    }
    return `${username} just logged in`
}
console.log(logUserMessage()) //return Undefined just loogedin

// console.log(logUserMessage("Chandan")) //return chandan just loggedin 
