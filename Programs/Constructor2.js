class Mobile
{
    constructor(brand, price)
    {
        this.brand = brand;
        this.price = price;
    }

    showDetails()
    {
        console.log("Brand: " + this.brand);
        console.log("Price: " + this.price);
    }
}

let m1 = new Mobile("Vivo", 25000);
let m2 = new Mobile("OnePlus", 34000);

m1.showDetails();
m2.showDetails();