class Animal {
    constructor(name) {
        this.name = name
        console.log("Object is created...")
    }
    eats() {
        console.log("Kha raha hoon")
    }
    jumps() {
        console.log("Kood raha hoon")
    }
}


class Lion extends Animal {
    constructor(name) {
        super(name)
        console.log("Object is created and he is a lion...")
    }

    eats() {
        super.eats()
        console.log("Kha raha hoon roar")
    }
}

let a = new Animal("Bunny");
console.log(a)

let l = new Lion("Shera")
console.log(l)



