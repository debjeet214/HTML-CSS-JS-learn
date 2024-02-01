A callback is a function passed as an argument of another function. This means that the parent function is usually built to use any kind of function. 
But the callback function, on the other hand, is meant to be used in a specific case (or a restricted number of cases) in which the parent function is used.

You create a callback function just like any other function in JavaScript, The difference between a callback function and any other function is how it's used. 
A callback function is specifically built to be used as argument of another function.

function callbackFunction () {  }  // this is a callback function if it is used as the argument for other function.

**********************************************************************************************************************

Functions are executed in the sequence they are called. Not in the sequence they are defined.

function myFirst() {
  myDisplayer("Hello");
}

function mySecond() {
  myDisplayer("Goodbye");
}

mySecond();
myFirst();

//  Here the first execution will be done as the call sequence is done.

*******************************************************************************************************************
