// Higher order funtions are the functions which accepts ffunction in parameter or return a function or both

function abcd(val) {}
abcd(function () {});

// or

function asd() {
  return function () {};
}
asd();
//  forEach method always Takes another Function inside it. so it is a higher order function
