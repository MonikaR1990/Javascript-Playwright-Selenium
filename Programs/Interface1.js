//Javascript

class PaymentInterface  //Parent Class
{
    pay(amount)
    {
        throw new Error("Method pay() must be implemented");
    }

    refund(amount)
    {
        throw new Error("Method refund() must be implemented");
    }


}

class creditCardPayment extends PaymentInterface
{
    pay(amount)
    {
        console.log("Paid using Credit Card: " + amount)
    }
    refund(amount)
    {
        console.log("Refunded Amount to Credit Card: " + amount);
    }
}

let cc = new creditCardPayment();
cc.pay(5000);
cc.refund(2000);