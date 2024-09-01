const taskBtn = document.querySelector(".btn")
const input = document.getElementById("input-field")

const mytask = document.querySelector(".list-item")
taskBtn.addEventListener("click", () => {
    // console.log(input.value)

    if (input.value === "") {
        alert("please ! add your task🤩")

    }else{
        let listEle = document.createElement("li")
        listEle.textContent = input.value
        mytask.appendChild(listEle)

        let spanEle= document.createElement("span")
        spanEle.textContent="\u00d7"  //This code used for Cross
        listEle.appendChild(spanEle)
    }
    input.value = ""
    saveTask();

})

mytask.addEventListener("click", (e) => {
    if (e.target.tagName=="LI") {
        e.target.classList.toggle("check")
        saveTask();

    }else if(e.target.tagName== "SPAN"){
        e.target.parentElement.remove()
        saveTask();
    }

})

// function for prevent the created task 

function saveTask() {
    localStorage.setItem("task",mytask.innerHTML) //set task in local storage
    
}

//get task from local storage
function getEle() {
    mytask.innerHTML=localStorage.getItem("task")
    
}
getEle();
