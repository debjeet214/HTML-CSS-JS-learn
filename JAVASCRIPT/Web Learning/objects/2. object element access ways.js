let movie = {name:"Avengers: Endgame", duration: "3h 2m", year: 2019};

// access elemnt using dot operator
console.log(movie.name);
//access using square brackets
console.log(movie['duration']);


// combined use.

let holidayPlan = {venue:"Maldives", duration: "4 days", cost: 150000, person: 2};
let costPerPerson = holidayPlan.cost/holidayPlan['person'];

console.log(costPerPerson);
