// map(), reduce() and filter() are three commonly used higher-order functions in JavaScript that operate on arrays. They allow you to transform, aggregate, and filter data in a functional programming style.

// 1. map():creates a new array by performing some operation on each element of the original array.
// The map() function creates a new array by applying a provided function to each element of the original array. It does not modify the original array.
 
let arr = [1, 2, 3, 4, 5];


let a= arr.map((values)=>{
    return values * 2
})
console.log(a)  //Output: [2, 4, 6, 8, 10]
console.log(arr) //Output: [1, 2, 3, 4, 5] (original array remains unchanged unlike forEach)



// 2. filter():creates a new array with all elements that pass the test implemented by the provided function.

let arr2= [1,2,3,4,5,6,7,8,9,10]

let b= arr2.filter((value)=>{
return value%2!=0;
})
console.log(b)  //Output: [1, 3, 5, 7, 9] (array of odd numbers)
console.log(arr2) //Output: [1,2,3,4,5,6,7,8,9,10] (original array remains unchanged)


// 3. reduce():executes a reducer function on each element of the array, resulting in a single output value. 
// It reduces all the elements of the array to a single value by repeatedly applying a function. 
// It is an alternative of using a loop and updating the result for every scanned element.

let arr3= [1,2,3,4,5]

let c= arr3.reduce((h1,h2)=>{
    return h1+h2
})

console.log(c)  //Output: 15 (sum of all elements in the array) 1+2=3+3=6+4=10+5=15
console.log(arr3) //Output: [1,2,3,4,5] (original array remains unchanged)