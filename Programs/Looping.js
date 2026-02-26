//Looping is used run the block of code repeatly until it reaches the condition

//for loop
//While loop
//do-while loop

//for loop

//1, 2, 3, 4, 5
/*
console.log(1);
console.log(2);
console.log(3);
console.log(4);
console.log(5);
*/
//for(initialization; condition check;  incremet)

for(let i = 1; i<=5; i++)
{
    console.log(i);
}

//Print Even Number //1 to 10

for(let i= 1; i<=10; i++)
{
    if(i % 2===0)
    {
        console.log(i);
    }
}

//Reverse loop //5

for(let i = 5; i>=1; i--)
{
    console.log(i);
}

//While-loop (Run until the condition is true)
let i = 6;

while(i<=5)
{
    console.log(i);
    i++;
}

//do-while - atleast one time execution without check condition

let j = 6;

do
{
    console.log(j)
    j++;
}
while(j<=5);

//break;

for(let i = 1; i<=5; i++)
{
    if(i===3)
    {
        break;
    }

    console.log(i);
}

for(let i = 1; i<=5; i++)
{
    if(i===3)
    {
        continue; //Skip the condition
    }

    console.log(i);
}
