await & async 

Highlight Points::
1. async and await must be used togeter to get results.
2. async await only affects promise reciver.
3. We can await any function that retuns Promise.
4. All async function returns Promise.
*****************************************************************

async works like combination of callbacks & promises for more better results

Adding await will make a function to be executing and as long as the function is not fully executed, the other next codes will not get executed as well.

settle = promise maybe resolved or rejected ( means executed)
resolved = promise succesfully executed with positive returns

***********************************************************************

GET requests are intended to retrieve data from a server and do not modify the server's state. On the other hand, POST requests are used to send data to the server for processing and may modify the server's state.

***********************************************************************

it is better to use Async-Await blocks instead of Then-Catch block because this don=esnt't requre the addition of excess callbacks and promises then async-await.
