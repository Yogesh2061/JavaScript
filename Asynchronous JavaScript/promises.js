/* A Promise in JavaScript is an object representing the eventual completion or failure of an asynchronous operation.
 It allows handling asynchronous tasks with .then, .catch, and .finally methods, making code more readable and
  manageable. Promises can be chained and have static methods like Promise.all and Promise.race 
  for working with multiple promises.
 */

var ans = new Promise((res,rej)=>{
    if(true){
        return res();
    }
    else{
        return rej()
}
})
ans
.then(function(){
    console.log("was resolved")
})
.catch(function(){
    console.log("wasn't Resolved")
})


//User will ask for numberbetween 0 and 5 and if the number is below 5, resolve if not reject.

var ans = new Promise((res,rej)=>{
    Math.floor(math.random()*10);
    if(n<5){
        return res();
    }
    else{
        return rej();
    }
})
ans.then(function(){
    console.log(below);
})
.catch(function(){
    console.log("above");
})