let a = prompt("Enter first number")

let b = prompt("Enter second number")
if (isNaN(a) || isNaN(b)) {                        // to check if the input is number if not number then error will be thrown
    throw SyntaxError("Sorry this is not allowed")
}

let sum = parseInt(a) + parseInt(b)

function main(){ 
    let x = 1;
    try {                                      // try block is used to check a piece of block is actually ok or will be with error
        console.log("The sum is ", sum * x)
        return true
        
    } catch (error) {
        console.log("Catch is used to execute a piece of code if error happens")
        return false
    } 
    finally{
        console.log("Finally is used to execute the code even after the return is made already")
    }
  
}
