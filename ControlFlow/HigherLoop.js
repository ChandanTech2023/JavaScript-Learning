
//[ "","",""]
//[{},{},{}] When object value in Array

//for of loop : used in Iterable object structure like Array,String
const arr =[1,2,3,4,5]
for (const num of arr) {
    console.log(num);
    
}

//++++++++++++++ Maps in javascript++++++++++++++++++++++++

//Map is a object holds key-value pairs with Unique values and Remembering the orignal Insertion Order of the keys.

// const map = new Map() 
// map.set('IN','India')
// map.set('IN','India')
// map.set('Jp','Japan')
// map.set('USA','United states of America')
// console.log(map);
//MAp is not Iterable that's why we use for of Loop
// for (const [key,value] of map) { //Destructor
    // console.log(key, ":- ",value);
    
// }

//for in loop :  used for object to Access key value and also used in array
const myObject ={
    game1:'Ludo',
    game2:'Cricket'
}
for (const key in myObject) {
        const element = myObject[key];
        // console.log(` ${key} is ${element}`);
        
}
//For Array
const Language =['Java','C++','Python','Ruby']
for (const key in Language) {
        // const element = Language[key];
        console.log(key);
        
}

//forEach loop 
const programing = ["C++","Java",'R','js']
programing.forEach( function(item) { //Using Normal Function
    // console.log(item);
})
//Another Way, Uisng Arrow function
programing.forEach((element) => { 
    // console.log(element);
});

//Here we create own function and Give reference for Execution
function printMe(item,index,arr){
    console.log(item,index,arr);
}
programing.forEach(printMe)

//This method Used for Extracting Value From Database which is already in Array form
//++++++++++ [{},{},{}] ++++++++
const myCoding =[
    {
        LanguageName :"Python",
        LanguageFile:".py"
    },
    {
        LanguageName:"C++",
        LanguageFile:".cpp"
    }
]
myCoding.forEach( (item)=> {
    console.log(item.LanguageName);
})
