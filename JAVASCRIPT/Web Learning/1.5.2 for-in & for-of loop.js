console.log("tutorial of loops");

// basic for loop
let a;
for(a =0; a<5; a++){
    console.log(a);
}

let obj = { name: 'debjeet ghosh', age:19, role:"coder", salary: 3400000  };
console.log(obj);
// for-in loop  : it will return the key & elements of the object
for (const key in obj) {
    const element =obj[key];
    console.log(key+':'+ element);
}

// for-of loop : used for returning all elements in array and string
for (const c of "harrycs") {               // FOR STRING
    console.log(c);
}

var arr = ["Apple", "Mango", "banana"];
for (const iterator of arr) {              //FOR ARRAY
    console.log(iterator);
}
