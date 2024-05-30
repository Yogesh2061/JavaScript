/*
Synchronous JavaScript:
- Executes code line by line, one at a time.
- Each line waits for the previous one to finish before executing.
- This can make the code easier to follow but can be slow if a line takes a long time to execute.
- Example: A loop that counts to a million will block the rest of the code until it's done.

Asynchronous JavaScript:
- Allows some code to run while waiting for other code to finish.
- Uses callbacks, promises, or async/await to handle tasks that take time, like fetching data from the internet.
- Helps keep the program responsive by not blocking other operations.
- Example: Fetching data from a server. You can continue to run other code while waiting for the data to come back.

In summary:
- Synchronous: Code runs one after another, blocking until each task completes.
- Asynchronous: Code runs without blocking, allowing other tasks to execute while waiting.
*/

/* lets say we have 3 tasks and each task takes the following minutes to be executed:
   task 1=10
   task 2=15
   task 3=5

   => if its synchronous it will take total of 30 mins for all tasks to be executed.
   => But if its asynchronous it will take total of 15 mins for all tasks to be executed.
*/ 
