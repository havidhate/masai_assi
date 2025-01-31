function Animal(type){
    this.type=type;
}

const ani = new Animal("Animal");

Animal.prototype.sound = "Animal sound";

function Dog(){
    Animal.call(this);
}

Dog.prototype = Object.create(Animal.prototype);

Dog.prototype.sound="Bark";

const myDog = new Dog();

myDog.sound();