console.log("this is a song ")

//LEARNING DAY_02 OF JAVASCRIPT

const name="ARIF ";
const lname="AQEEL";

console.log(`FULL NAME IS :${name}${lname}`);

const gameName=  new String("khan");
console.log(gameName);
console.log(gameName.length)
console.log(gameName.__proto__);
console.log(gameName.charAt(2));
console.log(gameName.indexOf('n'));
console.log(gameName.toUpperCase());
console.log(gameName.toLowerCase());

// const newString= gameName.substring(0,2); //0 index and 1 index will give new string
const newString= gameName.slice(0,2);
console.log(newString);

