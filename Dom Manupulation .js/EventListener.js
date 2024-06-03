// Event listeners in JavaScript are used to execute code in response to events triggered by user actions or other occurrences.

var a= document.querySelector("h1")
a.addEventListener("click",function(){               //click is the event . after clicking the function runs.
    console.log("Hey")
    a.innerHTML = "Changed coz you clicked"
    a.style.color = "yellow"
})
