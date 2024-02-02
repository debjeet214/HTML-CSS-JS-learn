fetch('https://jsonplaceholder.typicode.com/todos/1')
    .then(res => {
        if(res.ok){
            console.log('Successful')
            res.json()
        }
        else
        {
            console.log('ERROR')
            res.text
        }
    })    
    .then(data => console.log(data))
    .catch(error => console.log('errors'))
