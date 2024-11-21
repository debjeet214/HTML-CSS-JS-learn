## Asynchronous JS
Asynchronous JavaScript allows code to execute without blocking the main thread, enabling other operations to run while waiting for certain tasks (e.g., network requests and file reads) to complete. This means, we can stop a task and execute it later while other tasks can be executed. 

```python
console.log('Start');

setTimeout(() => {
    console.log('Async Task');
}, 1000);

console.log('End');

```

// output
```
Start
End
Async Task
# The setTimeout function executes the callback after 1 second, allowing other code to run in the meantime.
```

## Callback
A callback is a function passed as an argument to another function, executed after an operation is completed. It's a key component of asynchronous programming in JavaScript.
``` python
function fetchData(callback) {
    setTimeout(() => {
        callback('Data received');
    }, 1000);
}

fetchData((data) => {
    console.log(data); // Output: Data received
});
```

## Promises
A Promise is an object representing the eventual completion (or failure) of an asynchronous operation. It has three states:

- Pending: Initial state, neither fulfilled nor rejected.
- Fulfilled: The operation was completed successfully.
- Rejected: The operation failed.

```python
const promise = new Promise((resolve, reject) => {
    let success = true;
    setTimeout(() => {
        if (success) resolve('Operation successful');
        else reject('Operation failed');
    }, 1000);
});

promise
    .then((message) => console.log(message)) // If resolved
    .catch((error) => console.log(error));  // If rejected

```


- Promise.all: Resolves when all promises resolve.
- Promise.race: Resolves when the first promise resolves or rejects.
- setInterval: Executes repeatedly at intervals.
- setTimeout: Delays execution once.
- Event Loop: Processes asynchronous tasks.




