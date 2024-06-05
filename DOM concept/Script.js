function CreateCard(title,Cname,Views,Monthsold,duration,thumbnail){
    let Viewsstr
    if(Views<1000){
        Viewsstr=Views
    }
    else if(Views>1000000){
        Viewsstr=Views/1000000+"M"
    }
    else{
        Viewsstr =Views/1000 +"K"
    }

let html =`<div class="card">
<div class="image">
    <img width="190" src="${thumbnail}"
    alt="image"></img>
    <div class="capsule">${duration}</div>

</div>
<div class="text">
    <h1> ${title}</h1>
    <p> ${Cname} . ${Viewsstr}Views .${Monthsold}month ago</p>
</div>
</div>`
document.querySelector(".container").innerHTML =document.querySelector(".container").innerHTML +html+html

}
//Function Call
CreateCard("Introduction to Flower | So beautiful", "flowerWebsite",560,4,"31:06",
"https://img.freepik.com/free-photo/fresh-yellow-daisy-single-flower-close-up-beauty-generated-by-ai_188544-15543.jpg" 
 )