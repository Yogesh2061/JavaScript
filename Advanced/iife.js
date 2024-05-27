//iife => immediately invoked function expression
//ability to run a function,so that we can make any private variable.

// (function () {
//   var a = 12; //funtion made and called.
// })(); // privateval couldnot be accessed coz its private value.

var value = (function () {
  var privateval = 12; //funtion made and called.

  return {
    getter: function () {          //now only the privateval can be accesed, " value.getter()" in console.

      console.log(privateval);
    },
    setter: function(val){
        privateval = val;     //sets the private value or changes the private value using "value.setter(desired value)"
    }
  }
})()
