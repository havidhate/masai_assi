function createCar(make, model, year) {
    return {
        make: make,
        model: model,
        year: year,
        describeCar: function() {
            console.log(`This car is a ${this.year} ${this.make} ${this.model}.`);
        }
    };
}


const car1 = createCar("Toyota", "Corolla", 2022);
const car2 = createCar("Honda", "Civic", 2020);
const car3 = createCar("Ford", "Mustang", 2023);

car1.describeCar();  
car2.describeCar();  
car3.describeCar();  