function greet(name="NULL")
{
	if(name!="NULL")
	{
		console.log("Hello "+name+"! Thanks for joining us.");
	}
	else {
		console.log("What is your name?");
	}
}
greet("Debjeet");// call the function


// important example
function addition(x=0,y=0)
{
	console.log("The sum is: ", x+y) 
}
addition(7,15)   // The sum is: 22
addition(7)     // The sum is: 7
addition()     // The sum is: 0
