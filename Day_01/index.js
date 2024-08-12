console.log("ABD DON AMBER")

const accountId=123445;  //not allowed to change value of const variable
//accountId=345;
console.log(accountId);

let email="arif1233@gmail.com";
var city="BUrewala"
/*
prefered not to use var because of block scope problem
*/

let a;
console.table(["email:"+email, "city :"+city, "a is :"+a]);

//alert("hello boi"); -->can't use it in node js, use it browser

let p="123abc";
console.log(typeof(p));

//to change data-type of 'p'
let newValue=Number(p);
//console.log(typeof(Number(p)));
console.log("new value of p is:"+newValue);
console.log(typeof(newValue));

//console.log(typeof(Number(city)));

let w=null;
console.log(typeof w);
let val2= Number(w)
console.log(val2);
console.log(typeof val2);


