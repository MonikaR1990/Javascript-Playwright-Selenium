let num = 25;
num = "Bala";
num = true;

console.log(num);

//Array

let number = [10, 20, 30];

number.push("Hello");

console.log(number);

//Object

let user =
{
    name: "Mani",
    age: 36
}

user.name=100;

console.log(user.name);

function add(a, b)
{
    console.log(a+b)
}

add(5, "Meena");

//Operators
//1. Arithmetic Operators
//2. Assignment Operators
//3. Comparision Operators
//4. Logical Operators
//5. Unary Operators
//6. Ternary Operators
//7. Type Operators

let iniAge = 17

if(iniAge>="Mani")
{
    console.log("Allowed")
}

for(let i = 0; i<=5; i++)
{
    console.log(i);
}

class Person
{
    
    constructor(name)
    {
        this.name = name;
    }

    greet()
    {
        console.log(`Hello ${this.name}`)
    }
}

let p1 = new Person(100);
p1.greet();

//interface

class PaymentInterface
{
    pay()
    {
        throw new Error("Must use pay() method");
    }

}