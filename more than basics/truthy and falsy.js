//Any thing we write on js , it belongs to one type among two. Those two types are truthy and falsy.
// falsy values = 0, false,undefined ,null, NaN, document.all
//exept these , others are truthy values

if(7){
    console.log("truthy")
}                                  //we will get truthy bcoz it is none of the falsy values.
else{
    console.log("hello")
}

if(0){
    console.log("truthy")
}                                  //we will get falsy bcoz it is one of the falsy values.
else{
    console.log("falsy")
}