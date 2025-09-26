// Recursion is a programming concept where a function calls itself in order to break down a problem into smaller,
//  more manageable parts. The key idea is to solve a small piece of the problem and 
// then use the solution of that small piece to solve the next piece, and so on, until the entire problem is solved.
// A recursive function typically has two main components:
// Base Case: This is the condition under which the recursion stops. It prevents infinite loops by providing a simple, 
// non-recursive solution to a specific case.
// Recursive Case: This is where the function calls itself with a modified argument, moving closer to the base case with each call.

// Example : sum of elemnts of an array using recursion.
let a=[1,2,3,4,5]

function findSum(A, N) {
    if (N <= 0)
        return 0;
    return (findSum(A, N - 1) + A[N - 1]);
}
 
// Driver code
 
let A = [1, 2, 3, 4, 5];
let N = A.length;
const total = findSum(A,N);
console.log(total);






// Javascript to find factorial of given number


// recursive function to find factorialof given number:
function factorial(n) {
  if (n == 0) return 1;  //base case
  return n * factorial(n - 1);
}
  
// Driver Code
let num = 5;
const fact = factorial(num);
console.log(fact);