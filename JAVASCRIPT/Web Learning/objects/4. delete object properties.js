let mobile = new Object();
mobile.brand = "Apple";
mobile.model = "iPhone 15 Plus";
mobile.price = "$1299";

delete mobile.brand;
delete mobile.model;
delete mobile.price;
console.log(mobile);
