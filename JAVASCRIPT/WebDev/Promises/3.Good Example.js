let InternalMarks = prompt("enter your Internal exam value: ");
let ExternalMarks = prompt("enter your External exam value: ");


let promiseBlock = new Promise((resolve, reject) =>{
    let result = InternalMarks + ExternalMarks;
    if(result>60){
        resolve('SVMCS')
    }
    else{
        reject('SGS')
    }
})

promiseBlock.then((message) =>{
    console.log('You got more than 60%, so you will get',message )
}).catch((message) =>{
    console.log('You got less than 60%, so you will get',message)
})
