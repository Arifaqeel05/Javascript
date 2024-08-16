//cleaconsole.log("this is a song ")

//LEARNING DAY_02 OF JAVASCRIPT

const name="ARIF ";
const lname="AQEEL";

//console.log(`FULL NAME IS :${name}${lname}`);

//const gameName=  new String("Balouch");
// console.log(gameName);
// console.log(gameName.length)
// console.log(gameName.__proto__);
// console.log(gameName.charAt(2));
// console.log(gameName.indexOf('n'));
// console.log(gameName.toUpperCase());
// console.log(gameName.toLowerCase());

// const newString= gameName.substring(0,2); //0 index and 1 index will give new string and value at 2 will not included
// const gameName1=  new String("Balouch");
// console.log(gameName1);
// const w1=gameName1.slice(-3, -1)//-3 means 3rd last and it is included and -1 indicate last word and not included
// console.log(w1);


// const s1= new String("    KHAN IS     BACK   ");
// console.log(s1.length)
// const s2=s1.trim();//trim method is used to remove spaces from start and ending side
// console.log(s2);
// console.log(s2.length)

const s3= new String("KHAN IS BACK");
const s4=s3.replace("KHAN", "balouch");
console.log(s4);


console.log(s4.includes("balouch"));//found 
console.log(s4.includes("arif"));//not found


