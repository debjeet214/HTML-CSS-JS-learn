// way - 1 (using recursion function)
function factorial(n) { 
    if (n === 0 || n === 1) { 
        return 1; 
    } else { 
        return n * factorial(n - 1); 
    } 
} 
let num1 = prompt("enter the number: "); 
let result = factorial(num1); 
console.log("The factorial of given number is :" + result);


// way 2 ( using for loop ) 
let x;
let y =1;
for( x =1; x<=num1;x++){
    y = y*x;
}
console.log(y);
