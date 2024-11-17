# Javascript ES6 Important concept before start React library :
## 1. Logical AND(&&) and OR (||) ->
```javascript
function getName(){
    return 'Chandan'
}
let a=true;
let b =false;
console.log(a && getName()); //Output: Chandan
```
## 2.Template letrals :
``` javascript
let firstName ='Sangam'
let SurName = 'Juneja'
let prefix = 'Mr.'
console.log(prefix+" "+firstName+" "+SurName); //Old Way
console.log(`${prefix} ${firstName} ${SurName}`); //New way using template letral
```
## 3.Ternary Operator :
```javascript
let returAge = true;
function getAgeInfo(age) {
    return `I am ${age} years old`
}
function getCity(params){
    return 'The person is from USA';   
}
// if (returAge){
//     console.log(getAgeInfo(23));
// }else console.log(getCity());
let result =returAge?getAgeInfo(22):getCity() //Same work using Ternary operator
console.log(result ); // I am 22 years old
```
## 4. OBJECT AND ARRAY DESTRUCTURING :
```javascript
const ProductOne ={
    productName: 'Burger:',
    productdec :'This is a food'
}
// let productName =ProductOne.productName;
// let productdec =ProductOne.productdec; 
// We see Keyname is Same so instead of we destructure properties from Obj
const {productName, productdec} = ProductOne;
console.log(productName , productdec);//Burger This is a food

//shortHand Property for the same
const id =1, title ="Product1" ,rating =5;
//using these variable e create prodct Object
let prodct ={
    id,
    title,
    rating
}
// console.table(prodct);
// Now Array Destructoring =>
let arr = ['john' ,'Chandan']
// let firstvalue= arr[0];
// let Secondvalue= arr[1];
const [firstvalue, Secondvalue,error] = arr;
console.log(firstvalue,Secondvalue,error); //Output: john chandan undefined
```
## 5.Defalult Parameters :
```javascript
function sum(one =1, two =2){
    return one+two;    
}
const result =sum(3,4);
console.log(result); //Output: 7 because sum() override default value .
```
## 6. Spread Operator (... ): Often used in combination with destructuring.
#### : Spread operator (...) allows us to quickly copy all or part of an existing array or object into another array or object.
```javascript
let arrOne =[1,2,3,4];
console.log([...arrOne]); // [1,2,3,4]
let arrTwo =[7,8,9,12];
console.log(...arrOne ,100,...arrTwo) //Combine Both arr and add another value 100 [1,2,3,4,100,7,8,9,12]
```
## 7. Rest Operator : Rest parameters allow flexible argument handling for functions.It allows a function to accept an indefinite number of arguments as an array.
```javascript
function SumofValue(a,...input) {
    let sum =0;
    for(let i of input){
        sum+=i;}
    return sum;
}
//without 1 restof all value add
console.log(Sumofvalue(1,2,3)); //5 

// rest with function and other arguments
function fun(a, b, ...c) {
    console.log(`${a} ${b}`); //Mukul Latiyan
    console.log(c);  //[ 'Lionel', 'Messi', 'Barcelona' ]
    console.log(c[0]); //Lionel
    console.log(c.length); //3
    console.log(c.indexOf('Lionel')); //0
}
fun('Mukul', 'Latiyan', 'Lionel', 'Messi', 'Barcelona');
```
## 8.Arrow functions and ES6 methods:
```javascript
const multiply = (a,b)=> a*b;
console.log(multiply(3,4)); // 12
// map Methods :
let personArr = [
    {
        name: 'raju',
        age: 22,
        city: "Bangalore",
    },
    {
        name: 'Kali',
        age: 22,
        city: "Delhi",
    },
    {
        name: 'krish',
        age: 21,
        city: "Delhi",
    }]
let details = personArr.map((person ,index)=>{
    return `${person.name} - ${person.city}`    
})
console.log(details);// ['raju - Bangalore', 'krish - Delhi'] 

//Filter method :
let details =personArr.filter((person ,index) => return person.city==='Delhi'  )
console.log(details); // [{ name: 'krish'age: 21, city: 'Delhi' },{ name: 'Kali', age: 22, city: 'Delhi' }]

//Some and Every : Return boolean value
const checkSome = personArr.some((person,index)=>person.age ===21);
console.log(checkSome);// output: true
const checkEvery = personArr.every(person =>person.age ===22); // output: false
```
## Important Array methods :
- Array Methods: find(), reduce() , includes() ,indexOf(), findIndex()
```javascript
const myArray = [1,2,3,4,5,2];
myArray.find((item,index)=>item ===1);//Output: 1
myArray.filter((item, index)=> item===2);// [2,2]
console.log(myArray.includes(22), 'includes');// False
console.log(myArray.indexOf(230), 'indexOf');// output: -1 means value not present.
console.log(myArray.findIndex(item=>item==3));// output: 2


//Reduce method: Add all arra values
let a =myArray.reduce((acc,curr,index,arr)=>{
    console.log(acc,curr,index,arr);
 return acc+curr;
},0)
console.log(a); // output: 17
```
## Fetch api and async await

//Fetch api and async await
```
 <!DOCTYPE html>
 <html lang="en">
 <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Fetch Api</title>
 </head>
 <body>
    <div class="list"></div>
    <script>
        let list = document.querySelector(".list");
        async function fetchlistData(){
            try{
                const restApi= await fetch('https://dummyjson.com/products',{
                    method: 'GET'
                })
                const result = await restApi.json();
                console.log(result)
                if(result && result.products && result.products.length) renderlist(result.products);
            }
            catch(error){
                console.log(error)
            }
        }
       function renderlist(getproduct){
        list.innerHTML =getproduct.map(item=> `<p>${item.title}</p>`).join("🤩")
       }
        fetchlistData()
    </script>
 </body>
 </html>
 ```












