// Attribute Methods
document.querySelector(".box").hasAttribute("style")// return True
document.querySelector(".box").getAttribute("style") //retun 'color:red'
document.querySelector(".box").removeAttribute("style") //remove color  styling

document.querySelector(".box").setAttribute("style","padding:34px")// Apply padiing 

//Insertion Methods Dinamically create
   let div =document.createElement('div') //create
   div.className="alert" //Set class
   div.innerHTML = "I have been inserted <b>by Chandan<b/>"
   document.body.append(div) //After used append method div element showing at last

//div.setAttribute("class","Created")
//document.querySelector(".container").append(div) 

//Some Other Insertion Methods
   //node.append(element)
   //node.prepend(element) //Insert at the Begining of node
   //node.before(element) //Insert After Node
   //node.replacwith(element) //Replace node with given node 

   // Insert AdjacentHTML/Text/Element Functions
   let cont = document.querySelector(".container") 
   cont.insertAdjacentHTML("afterbegin","<b> I am inserted</b>")
   cont.insertAdjacentText("afterend","Javascript is amazing")

   //ClassName and ClassList
   document.querySelector(".container")
   document.querySelector(".container").classList // ['container', 'bg-green', value: 'container bg-green']
   document.querySelector(".container").className //'container bg-green'
   document.querySelector(".container").classList.add("tempbox")
   document.querySelector(".container").classList.remove("bg-green")
   //togglt("class") -> Adds the class if it doesn't exist ,otherwise remove it.
   document.querySelector(".container").classList.toggle("bg-green") 


