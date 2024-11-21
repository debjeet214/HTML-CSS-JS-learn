// console.log("hi");

// //inheritance
// //polimorphysm
// //abstraction
// //encapsulation
// class testclass{
//     Name
//     constructor(x){
//      this.Name=x

//     }
// nameverify(x){
//     if(x==this.Name){
//         return true;
//     }else{

//     }
// }

    
// }
const promises= require('./promise');
let statement="";
promises.then((result)=>{
    console.log("this is result section");
    console.log(result);
}).catch((error)=>{
    console.log("this was failure section");
    console.log(error);
    statement=error;
})
let inhand= require('./code');
let object = new inhand("mit");
console.log(object.nameverify("mita"));
