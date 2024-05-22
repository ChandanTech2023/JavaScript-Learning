//Nested Scope
function one(){
    const username = "Chandan"

    function two(){
        const website = "Youtube"
        console.log(username)
    }
    // console.log(website); //Not Accessable outer of two Scope
    two()
}
one()


if(true){
   const username = "Hitesh"
    if (username==="Hitesh") {
        const website = "youtube"
        console.log(username + website);
        
        console.log(website);
    }
}
// Not accessable because we try access username,outer of its scope 
// console.log(username); 

//++++++++++++ Hoisting in js ++++++
// Hoisting is JavaScript's default behavior of moving declarations to the top.
//Hoisting assure how to declare fun() and it's Execution contex and how js treat with varible .

console.log(addone(3));
function addone(num){
    return num+1;
}

//Another way declare function 
const addtwo = function(num){
    return num+2;
}
console.log(addtwo(3));
