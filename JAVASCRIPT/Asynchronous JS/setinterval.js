// The setInterval function is used to execute a block of code repeatedly at specified intervals (in milliseconds). It continues running until it's explicitly stopped using clearInterval.

let count = 0;

const intervalId = setInterval(() => {
    count++;
    console.log(`Interval running: Count is ${count}`);

    // Stop the interval after 5 iterations
    if (count === 5) {
        clearInterval(intervalId);
        console.log('Interval stopped.');
    }
}, 1000); // Runs every 1000ms (1 second)

// output
// Interval running: Count is 1
// Interval running: Count is 2
// Interval running: Count is 3
// Interval running: Count is 4
// Interval running: Count is 5
// Interval stopped.
