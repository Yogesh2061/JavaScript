/* In JavaScript, constructor functions are special functions used to create and initialize objects. They are a key feature of JavaScript's object-oriented programming capabilities. When a function is used as a constructor, it is called with the new keyword, which creates a new instance of the object defined by the constructor */

function cover() {
  this.width = 20;
  this.height = 10;
  this.color = "black";
}
var a = new cover();
var b = new cover();
var c = new cover();

console.log(a);
console.log(b);
console.log(c);

//Whenever we have make multiple elements with same properties,we can use constructor functions.

//lets take abn example . suppose, we have to make 3 circular buttons with difrrent colour but of same size.

function circbutton(color) {
  this.raduis = 10;
  this.color = color;
  this.height = 25;
  this.width = 12;
}
var red = new circbutton("red");
var blue = new circbutton("blue");
var green = new circbutton("green");

console.log(red);
console.log(blue);
console.log(green);

/*Summary: A function which whenever invoked with "new" keyword, Returns an object,if we use "this" keyword inside that function,it returns an object with all of the properties and methods mentioned inside that function, such called constructor function. */
