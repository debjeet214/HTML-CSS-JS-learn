let num = prompt("enter the correct pass number")

async function getData(){
   // simulate getting data from a server ( fetch APIs)
   let val = await fetch('https://jsonplaceholder.typicode.com/todos/1')
   let decision = await val.json();     // this will return string value in the form of js object
   // let decision = await val.text    this will return text value
   console.log(decision)
}

async function check(){
    console.log('Hey, are you really a member');
    console.log("if you are really then enter the secret code in prompt: ");
    
    let decision = await getData()

    console.log(decision);

    console.log('Yes you enetered correct number', num)

    console.log('You are Welcome');
}

check()
