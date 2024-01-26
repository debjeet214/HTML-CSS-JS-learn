//It is used to split a string based on a given delimiter like space, hyphen, etc. and it returns an array with the broken parts of the string.

let str = "x,y,z,u,v";   // this is a string
let arr = str.split(",");   //split based on commas

console.log(arr[0]);   // Logs: x
console.log(arr[1]);   // Logs: y
