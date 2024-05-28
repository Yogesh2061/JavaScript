/* iheritance is basically passing parent's features or properties to their childrens, 
to do the same thing in javascript with the help of prototype is called prototypal inheritance. 
*/

var human= {
    name :"homo sapience",
    canRun:true,
    canFly:false,
    canTalk: true
}

var me = {
    
    canCode: true,
    canDevelopWebsites: true,
    amazingwebsites: true,
    

}

me.__proto__ = human

//now object "me" will also have have properties of "human" along with its own properies(check console and prototype)


