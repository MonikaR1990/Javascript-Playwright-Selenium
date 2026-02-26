let a = 10;
let b = 20;


//Types of Operators
//1. Arithmetic Operator
//2. Assignment Operator
//3. Comparison Operator
//4. Logical Operator
//5. Unary Operator
//6. Ternary Operator
//7. Type Operator 

//Arithmetic Operator (+, -, *, /, %, **)

console.log(a+b); //30

console.log(a-b); //-10


console.log(a*b); //200

console.log(a/b);

let x = 20;
let y = 2;

let z = x/y;

console.log(z);

//Assignment Operator (=, +=, -=, *=, /=)

let p = 10;

p += 5; // p = p+5;

console.log(p); //15

p -= 10; //p = p - 10

console.log(p); //5

p *= 2; //p = 5 * 2

console.log(p); 10

p /= 2; //p = p / 2;
console.log(p);


let s = 20;

s *= 2; s = 20 * 2

console.log(s); //40


//Comparison Operator (==, ===, !=, !==, <, >, >=, <=)

console.log(5==5); 

console.log(5=="5"); //== value only check

console.log(5==="5"); // === Strict Equal  (value + data type check)

console.log(5!=4);

console.log(5!=="4")

console.log(5>5); //false

 console.log(5>=5); //true


//Logical Operator (&&, ||)

let age = 16;
let hasVoterId = true;

if(age>=18 && hasVoterId)
{
    console.log("Eligible for Vote")
}
else{
    console.log("Not Eligible for Vote")
}


console.log(age>=18 && hasVoterId);

console.log(age>=18 || hasVoterId);

//Unary Operator (++, --)

let m = 5;


console.log(m++); //Post Increment //First Value print then increase 1

console.log(m);

let n = 7;

console.log(++n); //Pre-Increment //

let i = -7;

console.log(i--); //7

console.log(i); //6

//Unary minus (-)

console.log(-i);

//Logical Not (!) //Boolean value reverse

let isstatus = true
console.log(!isstatus)

//tenary operator

let mark =  40;

let result = mark >=50 ? "Pass" : "Fail";

console.log(result);

let color = "Green"


console.log(color == "Green" ? "Go" : "Stop");


//Type of Operator

console.log(typeof color);
console.log(typeof mark);
console.log(typeof isstatus);
