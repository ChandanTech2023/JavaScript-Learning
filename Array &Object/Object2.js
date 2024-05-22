// const tinderUser =new Object() // Singleton Object declare
const tinderUser={} //Non singelton obj

tinderUser.id="123ab"
tinderUser.name='Raju'
tinderUser.isLoggedIn=false;
console.log(tinderUser); // return { id: '123ab', name: 'Raju', isLoggedIn: false }]

//Converts obj keys value into Array
console.log(Object.keys(tinderUser)); //return [ 'id', 'name', 'isLoggedIn' ]
console.log(Object.values(tinderUser)); //return ['123ab', 'Raju', false ]

const regularUser={  //Use of Nested object to access object value
    email: "raju@gmail.com",
    fullname:{
        userfullname: {
            Fname:"Sam",
            Lname:"bahadur"
        }

    }
}
// console.log(regularUser.fullname.userfullname);

    //==========Combine Object value-========
const obj1 ={1:"a", 2:"b"}
const obj2 ={3:"a", 4:"b"}
// const obj3 =Object.assign({},obj1 , obj2) //Using assign()
// console.log(obj3);

const obj3 ={...obj1,...obj2} //Another method to combine using spread
// console.log(obj3)


