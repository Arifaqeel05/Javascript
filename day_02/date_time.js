let myDate= new Date();
//console.log(myDate); //date object will be achieved

//different method

console.log(myDate.toString());
console.log("to iso string: "+myDate.toISOString());
console.log("local string: "+myDate.toLocaleString());
console.log("local date string"+myDate.toLocaleDateString());
console.log("json: "+myDate.toJSON());
console.log("UTC METHOD :"+myDate.toUTCString());