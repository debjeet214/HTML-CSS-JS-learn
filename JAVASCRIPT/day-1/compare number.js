// day - 1

console.log("Hello Bro!!")

// take 2 numbners a, b and compare and print the greatest numbers
//  user Input

var a = 10;
var b = 20;

if (a > b) {
  console.log(a + " is greater than " + b);
} else if (b > a) {
  console.log(b + " is greater than " + a);
} else {
  console.log("Both numbers are equal");
}


// runtime input

var readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});

readline.question('Enter first number: ', a => {
  readline.question('Enter second number: ', b => {
    a = Number(a);
    b = Number(b);

    if (a > b) {
      console.log(a + " is greater than " + b);
    } else if (b > a) {
      console.log(b + " is greater than " + a);
    } else {
      console.log("Both numbers are equal");
    }
    readline.close();
  });
});
