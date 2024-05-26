/*js have a concept in which we can use function as a value
*/
// ex:

function abcd(a){
a();
}

abcd(function(){console.log("hey")})