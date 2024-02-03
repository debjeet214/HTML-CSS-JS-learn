let animal = {
    eats: true
};

let rabbit = {
    jumps: true
};

Object.setPrototypeOf(rabbit, animal)
let a = Object.getPrototypeOf(rabbit)
console.log(a)
