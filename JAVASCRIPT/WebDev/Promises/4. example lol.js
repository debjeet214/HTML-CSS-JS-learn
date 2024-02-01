const userleft = false
const userwatching = false

function watchTutpromise(){
    return new Promise((resolve, reject)=>{
        if(userleft){
            reject({
                name: 'User Left',
                message : ';('
            })
        }
        else if(userwatching){
            reject({
                name: 'user watching cat memes',
                message : 'still not happy'
            })
        }
        else
        resolve('All ok, Thumbs Up & subscribe the cat memes')
    })
}

watchTutpromise().then((message)=>{
    console.log('success: ' + message)
}).catch((error)=>{
    console.log(error.name + ' ' + error.message)
})
