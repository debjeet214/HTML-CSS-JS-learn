const promises=new Promise((resolve,reject)=>{
    const success=true;
    if(success){
        resolve("the promise")
    }
    else{
        reject("it was a failure");
    }
});
module.exports=promises
