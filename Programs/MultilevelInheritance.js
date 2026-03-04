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

class puppy extends Dog
{
    play()
    {
        console.log("Playing...");
    }
}

let p = new puppy();
p.eat();
p.sleep();
p.bark();
p.play();