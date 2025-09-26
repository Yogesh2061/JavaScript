/*we knew in while learning the basics that we cannot copy array directly. 
we can copy refrence value with the help of spread operator.*/

//here the value of a will also change.
var a = [1, 2, 3, 4]; //array
var b = a;

b.pop(); //array's functionality=>removes last element.
console.log(a, b);
 
var c=[1,2,3,4];
var d=[...c] //"..." are called spread operators.this will copy the values of c to d.
console.log(c,d)

// we can also copy objects like this.
var obj = {
    name :"Yogesh",
    age:19
};
var copy={...obj}
console.log(copy)
console.log(copy.age)

