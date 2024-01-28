function sum2(a, b, c, d = 45){
    console.log(a, b, c, d);   // here the b is not defined so, it will show undefined
    return a+b+c+d;
}

let result2 = sum2(6, 21)    // as b has no value, so the output will be not an number which is NAN 
console.log(result2)

