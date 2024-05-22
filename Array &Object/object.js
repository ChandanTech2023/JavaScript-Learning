//Object Literals & Constructor both are used to create object in Js.
//Singleton-->An obj created by obj-Literals.means change in object reflect across entire script.
 
const mysym=Symbol("Key1") // Declare symbol
const jsuser={
     Name:"Raj",
    "fUll name":"Chandan",
    [mysym]:"mykey1", //use as a key
    Age:19,
    Location:"Jaipur",
    isUserloggedIn:false,
}
console.log(jsuser);
console.log(jsuser.Location);
console.log(jsuser["fUll name"]) //Another way to access object value

// Declare Symbol and use as a key
// console.log(jsuser[mysym]);

//If we need that nobody change obj-value for this we use Freeze method.
jsuser.email="ckd2023@gmail.com" //Change object values
// Object.freeze(jsuser)
jsuser.email="dkd303@gmail.com"
console.log(jsuser);

//----Add Function in Object
jsuser.greeting=function(){
    console.log("Hello  JS User");
}
jsuser.greeting2=function(){
    //For raferencing Same object use This.
    console.log(`Hello  JS User: ${this.Name}`);
}
console.log(jsuser.greeting());
console.log(jsuser.greeting2());



