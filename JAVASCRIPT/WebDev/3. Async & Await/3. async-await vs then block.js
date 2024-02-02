let num = prompt("enter the correct pass number")

async function getData(){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            resolve(21)
        }, 1000)
    })
}

async function check(){
    console.log('Hey, you are inside the async function');
    const result = await getData()
    console.log(result)
    console.log("all done, bye bye")
}

// VS then & catch block

async function check2(){
    gertData()
        .then(result =>{
            console.log(result)
        }).catch()
}

check()
check2()
