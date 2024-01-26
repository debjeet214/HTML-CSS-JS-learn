let course = {
	name: "JS Course",
	duration : "15 hours",
	price: 499,
	discount: "100%"
};

for(x in course){
	console.log(`${x} is ${course[x]}`);
}


let mobile = { 
	brand: "Apple",
	model : "iPhone 12",
	colors: "black"
};

for(keys in mobile){
	console.log(mobile[keys]);
}
