console.log("----------String------------");

//method 1:
let str="Arif";
console.log(str);

//method 2:
let str1='Arif king';
console.log(str1);
//both method are same and we can use any one of them

//Inbuild property of string

//1. length
//syntax: string name.length

console.log(str.length);
console.log(str1.length);

//to acces any single character from string
//syntax: string name[index]


console.log(str[0]);
console.log(str[1]);
console.log(str1[str1.length-3]); 
//to access any character from last .sysntax: string name[string name.length-1]

//template literal
//syntax: `string text+ ${variable} +string text`
//we can use this template literal to print the value of variable in string.this is called interpolation 



//example:
let obj={
    qname:"What is your name?",
    ans:"My name is Arif",
    age:24,

};

let output=`Question is: ${obj.qname} and answer is: ${obj.ans} and age is ${obj.age} and sum of 6 and 8 is${6+8}`;
console.log(output);

/*so we can use template literal to print the value of variable in string and also perform mathematics 
operation in string*/



//string methods
//1. toLowerCase()
//syntax: string name.toLowerCase()

let str2="ARIF";
console.log(str2.toLowerCase()); //to convert the string into lower case

let str3="arif";
console.log(str3.toUpperCase()); //to convert the string into upper case

//2. trim()
//syntax: string name.trim()
let str4="  Back to home ";
console.log("Length of string before using trim method:",str4.length);
console.log(str4.trim()); //to remove the extra space from string
console.log("Length of string after using trim method:",str4.trim().length); //to check the length of string after using trim method

console.log("concat method");
let finresult=str1.concat(str2) //to concat two string

console.log(finresult); //to print the result

let finresult2=finresult+"I AM A GOOD BOY"+ str4;
console.log(finresult2);






//3 slice()
//syntax: string name.slice(start index,end index)

let str5="Hello world";
console.log(str5.slice(1,7))//to print the string from index 1 to 6 ,7th is not included

//replace()

//syntax: string name.replace("old value","new value")

let str6="Hello world";
console.log(str6.replace("world","Arif")); //to replace the old value with new value


