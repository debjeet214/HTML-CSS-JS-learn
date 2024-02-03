let obj = {
    a: 1,
    b: "Harry"
}

console.log(obj)

let animal = {
    eats: true
};

let rabbit = {
    jumps: true
};

rabbit.__proto__ = animal; // sets the Prototype of rabbit to animal so that it can access the methods of the animals too

// OUTPUT:  

// rabbit.eats : true
// animal.jumps: undefined/false
