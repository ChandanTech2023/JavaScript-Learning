console.log("Types of Loops in Js");

let a=1 ;
for (let i = 1; i < 5; i++) {
    console.log(a+i)    
}

let obj={
    name:"chandan",
    role:"coder"
}
//for in loop :  used for object to Access key value also used in array
let person = {
    name: "John",
    age: 30,
    job: "developer"
  };
  
  for (let key in person) {
    console.log(key + ": " + person[key]);
  }
  
//for of loop : used in Iterable object structure like Array,String
for (const c  of "Chandan") {
    console.log(c)
}

//While loop: repeat a block of code while a certain condition is true.
let i=5;
while(i<8){
    console.log(i)
    i++;
}

//Do-while loop:firstly print initially value then check the condition.
// let a=10;
// do{
//     console.log(a);
//     a++
// }
// while(a<6)