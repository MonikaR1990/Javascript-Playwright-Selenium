//TypeScript = Javascript + Type Safety

let num1 = 25;

//num1 = "Mathu"; not allowed
num1 = 27.5;

function greet1()
{
  console.log("Hello")
}

greet();

//DataTypes

//1. number
//2. String
//3. Boolean
//4. undefined
//5. Null
//6. Bigint
//7. symbol
//8. void

//let ename = "Bala"

let ename: string = "Bala"
let age: number = 25;
let isStudent: boolean = false;

//Array

let numbers = [10, 20, 30];

//numbers.push("Hello");
numbers.push(25);

//Tuple -> diiferent datatypes in an array

let student = [25, "Bala", "Meena", "Madhu", 28, 35,];

//Object

let user =
{
    name: "Mani",
    age: 25
}

//user.name=100;

function sum(a: number, b:number)
{
    console.log(a+b)
}

sum(5,10);

//Operators
//1. Arithmetic Operators
//2. Assignment Operators
//3. Comparision Operators
//4. Logical Operators
//5. Unary Operators
//6. Ternary Operators
//7. Type Operators

let iniAge1 = 17

if(iniAge1>=18)
{
    console.log("Allowed")
}

for(let i: number = 0; i<=5; i++)
{
    console.log(i);
}

class Student
{
    name: string; //Instance Variable

    constructor(name: string) //local variable
    {
       this.name = name;
    }

    greet()
    {
        console.log(`Hello ${this.name}`);
    }
}

let s1 = new Student("Priya");
s1.greet();

//Interface

interface Employees
{
    name: string ;
    age: number;  
    salary: number; 
    Id: number;
}

let user1: Employees =
{
    name: "Monika",
    age: 12,
    salary: 12000,
    Id: 121
}
let user2: Employees =
{
     name: "Mani",
    age: 12,
    salary: 12000,
    Id: 121
}

console.log(user2.name);

interface Workers
{
    name: string;
    salary: number;
}

function showWorkerDetails(work: Workers)
{
    console.log(work.name);
    console.log(work.salary);
}

let worker1 =
{
    name: "Mona",
    salary: 12000
}

showWorkerDetails(worker1);

interface Product
{
    name: string,
    price: number
}

let items: Product[] =[
    {name: "Pen", price: 50},
    {name: "Pencil", price: 10},
    {name: "Scale", price: 15}
]


interface Animal
{
    sound(): void;
}

class Dog implements Animal
{
    sound(): void {
        console.log("Barking");
    }
}

class Cat implements Animal
{
    sound(): void
    {
        console.log("Meow")    
    }

}


class Teacher
{
    private salary:number = 5000;
}

let t1 = new Teacher()
//t1.salary;

//private
//public
//protected

let id: number | string //(union type)

id = 101;
id = "E1010";