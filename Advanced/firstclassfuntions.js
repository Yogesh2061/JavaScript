// A language is said to have first class,when the function in that language is treated as variables(normal values),
//  you can save them , you can pass them as arguements to another functions.
// Set time interval is an example.

// In JavaScript, functions are treated as "first-class citizens." But what does this mean? 
// It means that functions in JavaScript have the same status as other data types like strings, numbers, or objects. 

// Functions can be:
// Assigned to variables
// Passed as arguments to other functions
// Returned from other functions :Function can also return other function.This is often used in functional programming 
// and is a key concept in JavaScript.



//  1. Assigning a Function to a Variable
// You can assign a function to a variable, making the function accessible via the variable name.
const greetMessage = function() {
    console.log("Hello, I am a functiona ssigned to a variable greetMessage.");
};
greetMessage(); // Output: Hello, Prakash. Welcome to GeeksForGeeks!

// 2. Passing a Function as an Argument to Another Function
// You can pass a function as an argument to another function, which can then execute it or use it in some way.


function wrapperFunction() {
    return "Welcome to GeeksForGeeks!";     //one fun 
}

function greetMessage(wrapper, name) {  //another function with a function as parameter i.e passed as arguement to other fun.
    const message = wrapper();    // Calling the passed function i.e. wrapperFunction
    console.log(`${name}, ${message}`);
}
greetMessage(wrapperFunction, "Prakash");  //function call with function as parameter.
 // Output: Prakash, Welcome to GeeksForGeeks!



 //*Importance of First-Class Functions in JavaScript:
//  First-class functions are the foundation of many powerful programming patterns in JavaScript, such as:

// Callbacks: Functions passed as arguments to be executed later.
// Closures: Functions that capture and remember their lexical environment.
// Higher-Order Functions: Functions that return other functions or take functions as arguments.