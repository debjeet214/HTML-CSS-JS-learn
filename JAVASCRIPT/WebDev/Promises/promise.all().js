/* 
This returned promise fulfills when all of the input's promises fulfill (including when an empty iterable is passed), 
with an array of the fulfillment values. It rejects when any of the input's promises rejects, with this first rejection reason.
*/


const recordingOne = new Promise((resolve, reject)=>{
    resolve('Video 1 is Recorded')
})

const recordingTwo = new Promise((resolve, reject)=>{
    resolve('Video 2 is Recorded')
})

const recordingThree = new Promise((resolve, reject)=>{
    resolve('Video 3 is Recorded')
})

Promise.all([
    recordingOne,
    recordingTwo,
    recordingThree
]).then((message) =>{
    console.log(message)
})

/*output 

Array(3)
0 : "Video 1 is Recorded"
1 : "Video 2 is Recorded"
2 : "Video 3 is Recorded"
length : 3

*/
