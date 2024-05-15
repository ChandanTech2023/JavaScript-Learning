let course= {
    coursename :"Javascript",
    price: "600",
    courseMentor: "Hitesh"

}
console.log(course.coursename)

//Object destructuring
const {courseMentor :mentor} =course
console.log(mentor);

//JSON API format
// {
//     "coursename" :"Javascript",
//     "price": "free",
//     "courseMentor": "Hitesh"
// }
