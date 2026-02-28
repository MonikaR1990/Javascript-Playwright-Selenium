let greet = () =>  console.log("Hello");
greet();

function square(a)
{
    console.log(a*a);
}

square(10);


const sqrarea = (a) => console.log(a*a)

sqrarea(10);

let sum = (a, b) => console.log(a+b);
sum(4, 5);

let mul = (a, b) => {
    return a*b
}

console.log(mul(5, 4));

let multiply = (a, b) =>
{
    return a*b;
}

console.log(multiply(5, 4));

//function ==> Shorter Syntax
// callback

let login = (username, password) =>
{
    if(username === "admin" && password === "admin123")
    {
        return "Login Sucessful"
    }
    else
    {
        return "Invalid Credentials"
    }
}

console.log(login("admin", "admin12311"));

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

let checkEven = (num) => num%2===0 ? "Even" : "odd";

console.log(checkEven(10))

let findMax = (a, b) =>  a>b ? a : b;

console.log(findMax(10, 5));

const checkPassword = (password) => password.length >= 6? "Strong Password" : "Weak Password"

console.log(checkPassword("admin123"))