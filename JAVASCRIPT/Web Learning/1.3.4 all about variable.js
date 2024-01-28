console.log("hi naughty ");

var num1 = 43;
let num2 = 1;
{
    var num1 = 21;
    let num2 = 2;
    console.log(num1, num2)
}

console.log(num1, num2);

const p = 42;
console.log(p);

let names = 'debjeet ghosh'
let ages = 19;
let salarys = 35000.5;
let boolean = true;
let q = null;
let px;
console.log(names, ages, salarys, boolean, q, px);
console.log(typeof names, typeof ages, typeof salarys, typeof boolean, typeof q, typeof px);

let obj = { name: 'debjeet ghosh', salary: 3400000  };
console.log(obj);
console.log("after changes: ");
obj.age = 19;
console.log(obj);
