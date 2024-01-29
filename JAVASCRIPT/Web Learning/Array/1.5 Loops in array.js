//WHILE loop
var fruits = ["apple", "guava", "mango"];

let counter = 0;
while(counter<fruits.length)
{
	console.log(fruits[counter]);
    counter++;
}

let arr = [43, 56, 89, 21]

console.log("using the classical for loop");
for(let x =0; x<arr.length; x++){
    console.log(arr[x])
}

console.log("using the for-of loop");
for(const iterator of arr){
    console.log(iterator);
}

console.log("using the foreach loop");
arr.forEach((value, index)=>{
    console.log("the value at index ",index," is ", value)
})
