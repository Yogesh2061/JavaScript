/* whenever we use function,fuction makes its imaginary container in which it has its 3 things:
variables,functions inside that parent function and lexical envirnoment of that funtion.*/
//This imaginary container is called envirnoment context.
//lexical environmentv tell us what our funtion can excess and what it doesnot.
/*summary:Executaion context is a container where function's code is executed and it's created whenever a
 function is called, it contains above mentioned three things.*/
// lexical envirnoment can be said a chart which says our particular function can access ehich things and which Doesnt
// it holds its scope and scope chain.

function sdf() {
  var a = 12;
  function der() {
    var b = 12;
  }
}
//we cannot use var(b) in sdf function.(we knew this coz of lexical envirnoment)
