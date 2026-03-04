//OOPS - Object Oriented Programmming language

//Class + Object 
//Inheritance
//Polymorphism
//Abstraction
//Encapsualtion

//What is Class?
//Class is blueprint

class Hotel
{
    tea = 15;
    coffee = 20; //Properties or variables
    menu = "Pongal"

    foodReady() //methods or Behaviours
    {
        console.log("Food is beging prepared")
    }

    payAmount()
    {
        console.log("Your payment is processed")
    }

}

let server1 = new Hotel();
console.log(server1.tea) //15;
console.log(server1.coffee) //20

let server2 = new Hotel();
console.log(server2.menu);
server2.foodReady();
server2.payAmount();

//syntax ==> let obj = new classname();