//to runt this code on console, we need to make an html file and link this file with that html file
console.log("WELCOME TO JS LEARNING");
console.log("Hello World");
console.log("ARIF AQEEL AHMAD");

/*----------variables-----------------*/
console.log("----------variables-----------------");
//variables are used to store data that cab be varied or changed

let age=20;
let price=99.97;
console.log(price);
console.log(age);
let Myname="Arif Aqeel Ahmad";
let MyDegree="BSCS";
let MyUniversity="COMSATS SAHIWAL";
console.log(Myname);
console.log(MyDegree);
console.log(MyUniversity);

let x=null;// have idea about what is inside this
console.log(x);

let y=undefined; //no idea about what is inside this
console.log(y);

/*js is a dynamically typed language means we can change the type of variable, no need to
declare the type of variable*/

/*
var is used to declare a variable in js but it is not recommended to use var. It is used for global scope-->Never use it
us of var causes the confusion in the code, so we use let and const instead of var

let-->Variables can not be redeclared but can beupdated. It is used for local scope
const-->Variables can not be re-declared and not be updted. It is used for local scope
*/
console.log("----------DATA TYPES IN JS-----------------");

//-->primitive data types(7 types)--1.number, 2.string, 3.boolean, 4.null, 5.undefined, 6.symbol, 7.bigint

let a=100;
console.log(a);
console.log(typeof a);  //typeof is used to check the type of variable

let b="Arif Aqeel Ahmad";
console.log(b);
console.log(typeof b);

let c=true;
console.log(c);
console.log(typeof c);

let d=null;
console.log(d);
console.log(typeof d);

let e;
console.log(e);
console.log(typeof e);

let f=Symbol("id");
console.log(f);
console.log(typeof f);

let g=BigInt(1234567890123456789012345678901234567890);
console.log(g);
console.log(typeof g);


//object is  a collection of key value pairs
console.log("----------OBJECTS IN JS-----------------");
const Student={
    fullName:"Arif Aqeel Ahmad", //colon is used to assign the value to the key in object
    age:20, //age is a key and 20 is a value
    isMarried:false,
    university:"COMSATS SAHIWAL",
    degree:"BSCS"
};
console.log(Student);

//generally we use cosnt to declare an object but we can also use let.
//object is collection of different types of variables

//we can access the value of object by using:


//1. dot notation
console.log(Student.fullName);
console.log(Student.age);


//2. bracket notation
 //syntx: objectName["keyName"]
console.log(Student["university"]);
console.log(Student["degree"]);

//we can also update the value of object by using:
Student.age=Student.age+1; //updating the value of age
console.log(Student.age);

//constanr object can not be updated but we can update the value of  keys of constant object