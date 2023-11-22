console.log("------ Functions.js ----- ");

// Function Declaration
// function add(a,b){
//      sum=a+b;
//     return sum;
// }

// let n1=parseInt(prompt("Enter first number"));
// let n2=parseInt(prompt("Enter second number"));
// let result=add(n1,n2);
// console.log("Sum is "+result);



//arrow function
//compact way of writing function
//1. no function keyword
//2. no return keyword
//3. no curly braces
//4. no function name
//5. no parameter parenthesis
//6. no function body parenthesis
//7. no semicolon
//8. no function body

//syntax
//let functionName=(parameter1,parameter2,..)=>expression;

const variableNametostroeFunction=(a,b)=>{
    return a+b;
}

num12=10;
num21=202;
console.log("Sum is "+variableNametostroeFunction(num12,num21));
//let result1=variableNametostroeFunction(num12,num21);
//console.log("Sum is "+result1);



const vari=(a,b)=>{
    return a*b;
}

let c=vari(10,10);
console.log("Multiplication is "+c);


const nameprint=()=>{
    console.log("My name is arif");
}

nameprint();