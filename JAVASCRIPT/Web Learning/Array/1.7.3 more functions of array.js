let arr = [1, 13, 5 ,7, 11];
let newArr1 = []
for (let index = 0; index < arr.length; index++) {
    const element = arr[index];
    newArr1.push(element**2)   
}   // this help to create an another array using the existing array element by exponenting it

// doing same using map
let newArr2 = arr.map((e, index, array)=>{
    return e**2
})   
console.log(newArr2) 

const greaterThanSeven = (e)=>{
    if(e>7){
        return true
    }
    return false
}
console.log(arr.filter(greaterThanSeven))  // filter will help to filter out the array elements according to a condition
