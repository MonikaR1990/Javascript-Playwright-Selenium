class Animal  //Parent Class
{
    eat() //method
    {
        console.log("Eating...")
    }

    sleep()
    {
        console.log("Sleeping...")
    }
}

class Dog extends Animal
{
    bark() //method
    {
        console.log("Barking...")
    }
}

let d = new Dog();
d.eat();
d.bark();
d.sleep();