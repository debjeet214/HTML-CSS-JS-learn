let arr = [43, 56, 89, 21]
console.log(arr);
arr[0] = 7;
console.log("after change the array is", arr);
console.log(typeof arr, arr.length);

console.log(arr.toString());     // array to string

console.log(arr.join(" , "))  // to add something between array elements
arr.pop();                  // it will take out last element
console.log(arr);  

arr.push(23);           // add element at the end
arr.push(7);
arr.push(721)
console.log(arr)

arr.shift();                    // remove element at the start
arr.unshift("un-shift");        // add element at the start
console.log(arr);

delete arr[3]  // it will delete element at index 3
console.log(arr);   //but the place will stay empty
console.log(arr.length)  // therefore the size is still same as before

let arr1 = [13, 2, 53];
let arr2 = [4, 12, 6];
let arr3 = [6, 8, 21];
console.log(arr1.concat(arr2, arr3));   // concat function wont change the actual arrays, they stay the same just the output differs

console.log(arr1)   // it is as the same before

arr[3] = 5;
arr.splice(1,2, "position", 69);  // it means delete 2 items from index 1 & add "position" and 69

let numbers = [1, 29, 22, 88, 21, 54, 33, 44];  

// perform operations
numbers.sort();                     	// to sort array elements
numbers.reverse().pop();    // to reverse the elements first then pop

