const Student = 
{
    //properties
    name: "Bala",
    age: 25,
    mark: 90,

    //method
    getMark: function()
    {
        return this.mark + 10;
    }
};

const Employee =
{
    empName: "Meena",
    empId: 101,
    salary: 20000
}

for(let k in Employee)
{
    console.log(k+ " - " + Employee[k])
}


console.log(Employee);

const Car =
{
    model: "ABC Model",
    color: "Red",
    price: "8 laksh",
    brand: "Audi"
}

let count = 0;

for(let key in Car)
{
    console.log(key + " - " + Car[key]);
    count++;

    if(count===2)
    {
        break;
    }
}

const reuiredKey = ["model", "price"];

for(let key of reuiredKey)
{
    console.log(key+ " - " +Car[key])
}


console.log(Car.price)
console.log(Student.mark)

console.log(Student.getMark());


const user =
{
    username: "admin",
    password: "admin@123",
    login: function()
    {
        console.log("Login Sucessful " + this.username)
    }
}

user.login();
console.log(user.username)

user.email = "admin@gmail.com" //Add Property to the Object
user.password ="admin@1234" //Update Property

console.log(user)

delete user.email;

console.log(user)

//CRUD

const person =
{
    name: "Monika",
    address:
    {
        city: "Trichy",
        state: "Tamilnadu"
    }
}

console.log(person.address.state)