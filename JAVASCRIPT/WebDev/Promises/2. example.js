console.log('This is promises');

let prom1 = new Promise((resolve, reject) => {
    let a = Math.random();
    if (a < 0.5) {
        reject("No random number was not supporting you")
    }
    else {
        setTimeout(() => {
            console.log("Yes I am done")
            resolve("Harry")
        }, 3000);
    }
})

let prom2 = new Promise((resolve, reject) => {
    let a = Math.random();
    if (a < 0.5) {
        reject("No random number was not supporting you 2")
    }
    else {
        setTimeout(() => {
            console.log("Yes I am done 2")
            resolve("Harry 2")
        }, 1000);
    }
})

// This returned promise fulfills when all of the input's promises fulfill (including when an empty iterable is passed), 
// with an array of the fulfillment values. It rejects when any of the input's promises rejects, with this first rejection reason.

let p5 = Promise.all([prom1, prom2]) // ^
p5.then((a)=>{
    console.log(a)
}).catch(err=>{         // to catch the error
    console.log(err)
})
 
// A Promise that asynchronously settles with the eventual state of the first promise in the iterable to settle. In other words,
// it fulfills if the first promise to settle is fulfilled, and rejects if the first promise to settle is rejected.

let p3 = Promise.race([prom1, prom2])
p3.then((a)=>{
    console.log(a)
}).catch(err=>{         // to catch the error
    console.log(err)
})
