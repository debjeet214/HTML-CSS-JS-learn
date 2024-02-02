let num = prompt("enter the correct pass number")

async function getData(){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            if(num == 214927){
                resolve('You can enter')
            }
            else{
                reject('you can not enter, Get Out')
            }
        }, 7000)
    })
}

async function check(){
    console.log('Hey, are you really a member');
    console.log("if you are really then enter the secret code in prompt: ");
    
    let decision = await getData()

    console.log('Yes you enetered correct number', num)

    console.log('You are Welcome');
}

check()
