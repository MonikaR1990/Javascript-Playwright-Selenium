//PolyMorphism

//Method Overloading //Not Support Directly //not able to perform using class
//Method Overriding //Same Action --> different result

class Animal
{
    sound()
    {
        console.log("Make Sound");
    }
}

class Dog extends Animal
{
    sound()
    {
        console.log("Braking");
    }
}

class Cat extends Animal
{
    sound()
    {
        console.log("Meow")
    }
}

class Lion extends Animal
{
    sound()
    {
        console.log("Roar");
    }
}

let d = new Dog();
d.sound();

class Login
{
    authendicate()
    {
        console.log("Login with username and password");
    }
}

class OTPLogin extends Login
{
    authendicate()
    {
        console.log("Login using OTP Verification");
    }
}

class GoogleLogin extends Login
{
    authendicate()
    {
        console.log("Login using Google Account");
        
    }
}


let user1 = new Login();
let user2 = new OTPLogin();
let user3 = new GoogleLogin();

user1.authendicate();
user2.authendicate();
user3.authendicate();
