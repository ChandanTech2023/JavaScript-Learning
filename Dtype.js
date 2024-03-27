//Premitive datatypes
let x='chandan';
let y=21;
let z=3.21;
var c=true;
let p;
let q=null;
const bigNumber=34212423n;
// console.log(x,y,z,c,p,q,bigNumber)
// console.log(typeof x,typeof y,typeof z,typeof c,typeof p,typeof q,typeof bigNumber)
 
//Reference (NON PRIMITIVE): Array, Function,objects
const hero=["saktiman","krish"]
let myObj={
      name:"Chandan",
      age:19,
}
console.log(myObj)
myObj.salary="2 lakhs"
console.log(myObj); //Updated salary
// let o={
//       "name":"harry",
//       "job role ":3435
         
//     }
//     console.log(o)
//     o.salary="2 lakhs";
//     console.log(o)
    /* 
      Data type conversion.:
           "33"=>33
           "34ab"=>NaN
           true=>1 ;false=>0
     */
let score ="7"
let valueInNumber=Number(score)
console.log( valueInNumber);
console.log(typeof score);
