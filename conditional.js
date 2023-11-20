console.log("Conditional Statements");

// let user_age=24;
// if(user_age>15){
//     console.log("You can vote");
// }
// else{
//     console.log("You can't vote");
// }

//odd even number

let num1=13;
if(num1%2==0){
    console.log(num1 +"  is Even Number");
}
else{
    console.log(num1 +" is Odd Number");
}


let my_age=24;
if(my_age>18){
    console.log("middle age");
}
else if(my_age>30){
    console.log("old age");
}
else{
    console.log("young age");
}

//ternary operator
let my_age1=24;
let result=(my_age1>18)?"middle age 1":"young age";
console.log(result);


//alert("Be Active");//alert box, it will show the message in the browser.Create once a pop up message

//to take input from user
let n1=prompt("Enter 1st number");//it will take input from user
let n2=prompt("Enter 2nd number");

console.log(n1+n2);//it will concatenate the two numbers, because prompt will take input as string only
//it will not add the two numbers

//Q1:
    //take a number from user and check whether it is divisible by 5 or not

    let num2=prompt("Enter a number");
    if(num2%5==0){
        console.log("Divisible by 5");
    }
    else{
        console.log("Not divisible by 5");
    }

    //Q2: Assign grade to the student according to the marks obtained by the student
    //marks>=80 A
    //marks>=70 B
    //marks>=60 C
    //marks>=50 D
    //marks>=40 E
    //marks<40 F

    let marks=prompt("Enter marks");
    if(marks>=80){
        console.log("A");
    }
    else if(marks>=70){
        console.log("B");
    }
    else if(marks>=60){
        console.log("C");
    }
    else if(marks>=50){
        console.log("D");
    }
    else if(marks>=40){
        console.log("E");
    }
    else{
        console.log("F");
    }
    