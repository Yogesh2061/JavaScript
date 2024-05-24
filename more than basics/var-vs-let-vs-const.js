/*1.Var was in old js , let and const are in new js.
 2.var is function scoped, let is bracs scoped.
 */
// ex:
function varscope() {
//   for (var i = 0; i < 10; i++) {
  for (let i = 0; i < 10; i++) {
    console.log(i);
  }
  console.log(i);
}
varscope();
//var can be used in entire of its parent function.here 10 will aso be printed. so, we use let intead of var


// 3. Var adds itself to the window object.let and const doesn't.
/*js have many features , but some features we use it doesnot have. even then , we could use those features from window. 
window can be said as box of features given by browser to use with js.*/
//type window in console to seee the features given by object (window)
/* examples:alert,prompt,document*/
var a = 2; //it will be added in window. check it.
//so to tackle these thengis let is used.

