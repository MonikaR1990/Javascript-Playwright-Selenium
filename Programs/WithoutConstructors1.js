class Employee
{
    name;
    id;

  /*  constructor()
    {
        
    } */


    displayDetails()
    {
        console.log(this.name + " - " + this.id);
    }
}

let e1 = new Employee();
e1.name = "Bala";
e1.id = 101;

e1.displayDetails();

let e2 = new Employee();
e2.name = "Meena";
e2.id = 102;

e2.displayDetails();


