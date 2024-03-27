// function add(a,b,c){
//     return a+b+c;
// }
// let c= add(1,2,3);
// console.log(c)

/*
   prefer not use Var, bacause of issue in block scope and functional scope .
 */
var n=3;
{
     let c=6;
     const n=5;
     console.log(c,n)   //Blocks scope code
  }
  //c returns Undefined,because c(let) is only accesable within block
  console.log(c)   
  
  // {
    //   let i=8;
    //   i=i+2;
    //   console.log(i)
    //   var v="varid";
    //   console.log( typeof v)
    //    console.log( typeof i)
    // }
               /*-----data Types---- */
let x='chandan';
let y=21;
let z=3.21;
var c=true;
let p= undefined;
let q=null;
console.log(x,y,z,c,p,q)
//Table is used to display multiple variable value in tabular.
console.table([x,y,z,c,p,q]) 
console.log(typeof x,typeof y,typeof z,typeof c,typeof p,typeof q)
   /* ----Object in Javascript 
           :Combination of Key values pairs---
    */
