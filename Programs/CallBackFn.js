function greet(name, callback)
{
    console.log("Hello "  + name);
    callback(); //calling the call back function
}

function sayBye()
{
    console.log("Bye");
}

greet("Mathan",sayBye);


function orderFood(callback)
{
    console.log("Food Ordered");
    callback();
}

function cookFood()
{
    console.log("Cooking Food")
}

orderFood(cookFood);


function loginUser(username, callback)
{
    console.log(username + " Logged In");
    callback();
}

function dashBoard()
{
    console.log("Dash Board open");
}

loginUser("Sihana", dashBoard);