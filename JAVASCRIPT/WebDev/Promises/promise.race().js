/*
A Promise that asynchronously settles with the eventual state of the first promise in the iterable to settle. In other words,
it fulfills if the first promise to settle is fulfilled, and rejects if the first promise to settle is rejected.  

It's useful when you want the first async task to complete, but do not care about its eventual state.
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

Promise.race([
    recordingOne,
    recordingTwo,
    recordingThree
]).then((message) =>{
    console.log(message)
})

// output :  Video 1 is Recorded
