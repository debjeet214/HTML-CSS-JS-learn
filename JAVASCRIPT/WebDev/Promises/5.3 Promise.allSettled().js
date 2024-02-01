let semOneInternalMarks = prompt("enter your Internal exam value: ");
let semOneExternalMarks = prompt("enter your External exam value: ");


let promiseBlock1 = new Promise((resolve, reject) =>{
    let result = semOneInternalMarks + semOneExternalMarks;
    if(result>60){
        resolve('SVMCS')
    }
    else{
        reject('SGS')
    }
})

let semTwoInternalMarks = prompt("enter your Internal exam value: ");
let semTwoExternalMarks = prompt("enter your External exam value: ");


let promiseBlock2 = new Promise((resolve, reject) =>{
    let result = semTwoInternalMarks + semTwoExternalMarks;
    if(result>60){
        resolve('SVMCS')
    }
    else{
        reject('SGS')
    }
})

let semThreeInternalMarks = prompt("enter your Internal exam value: ");
let semThreeExternalMarks = prompt("enter your External exam value: ");


let promiseBlock3 = new Promise((resolve, reject) =>{
    let result = semThreeInternalMarks + semThreeExternalMarks;
    if(result>60){
        resolve('SVMCS')
    }
    else{
        reject('SGS')
    }
})

let pB = Promise.allSettled([promiseBlock1, promiseBlock2, promiseBlock3])
pB.then((message) =>{
    console.log('You got more than 60%, so you will get',message )
}).catch((message) =>{
    console.log('You got less than 60%, so you will get',message)
})
