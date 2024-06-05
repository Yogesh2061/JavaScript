//when we need to store multiple values in a variables then array comes .
//array gives freedom to use multiple values . array is the group of values

var arr = [1, 2, 3, 4, 5];
//index=[0,1,2,3,4]
console.log(arr[0]);
console.log(arr[1]);
console.log("\n");
for (i = 0; i <= arr.length; i++) {
  //arr.length gives length of array
  console.log(arr[i]);
}

//push pop shift unshift

var num = [7, 8, 9, 4, 5];
num.push(1); //adds a member in array
console.log(num);
num.pop(); //remove last value
console.log(num);
num.unshift(0); //adds a elment at the start of array
console.log(num);
num.shift();
console.log(num);
num.splice(2, 1); //removes value of 2nd index
console.log(num);
num.splice(1, 3); //removes value from one to 3rd index
console.log(num);
