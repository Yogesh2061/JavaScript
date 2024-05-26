//object holds the detail of a individual element.

// 1)blank Object:
var a = {};

// 2) filled Object

var b = {
  name: "Yogesh",
  age: 19,
  address: "Nepal",
  college: "erc",
  hello: function () {}, // this is method.rest are property.
};
console.log(b);
b.name = "No name"; //overwritting name property
console.log(b)

//deleting object prop
delete b.age
console.log(b)
