// for functions with multiple parameters
let welcome = (a,b) => console.log(a+b);
welcome("Hello ", "Studytonight");


// for function without the parameters,
let welcome = () => console.log("Hello! and Welcome.");
welcome();   // function call


// for functions with one parameters, we can omit brackets
let welcome = name =>{
  console.log(`Welcome ${x}`);
}
welcome("John");
 
//or we can do this way

let func1 = (age) =>{
  console.log("the age is: ", age); 
  console.log("i will be "+ (age+1) +" soon")
}
func1(19);
func1(23);
