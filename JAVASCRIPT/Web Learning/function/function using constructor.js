// using the function constructor we can create function too ::  SYNTAX ::  new Function(arg1 [, arg2 [, ...argN]] ,] functionBody)

let mul = new Function("a","b","return a*b");

console.log(mul(4,9));
