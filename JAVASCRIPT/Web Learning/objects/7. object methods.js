let mobile = {
	name: "Apple iPhone 12",
	price: 1200,

	// defining method
	purchase: function(quantity) {
		console.log(`Please pay ${(this.price)*quantity} for ${quantity} ${this.name} Mobile phones.`);
	}
};

mobile.purchase(2);
