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

