const name = ["Monika","Mathan", "Mousikha", "Munnes", "Sihana", 1, 2, 3, 4, true, false]

//Accessing value based on index

console.log(name[2]);

const numbers = [10, 20, 30, 40, 50];

numbers.push(60); //Add the value to end

numbers.pop(); //Remove the end value

numbers.shift(); //Remove the first value

numbers.unshift(10); //Add the value in First

console.log(numbers[4]);

console.log(numbers.length)

for(let i = 0; i<numbers.length; i++)
{
    console.log(numbers[i]);
}

for(let value of numbers) //Best for arr
{
    console.log(value)
}

console.log(numbers);

let fruits = ["apple", "banana", "papaya", "mango", "orange"];

console.log(fruits.includes("guva"));

console.log(fruits.indexOf("banana"));

for(let f of fruits)
{
    console.log(f);
}

fruits.forEach(f => {
    console.log(f);
});

fruits.forEach(fruit => {
    console.log(fruit)
});

let nums = [5,15,25,35,45]

nums.forEach(n=>{
console.log(n)
});

//forEach main drawback doesn't support break, continue, async/await

for(let n of nums)
{
    console.log(n);
} //Auotmation best choice for of loop

//map ==> new array generate (Transform data)

let prices = [100, 200, 300]

let updatedPrices = prices.map(p=>p+10);

console.log(updatedPrices);

let num =  [1, 2, 3, 4, 5]

let newNum = num.map(n=>n*5);

console.log(newNum);

let nameList = ["mathan", "munees", "sihana", "moushika"];

let updatedNameList = nameList.map(name => name.toUpperCase());

console.log(updatedNameList);

//filter - filter data

let nos = [55, 44, 33, 22, 11]

let newNos = nos.filter(n=>n>30);

console.log(newNos);

let checknum = [1,2,3,4,5,6,7,8,9,10]

let newCheckNum= checknum.filter(n=>n%2===0)

console.log(newCheckNum);

//find method (first match find then it stop) - single element

let newnos = nos.find(n=>n>100)

console.log(newnos);


console.log(nos.sort());

let letters = ['a', 'z', 'c', 'y', 'm'];

console.log(letters.sort());

console.log(letters.reverse());

let vegs = ["carrot", "beans", "onion"]

console.log(vegs.join("-"));

let a = [1, 2];
let b = [3, 4];

console.log(a.concat(b));
