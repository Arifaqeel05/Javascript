console.log("LOOP AND STRING CONCEPT");
let sum=0;
for(let i=0; i<5; i++){
    console.log(i+1,": LEARNING JAVASCRIPT LOOP");
    sum=sum+i;
}

console.log("SUM is: ",sum);
console.log("LOOP has Ended");

let i=0;
do{
    console.log("i is: ",i+1);
    i++;
}while(i<5);

//Q1: Print the table of 2 using while loop
let j=1;
for(; j<=10;j++){
    console.log("2 * ",j," = ",2*j);
}

//Q2: Print the table of 5 using while loop
let k=1;
while(k<=10){
    console.log("5 * ",k," = ",5*k);
    k++;
}


//for-of loop
/*used for
    -->string (to access each character)
    --> array
    */

//syntax: for(let variable of string/array){
//     console.log(variable);
// }
//to calculate the number of character in string

let legth=0;
let str="ARIF IS A GOOD BOY";
for(let char of str){
    console.log(char);
    legth++;
}
console.log("Length of string is: ",legth);


//for-in loop is used to access the object
//syntax: for(let variable in object){
//     console.log(variable);
// }

let obj={
    name:"Arif",
    age:24,
    city:"Mumbai"
};

for(let key in obj){
    console.log(key); //to access the key
    console.log(obj[key]); //to access the value of the key
}   