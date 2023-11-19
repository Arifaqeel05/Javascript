//TODAY TOPICS: Operators and Conditional Statements
console.log("DAY-02 OF LEARNING");

console.log("Arithmetic Operators");
let x = 5;
let y = 2;
console.log("SUM IS: ", x + y);
console.log("SUBTRACTION IS: ",x - y);
console.log("MULTIPLICATION: ",x * y);
console.log("DIVISION IS: ",x / y);
console.log("REMINDER IS: ",x % y);
console.log("EXPONENT IS: ",x ** y); //5^2

console.log("unary Operators");

let a = 5;
console.log("a++", a++);
console.log("a", a);
console.log("++a", ++a);
console.log("a", a);

console.log("a--", a--);
console.log("a", a);
console.log("--a", --a);
console.log("a", a);


console.log("Assignment Operators");
// =, +=, -=, *=, /=, %=, **=
let b = 5;
b += 5; // b = b + 5;
console.log("b", b);
b -= 5; // b = b - 5;
console.log("b", b);
b *= 5; // b = b * 5;
console.log("b", b);
b /= 5; // b = b / 5;
console.log("b", b);
b %= 5; // b = b % 5;
console.log("b", b);
b **= 5; // b = b ** 5;
console.log("b", b);

console.log("Comparison Operators");
// ==, ===, !=, !==, <, >, <=, >=
let c = 5;
let d = 5;
console.log("==", c == d);
console.log("===", c === d); //strict equality operator (checks value and type)
console.log("!=", c != d);//false
console.log("!==", c !== d); //strict inequality operator (checks value and type)
console.log("<", c < d);
console.log(">", c > d);
console.log("<=", c <= d);
console.log(">=", c >= d);

console.log("Logical Operators");
// &&, ||, !

let e = 5;
let f = 5;
let g = 6;
let h = 7;
console.log("&&", e == f && g == h); //both conditions should be true
console.log("||", e == f || g == h);//any one condition should be true
console.log("!", e == f);
console.log("!", !(e == f));//false




