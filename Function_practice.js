let count=0;

// function strin(input){
//     for(let char of input){
//        console.log(char);   
//         if(char==="a"||
//          char==="e" || 
//          char==="i" ||
//           char==="o"||
//           char==="u"
//           ){
//          count++ ;  
//         }


//     }
// }


//Arrow function
const arrowfun=(input)=>{
    for(let char of input){
        console.log(char);
        if(char==="a"||
         char==="e" || 
         char==="i" ||
          char==="o"||
          char==="u"
          ){
         count++ ;  
        }
    }
}
let input=prompt("Enter a string");
console.log("String is: ",input);
arrowfun(input);
console.log("Number of vowels in string is: ",count);

