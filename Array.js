//Array-Object
/*In js Arrays are resizable and can contain mix of different Types .Array starts  zero indexed(0)
And Jascript "Array-copy-operations" create Shalloew copy .*/
const myarr=[1,2,3,4,5]
console.log(myarr);

const arr2=new Array(1,2,6,4) //another method to declare array
console.log(arr2[2]);

//----- Useful Array Methods
// arr2.push(9) //Insert value at end of Array.
// arr2.pop()
// arr2.unshift(8) //Insert value from start position
// arr2.shift() //Remove value from start position.
// console.log(arr2);
// console.log(arr2.includes(9)); //return boolen value
// console.log(arr2.indexOf(6)); 

const newarr=myarr.join()
console.log( typeof newarr)//Join arr_values into string type

// Slice and Splice method
// console.log("A",myarr);
// const myarr2=myarr.slice(1,3);//returns [2,3]
// console.log(myarr2)
// const myarr3=myarr.splice(1,3); // returns[2,3,4]
// console.log(myarr3);

//Concatinate two or more Array
 const hero=["Ironman","Thor","krish"]
 const name=["Chandan","Raju","Kapil"]
 let AllHero=hero.concat(name); //Combine Two Array into New array
 console.log(AllHero);
// Another Way to concatinate - Using spred 
AllHero=[...hero,...name]
console.log(AllHero);

// Used in Datascraping 
console.log(Array.isArray("Chandan")); //Check Array or not?
//Convert String  into Array
console.log(Array.from("Chandan")) 
console.log(Array.from({name:"Chandan"}))  //here it's return Empty array.

//Convert multiple variables into Array
let score=100
let scor2=200
let score3=300
console.log(Array.of(score,scor2,score3))