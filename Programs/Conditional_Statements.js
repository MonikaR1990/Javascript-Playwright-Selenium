//Control Flow Statements
// 1. if 
//2. if-else 
//3. if-else-if
//4. switch

let mark = 90;

if(mark>=50)
{
    console.log("Pass")
}
else
{
    console.log("Fail");
}

//if-else-if

let score = 60;

if(score>=90)
{
    console.log("Grade A");
}
else if(score>=75)
{
    console.log("Grade B")
}
else if(score>=65)
{
    console.log("Grade C");
}
else if(score>=50)
{
    console.log("Grade D")
}
else
{
    console.log("Fail")
}

let signal = "Yellow"

if(signal === "red")
{
    console.log("Stop");
}
else if(signal === "Green")
{
    console.log("Go")
}
else if(signal === "Yellow")
{
    console.log("Ready")
}
else
{
    console.log("Signal not Working");
}

//switch case
let day = 8;

switch(day)
{
    case 1:
        console.log("Monday");
        break;
    case 2:
        console.log("Tuesday");
        break;
    case 3:
        console.log("Wednesday");
        break;
    case 4:
        console.log("Thursday");
        break;
    case 5:
        console.log("friday");
        break;
    case 6:
        console.log("Saturady");
        break;
    case 7:
        console.log("Sunday");
        break;
    default:
        console.log("Invalid day");
        
}

let num1 = 10;
let num2 = 20;
let op = "+"; 

switch(op)
{
    case "+":
        console.log(num1+num2);
        break;
    case "-":
        console.log(num1-num2);
        break;
    case "*":
        console.log(num1*num2);
        break;
    case "/":
        console.log(num1/num2);
        break;
    default:
        console.log("Wrong Operator");
}



