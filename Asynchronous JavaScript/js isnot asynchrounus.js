// JS is not asynchronous. whatttt!??? yes its true
/*
JavaScript itself is not asynchronous, but it can handle asynchronous operations through 
its event-driven architecture, allowing for non-blocking code execution. 
This capability is crucial for tasks like making network requests, handling user input, 
or performing long-running computations without freezing the web page.

Imagine 2 containers main stack and side stack . the synchronous code goes to main stack and 
the asynchrounous code or so called asynchronous code goes to side stack. the code in main stacks executes first
and once its empty, lets say it asks the side stack if work is complete,then it moves to main stack and the
code is executed. This process of askking and executing is called eventLoop. 

*/
console.log("hey")
console.log("hey")
setTimeout(function(){
    console.log("async")
},0)
console.log("hey3")
//even when there is not delay the function will be printed last due to main-stack,side-stack and eventloop terms.
// Hence, JavaScript is not aynchronous.There is no multi Threading. Its single threading(one work at one time).