let x = 10;
let y = 50;
let z = "10";

var xy = x>=y;
console.log(xy);

console.log(x === z);  // strict equal to, it returns false even if the value is same but if the data type is different.
console.log(x!==y);    //strict not equal to, it returns true if any one thing doesn't match  
console.log(x==y);     // equal to only, it can be true if the value is equal even the data type is different.
