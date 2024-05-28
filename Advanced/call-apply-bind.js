// if we have funtion and object ,we have to run function and we know the default value if function is window.
// if we need to point value towards the object instead of window we use "call"

function abcd(val,val1,val2){
    console.log(this)
}
var obj = {age:19}

// abcd.call(obj)          //now the value of this will be obj.
abcd.call(obj,1,2,3)   


//apply

abcd.apply(obj, [3,4,5])               //we use apply like this

// bind

function abcd(){
    console.log(this)
}
var obj = {age:19}
                            

var bindedFunction = abcd.bind(obj);
bindedFunction();