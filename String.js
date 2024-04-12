// -------- Some important concept of String in js ------
const name ="Chandan"
const repoCount = 50
console.log(name+repoCount+ "values");
// console.log(name + repoCount + " Value");  //Not better way to concatinate.

//Better way to concatinate values
console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);
const gameName = new String('hitesh-hc-com')

// console.log(gameName[0]);
// console.log(gameName.__proto__);

// console.log(gameName.length);
// console.log(gameName.toUpperCase());
console.log(gameName.charAt(2)); // t
console.log(gameName.indexOf('t'));  // 2

const newString = gameName.substring(0, 4)
console.log(newString); // hite

// const anotherString = gameName.slice(-8, 4)
// console.log(anotherString);

const newStringOne = "   hitesh  "; //print string with WhiteSpace 
console.log(newStringOne);
console.log(newStringOne.trim());//Remove whiteSpace 

const url = "https://hitesh.com/hitesh%20choudhary"

console.log(url.replace('%20', '-'))

console.log(url.includes('Sundar')) //return False, because this string not present in Url

console.log(gameName.split('-'));// split string based on '-'. 

/*
console.log("1"+2) ->12
console.log(1+2+"4") ->34
console.log(3+"1"+2) ->312
console.log("1"+2+2) ->122

*/