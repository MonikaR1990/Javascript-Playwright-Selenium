

class BankAccount
{
    #balance = 100;

    checkBalance()
    {
        console.log(this.#balance);
    }


}

let ba = new BankAccount();
console.log(ba.balance);
ba.checkBalance();


class Employee
{
    #salary = 30000; //Private variable

    getSalary()  //public method
    {
        return this.#salary;
    }

    addBonus(bonus)
    {
        this.#calculateSalary(bonus)
    }

    #calculateSalary(bonus)
    {
        this.#salary = this.#salary + bonus;
        console.log("Your updated Salary: " + this.#salary);
    }
    
}

let e1 = new Employee();
//console.log(e1.salary);

console.log(e1.getSalary());

e1.addBonus(2000);


