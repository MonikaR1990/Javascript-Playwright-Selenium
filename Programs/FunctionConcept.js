/*function functionName()
{
    //code Block
}

//function is a reusable block of code design to perform specfic task

function greet()
{
    console.log("Hello");
}

greet(); //Function call

greet();

//Function with parameter

function greetings(name)
{
    console.log("Hello " + name)
}

greetings("Bala");

function add(a, b)
{
    console.log(a+b);
}

add(10, 20); //Function call  */

function mul(a, b)
{
    console.log(a*b);
}

let num1 = mul(5, 2) + 5; //10   //Display
console.log("Num1: " + num1);


function multiply(a, b)
{
    return a*b;
}

console.log(multiply(5, 2)); //10

let num2 = multiply(5, 2) + 5;
console.log("Num2: " + num2);


function calculateSalary(basic, hra, allowance)
{
    let totalsalary = basic + hra + allowance;
    console.log(totalsalary);
}

let bonus = 5000;

calculateSalary(20000, 5000, 2000);

function calculateSalary1(basic, hra, allowance)
{
    let totalsalary = basic + hra + allowance;
    return totalsalary;
}

let updatedSalary = calculateSalary1(20000, 5000, 2000) + bonus;
console.log(updatedSalary);

function checkEvenNum(num)
{
    if(num%2===0)
    {
        return "Even"
    }
    else
    {
        return "odd"
    }
}

//console.log(checkEvenNum(6));

let evencheck = checkEvenNum(7);
console.log(evencheck);


function printNumber(n)
{
    for(let i = 1; i<=n; i++)
    {
        console.log(i);
    }
}

printNumber(100); //Function call

//Arrow Function
//Callback
//Anonymous Function

