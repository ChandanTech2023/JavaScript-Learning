// const user ={
//     username: "Chandan",
//     loginCount: 4,
//     signIn: true,
//     getUserdetails:function(){
//         console.log("Got userdetails from database");
//         // Here this keyword use to show corrent execution context
//        console.log(`Username is: ${this.username}`);
    
//        console.log(this);
//     }
// }
// console.log(user.username)
// console.log(user.getUserdetails())
// console.log(this); //But in global context it's show empty Object in Node 

//Constructor Function-> It allow to create multiple instances using One Object literal; 

function User(username ,isloggedIn ,loginCount) {
    this.username=username;
    this.isloggedIn=isloggedIn;
    this.loginCount=loginCount;
    return this; //Object passon for accessing all value
    
}
//By using new keyword we preserve getting Ovewrride value
const user1 =new User("Hitesh" ,true,6)
console.log(user1.constructor);
const User2 = new User("ck",false,1)
console.log(User2);



 