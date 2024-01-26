// EXAMPLE 1 ::

let holidayPlan = {venue:"Maldives", duration: "4 days", cost: 150000, person: 2};
// add more info using dot operator
holidayPlan.flightIncluded = false;
// add more info using square bracket
holidayPlan['sightSeeing'] = true;

//EXAMPLE 2 ::

let bike = new Object();

bike.name = "Yamaha";
bike.selfStart = true;
bike['engineCC'] = 150;
console.log(bike);
