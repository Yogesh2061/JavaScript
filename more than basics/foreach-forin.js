//foreachh
/* for each is used when we have arrays. 
ForEach doesn't make any changes in the deafault array.it makes changes
in the array's temporary copy.so,array always remains the same.*/
 var b=[1,2,3,4,5,6,7];
 b.forEach(function(valuesinb){  //anonymous function:doesnt have name
console.log(valuesinb+2);  
 })

console.log(b)

//forin
// To loop in objects, we have forin.

var me = {
    name:"Yogesh",
    age:19,
    position: "student"
}

for (var key in me){
    // console.log(key)
    // console.log(me)
    console.log(key,me[key])
}
