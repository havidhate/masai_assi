// Constructor function for Car
function Car(make, model, year, isAvailable = true) {
    this.make = make;
    this.model = model;
    this.year = year;
    this.isAvailable = isAvailable;
}

// Constructor function for Customer
function Customer(name) {
    this.name = name;
    this.rentedCars = [];
}

// Method to rent a car
Customer.prototype.rent = function(car) {
    if (car.isAvailable) {
        car.isAvailable = false;
        this.rentedCars.push(car);
        console.log(`${this.name} rented a ${car.make} ${car.model}.`);
    } else {
        console.log(`Sorry, the ${car.make} ${car.model} is already rented.`);
    }
};

// Method to return a car with simulated delay
Customer.prototype.returnCar = function(car) {
    if (this.rentedCars.includes(car)) {
        setTimeout(() => {
            car.isAvailable = true;
            this.rentedCars = this.rentedCars.filter(c => c !== car);
            console.log(`${this.name} returned the ${car.make} ${car.model}.`);
        }, 2000); // Simulating a delay of 2 seconds
    } else {
        console.log(`${this.name} did not rent this car.`);
    }
};

// Constructor function for PremiumCustomer (inherits from Customer)
function PremiumCustomer(name, discountRate = 0.1) {
    Customer.call(this, name); // Call Customer constructor
    this.discountRate = discountRate;
}

// Ensure PremiumCustomer inherits Customer's prototype methods
PremiumCustomer.prototype = Object.create(Customer.prototype);
PremiumCustomer.prototype.constructor = PremiumCustomer;

// Method to calculate rental price considering discount
PremiumCustomer.prototype.calculateRentalPrice = function(basePrice, carType) {
    let rate = basePrice;
    if (carType === "SUV") {
        rate += 20;
    } else if (carType === "Sedan") {
        rate += 10;
    }
    return rate - rate * this.discountRate; // Apply discount
};

// Function to simulate maintenance
function maintenance(car, delay) {
    console.log(`The ${car.make} ${car.model} is under maintenance.`);
    setTimeout(() => {
        car.isAvailable = true;
        console.log(`The ${car.make} ${car.model} is now available for rent.`);
    }, delay);
}

// Demonstrating call, apply, and bind
function showCustomerDetails() {
    console.log(`Customer: ${this.name}, Rented Cars: ${this.rentedCars.length}`);
}

const customer1 = new Customer("John");
const premiumCustomer1 = new PremiumCustomer("Alice");

// Using `call`
showCustomerDetails.call(customer1);

// Using `apply`
showCustomerDetails.apply(premiumCustomer1);

// Using `bind`
const boundFunction = showCustomerDetails.bind(customer1);
boundFunction();

// Creating cars
const car1 = new Car("Toyota", "Corolla", 2020);
const car2 = new Car("Ford", "Mustang", 2021);
const car3 = new Car("Tesla", "Model X", 2022);

// Renting and Returning Cars
customer1.rent(car1);
customer1.returnCar(car1);

premiumCustomer1.rent(car2);
console.log(`Discounted Price for Mustang: $${premiumCustomer1.calculateRentalPrice(50, "Sedan")}`);
premiumCustomer1.returnCar(car2);

// Simulating maintenance
maintenance(car3, 3000);
