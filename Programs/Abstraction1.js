//Abstraction
//class
//function

class ATM
{
    withdraw(amount)
    {
        this.validatepin(); //Implementation hide
        this.checkbalance(amount); //Implementation hide
        console.log("Money Withdraw: " + amount)
    }

    validatepin()
    {
        console.log("Pin Validated")
    }
    checkbalance(amount)
    {
        console.log("Balace checked for " + amount)
    }

}

let user1 = new ATM()
user1.withdraw(5000);

//Function 

function startCar()
{
    startEngine(); //Unimplemented function
    releaseBreak();
    accelerate();
}

function startEngine()
{
    console.log("Engine Started");
}

function releaseBreak()
{
    console.log("Break Released")
}

function accelerate()
{
    console.log("Car Moving");
}

startCar();


//Function Abstraction

function payNow(amount)
{
    validateUser();
    checkBalance(amount);
    processPayment(amount);
    sendConfirmation();

    console.log("Payment Successful: " + amount);
}

function validateUser()
{
    console.log("User Validated");
}

function checkBalance(amount)
{
    console.log("Balance checked for: " + amount);
}

function processPayment(amount)
{
    console.log("Payment processed: " + amount);
}

function sendConfirmation()
{
    console.log("Confirmation message sent");
}


payNow(5000);