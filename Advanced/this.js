/* this:this keyword is a special keyword in javascript which changes it's value in different context */
//{inside here then i am not a global scope} else global .

// in global scope:
console.log(this)             //gives window  (ie its value is window)

//in function scope:
function value (){
  console.log(this)         // gives window
}

//in method scope:
//btw,a fuction inside object is called method.
var obj = {
       name: "javascript",
       features: function(){
        console.log(this)                    //method
       }                  
                                                          

                                                  
}
obj.features()                             //gives object

// in any method "this" keyword always refers to parent object.



//Event listeners:

var button = document.querySelector("button");
button.addEventListener("click",function(){           //this keyword is equal to ehatever written before addeeventlistener, in this case "button"

    console.log(this);
})


