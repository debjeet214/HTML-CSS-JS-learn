let mobile = {
	name: "Apple iPhone 12",
	price: 1200,

	// defining method
	purchase: function(quantity) {
		console.log(`Please pay ${(this.price)*quantity} for ${quantity} ${this.name} Mobile phones.`);
	}
};

mobile.purchase(2);

// Another Example. 
let car = {
    brand: "Bugatti",
    model: "Chiron-Sports",
    color: "Blackish-Violet",
    price: 4000000,
    speed: 483
}
car.details= new function(){
    console.log(`The car i am going to buy is ${this.brand} ${this.model}, whose price is ${this.price} dollars and it's top speed is ${this.speed}`);
}
