/* hoisting is referred to the condition where, a variable which maybe used in the top and then defined later... 
in javascript it will not show error by moving definition part to the top during execution process by default
*/

console.log(a1)   // output will be udefined instead of error.
var a1 = 6

func1("HIii")  // functions will be similarly show no error due to hoisting

function func1(output){
    console.log(output)
}
