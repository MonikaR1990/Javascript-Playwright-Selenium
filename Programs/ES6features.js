//1995
//Client
//2015 
//ES6+ features

//1. let and const
//Before ES6 var

//2. Arrow Function

//Normal Function
function add(a,b)
{
    console.log(a+b)
}

 const result = (a,b) => console.log(a+b);

 //3. String Concatenation:

 let name = "Monika";
 console.log("Hello " + name);

 console.log(`Hello, ${name}`); 

 //4. Destructuring

 const numbers = [10, 20, 30];

 const[a, b, c] = numbers;

 console.log(a);
  console.log(b);
   console.log(c);

   const user = 
   {
    name1: "Bala",
    age: 28
   };

   console.log(user.address?.city); //Optionl Chaining ?.

   const {name1, age} = user;

   console.log(name1);

   //Spread Operator...array or object merge 

   const arr1 = [10, 20, 30];
   const arr2 = [40, 50, 60];

   const arr3 = [...arr1,...arr2];
   console.log(arr3);

//Classes (OOPs)

//Modules (Import/Export)

//Promise
//Async/Await

//for...of

const num = [10, 20, 30];

for(let n of num)
{
    console.log(n);
}


//Rest Parameter (handl multiple argumnets)

function sum(...numbers)
{
    let total = 0;

    for(let n of numbers)
    {
        total += n;
    }

    return total;
}

console.log(sum(10,20,30));

function studentList(...students)
{
    let index = 1;
    for(let name of students)
    {
        console.log(index + " - " + name);
        index++;
    } 
}

studentList("Mathan", "Munees", "Moushika", "Sihana");


