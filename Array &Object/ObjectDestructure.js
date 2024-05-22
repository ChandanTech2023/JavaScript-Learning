let course= {
    coursename :"Javascript",
    price: "600",
    courseMentor: "Hitesh"

}
console.log(course.courseMentor)
//Another way to extracting obj values
const {price ,coursename}= course
// console.log(price);
// console.log(coursename);

//Object destructuring , here courseMentor->mentor
const {courseMentor :mentor} =course
// console.log(mentor);


//JSON API format (Both Object and Array format )
// {
//     "coursename" :"Javascript",
//     "price": "free",
//     "courseMentor": "Hitesh"
// }
