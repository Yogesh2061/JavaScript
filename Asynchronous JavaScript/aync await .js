/* any function in which we write async code,its async code sowe wee use promises,when its answee comes we have to use
then , to get rid of then we can use async await*/

 function abcd(){
 fetch(`www.anyurl.com`)
 .then(function(raw){
    return raw.json();                             
 })                              //without using await
 .then (function(data){
    console.log(data)
 })
}
abcd()

async function cdef(){
    let raw = await fetch(`url`);    //it's in main stack even if its async coz we used await
    let ans= await raw.json();                          //using async and await
    console.log(ans)
}

//whenever any code is async , we have to wait beacause we doesnt know when its answe will come.so we used await
