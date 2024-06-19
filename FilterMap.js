//Filter method -> 

//Return the element of an array that meets the Specified Condition in Callback Function  
const myNum =[1,2,3,4,5,6,7,8]
const newNum = myNum.filter((num)=> num >5)

// console.log(newNum); // return [6,7,8]

// Another Way using foreach
const arr =[]
myNum.forEach((num)=> {
    if(num>5){
        arr.push(num)
    }
})
// console.log(arr); //Return [6,7,8]

//map method
const new1 = myNum.map((num) => {return num+10})
// console.log(new1);

//Chaining method -> USed Multiple method At a time
let Array =[1,2,3,4,5,6,7,8,9,10]
const number =Array.map((num) =>num*2).filter((num)=>num>14)

// console.log(number); //return [16,18,20]

//Reduce() method :- Execute a user specified "reducer" callback function on each element on the Array.
// Use case for Ex :- In a shopping card when we given a Bill and it's Price finally Add them all prices then we use reduce method.
const reduceArr =[1,2,3,4]
//0 +1+2+3+4
const total = reduceArr.reduce(function(acc,curr_val){
    console.log(`Acc : ${acc} currval : ${curr_val}`);
    return acc+ curr_val
},0) // Here we specifie initial value

console.log(total);

//Write same code using Arrow Function
// const initial =0;
// const tot =reduceArr.reduce((acc,curr_val) => acc+curr_val ,initial)
// console.log(tot);

//+++++++++++Shopping Card Example +++++
let  shoppingCard =[
    {
        courseName:"Js",
        price :1000
    },
    {
        courseName:"Python",
        price :2000
    },
    {
        courseName:"Dsa",
        price :3000
    }
]
 const PriceToPay =shoppingCard.reduce((acc,item)=>acc+ item.price,0)
 console.log(`Total Payment : ${PriceToPay}`);
