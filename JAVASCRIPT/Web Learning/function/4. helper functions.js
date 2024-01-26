//    Those functions that are called inside other functions are known as Helper functions. ******  what it is?
// The main purpose of creating a function is to make the code reusable. A function can be used anywhere, even inside another function. ******* why to use?


// function for ordering & payment for food
//*******************************************
function scanAndPay(item, amount)
{
	console.log("Welcome to scan and pay service");
	console.log(`Payment of ${amount} done for purchasing ${item}.`);
}

function orderFood(item)
{
	switch(item)
	{
		case "Burger":
            scanAndPay(item, 50);			
            break;
		case "Cold Drink":
            scanAndPay(item, 30);
			break;
		case "Pizza":
            scanAndPay(item, 100);
			break;
	}
}

orderFood("Pizza");


// function to find Perimeter
//*****************************
function findPermimeter(length, breadth) 
{
	return 2*(length+breadth);
}

// function to find cost of fencing an area
function costOfFencing(length, breadth, cost)
{
	return (findPermimeter(length,breadth))*cost;
}

// cost of fencing per square unit
let cost = 500;
const totalCost = costOfFencing(8, 4, cost);
document.write("Cost of Fencing is: ", totalCost)
