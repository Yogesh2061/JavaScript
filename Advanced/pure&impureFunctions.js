// pure function is any fuction that has two features.
// 1.it should always return same output for same input.
// 2.It will never change/update the value of a global variable.

function vc(val){
return Math.random()*val;
}
var ans1=vc(2);
var ans2=vc(2);

console.log(ans1)
console.log(ans2)
// it will give diffrent answer so it is not pure function.

function pure (a,b){
    return a*b;
}
var ans3 =pure(1,2);
var ans4 =pure(1,2);
console.log(ans3)
console.log(ans4)