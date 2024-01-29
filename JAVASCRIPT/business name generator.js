let rand = Math.random()
let first, second, third;
// 0 0.25 0.50 0,75 1


// Lets generate the first word
if (rand < 0.25) {
    first = "Everyone's"
}
else if (rand < 0.25 && rand >= 0.50) {
    first = "Amazing"
}
else if (rand < 0.50 && rand >= 0.75) {
    first = "New"
}
else {
    first = "Generic"
}

// Lets generate the second word
rand = Math.random()
if (rand < 0.25) {
    second = "Clothing"
}
else if (rand < 0.25 && rand >= 0.50) {
    second = "Tool's"
}
else if (rand < 0.50 && rand >= 0.75) {
    second = "Food"
}
else {
    second = "Medicine"
}

// Lets generate the third word
rand = Math.random()
if (rand < 0.25) {
    third = "Store"
}
else if (rand < 0.25 && rand >= 0.50) {
    third = "Hub"
}
else if (rand < 0.50 && rand >= 0.75) {
    third = "Limited"
}
else {
    third = "Shop"
}

console.log(`${first} ${second} ${third}`)
