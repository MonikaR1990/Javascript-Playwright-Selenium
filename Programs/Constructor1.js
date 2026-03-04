class Employee
{
    constructor(name, id)
    {
        this.name = name;
        this.id = id;
    }

    displayDetails()
    {
        console.log(this.name + " - " + this.id)
    }

}

let e1 = new Employee("Bala", 101);
e1.displayDetails();

let e2 = new Employee("Meena", 102);
e2.displayDetails();

