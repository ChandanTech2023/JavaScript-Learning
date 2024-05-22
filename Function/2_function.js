/*
Here ...num1 becomes rest parameter which gives gathers the remaining values
 and stores them in another collection .It can be Array or Objects.
*/
function claculateprice(val1,val2,...num1){ 
    return num1
}
// console.log(claculateprice(45))
console.log(claculateprice(200,100,300,400)) //return array

// Gather the remaining properties in an Object
const person = {
    name: 'John Doe',
    age: 30,
    occupation: 'Software Engineer',
  };
  const { name, age, ...rest } = person;
  console.log(rest); // { occupation: 'Software Engineer' }

function handleObject(anyobj){
    console.log(`name is ${anyobj.name} and age is ${anyobj.age}`);
}
handleObject(person)

//Directly pass object in function without creating Object
handleObject({    
    name: "Chandan",
    age : 20
})


//Function with Array
const myarray = [200,250,300,350]
function returnvalue(getArray){
    return getArray[1];
}
console.log(returnvalue(myarray));



