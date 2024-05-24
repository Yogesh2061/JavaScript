//There are two types:
//primitives = number, string, null, undefined, boolean

/*Refrences = [] () {}
values which on copying doesn't copies the real value but is refrence is passed. such values are called refrence values
we cannot directly copy them.
if real valued is copied its primitive typed value.
*/
var a = 12;
var b = a;
b = b + 3;

console.log(a, b);

var a = [1, 2, 3, 4]; //array
var b = a;

b.pop(); //array's functionality=>removes last element.
console.log(a, b);
//Here both a and b's value will be changed. this is what refrence values all about.
//if bracket is used they are refrence type.
