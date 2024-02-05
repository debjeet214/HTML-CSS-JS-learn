function sumation(a, b, c){
    return a+b+c;
}

let arr = [1, 5, 18]
console.log(sumation(arr[0], arr[1], arr[2]))

console.log(sumation(...arr))    // spread opeartor ... , it opens the array elements for executing the function
