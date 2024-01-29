console.log(Array.from("Happle"));

let obj = {
    a:87,
    b:32,
    c:'c',
    d:"dreams"
}

var eles = Object.keys(obj)   // converting object keys into array elements
console.log(Array.from(eles));

var eles = Object.values(obj) // convert object values into array elements
console.log(Array.from(eles));
