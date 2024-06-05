  //Class selector
  let boxes = document.getElementsByClassName("box")
  boxes[2].style.background="red"

  //Id selector
  document.getElementById("heading").style.backgroundColor="red"
 //Query selector
 //document.querySelector(".box").style.backgroundColor="green"

//querySelectorAll return multiple element in a NodeList that's why for Iterating we use loop
 document.querySelectorAll(".box").forEach(e=>{
  e.style.backgroundColor="blue";
 })

 e =document.getElementsByTagName("div") //return HtmlCollection
 //elment.matches(css)->check if elemnt matches given css selector.
 e[4].matches("#redbox")  // return true

//  document.designMode="on" //We can Edit any Website content
