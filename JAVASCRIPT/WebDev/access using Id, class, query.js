console.log("Harry")

let boxes = document.getElementsByClassName("box")  // access using class name
console.log(boxes)

boxes[2].style.backgroundColor = "red" 

document.getElementById("redbox").style.backgroundColor = "red" // access using Id.

document.querySelector(".box").style.backgroundColor = "green";
console.log(document.querySelectorAll(".box"))  //return all the box elements

document.querySelectorAll(".box").forEach(e =>{
    e.style.backgroundColor = "green";
})   // to make the elements that have .box into green using loop

document.getElementByTagName("div")  //return all the elments that have tag name div.