let sum;
function myCalculator(num1, num2, myCallback) {
  sum = num1 + num2;
  myCallback(sum);
}
function myDisplayer(){
    console.log(sum)
}
myCalculator(-11, 32, myDisplayer);
