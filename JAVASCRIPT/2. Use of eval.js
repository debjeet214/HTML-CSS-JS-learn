let random = Math.random();
let a = prompt("Enter first number")
let b = prompt("Enter second number")
let c = prompt("enter the operation")

let obj ={
    "+" : "-",
    "*" : "+",
    "-" : "/",
    "/" : "**" 
}

if(random > 0.1){  // returns correct answer if the output scenario is out of 10% chance
    console.log(`The result is ${a} ${c} ${b}`)
    alert(`The result is ${eval (`${a} ${c} ${b}`)}`)
}
else{
    c = obj[c];
    alert(`The result is ${eval (`${a} ${c} ${b}`)}`)
}
