let button = document.getElementById("btn")

// list of all mouse events :  https://developer.mozilla.org/en-US/docs/Web/API/MouseEvent

// addEventListener = will help to add a function to be executed if a certain click will be made 
button.addEventListener("click", ()=>{
    document.querySelector(".box").innerHTML = "<b>Yay i am the box, and i am enjoyably clicked now</b>";

})

button.addEventListener("dblclick", ()=>{
    alert("you Double clicked me");
})

button.addEventListener("contextmenu", ()=>{   // for right click
    alert("you right clicked me");
})

// list of all keyboard events :  https://developer.mozilla.org/en-US/docs/Web/API/KeyboardEvent

button.addEventListener("keypress", (ee)=>{
    console.log(ee.key, ee.keyCode);
})

button.addEventListener("keydown", (eee)=>{
    console.log(eee.key, eee.keyCode);
})

button.addEventListener("keyup", (e)=>{
    console.log(e.key, e.keyCode);
})
