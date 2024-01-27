let mobiles = ["Apple", "Samsung", "One Plus", "Moto", "Huwaei"];

// using forEach function
mobiles.forEach(printMobs);


// define the callback function
function printMobs(item,index) {
console.log(`Rank ${index}: ${item} Mobiles`);
}
