// this keyword represented the object that called the function, which could be the window, the document, a button or whatever.
const user={
    username : "Hitesh",
    price : 800,
    WelcomeMessage : function(){
              // this -> keyword Holds the current context value.
        console.log(`${this.username} , Welcome to our website`);
        // console.log(this);
    }
}
user.WelcomeMessage() //method call
user.username ="Sam" //Here new username is Sam
user.WelcomeMessage()

//return {}obj in 'NOde env' because here Global haven't any contex But in Browser it returns Window obj.
console.log(this) 

//++++++++++++ Arrow function ++++++++
//Explicit return in this case used {return keyword}
const addTwoNum =(num1,num2) =>{
    return num1+num2
}
console.log(addTwoNum(3,4));

//Implicit return in this case dont use return keyword
const addTwoNum1 =(num1,num2) =>(num1+num2) 
console.log(addTwoNum1(5,4));

//Object return case
const addTwoNum3 =(num1,num2) =>({username: "hitesh"}) 
console.log(addTwoNum3(6,4));

const name= ()=>({user :"jd"})
console.log(name(user));