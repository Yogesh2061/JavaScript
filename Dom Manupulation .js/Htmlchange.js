var a=document.querySelector("h1")
a.innerHTML = "Changed Html"      //we will get this message instead of "Dom:Document........"
a.textContent="<h1>Nothing will change , every thing will be as it is</h1>"
// H1 content changed.