//variables and functions are hoisted which means their declaration is moved on the top of the code.

//demo:
console.log(a);
var a = 10;
//There will not be any eror. The value of a will be  will give undefined coz only declaration moved to the top ,not the initialization
b = 20;
console.log(b);
var b;
