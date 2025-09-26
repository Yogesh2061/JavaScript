// Higher-order functions (HOFs) are a key concept in functional programming, allowing for more abstract and flexible code. A higher-order function is a function that does at least one of the following:

// Takes one or more functions as arguments.
// Returns a function as a result.



// Higher order funtions are the functions which accepts function in parameter or return a function or both

function abcd(val) {}
abcd(function () {});

// or

function asd() {
  return function () {};
}
asd();
//  forEach method always Takes another Function inside it. so it is a higher order function



// Summary
// Higher-order functions are a powerful feature in JavaScript that allows for more abstract, reusable, and flexible code. 
// They are foundational in functional programming and are commonly used in array methods like map, filter, and reduce.

// In the next module, we’ll dive into solving exercises using functional programming principles, 
// making use of higher-order functions and array methods. This will solidify your understanding of these concepts and 
// prepare you for more complex coding challenges.