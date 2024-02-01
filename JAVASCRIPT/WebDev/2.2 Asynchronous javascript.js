console.log("1. Hello Debjeet")
console.log("2. How are you doing")

setTimeout(() => {
    console.log("3. Hello Mitali, are you good")
}, 5000);

console.log("4. Hello Everyone")

setTimeout(() => {
    console.log("5. Oh, Hello Minakshi")
}, 2000);

console.log("6. Bye for now")



//OUTPUT  :    here the output will be not synchronous (sequential) the timeout & interval functions will be executed at the end
/*
1. Hello Debjeet
2. How are you doing
4. Hello Everyone
6. Bye for now
5. Oh, Hello Minakshi
3. Hello Mitali, are you good
*/
