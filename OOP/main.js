class Car {
  constructor(name, color, speed) {
    console.log("constructor");
    this.name = name;
    this.color = color;
    this.speed = speed;
    this.price = 10000;
  }

  fullInfo() {
    console.log("Car name", this.name);
    console.log("Car color", this.color);
    console.log("Car speed", this.speed);
  }
  getName(role) {
    return this.name;
  }
  setName(name) {
    return (this.name = name);
  }
}

const car = new Car("BMW", "red", 200); // object => instense
const car2 = new Car("Benz", "yellow", 300);

// car.fullInfo();
// car2.fullInfo();

console.log("=======");
console.log(car.getName());
car.setName("Audi");
console.log(car.getName());
console.log("=======");

class Bus extends Car {
  constructor(name, color, speed, capacity) {
    super(name, color, speed); // calling the parent's constructor
    this.capacity = capacity;
  }
  //override
  fullInfo() {
    console.log("Car name", this.name);
    console.log("Car color", this.color);
    console.log("Car speed", this.speed);
    console.log("Car capacity", this.capacity);
  }
}

const b1 = new Bus("Hino", "blue", 1000, 40);
b1.fullInfo();
car.fullInfo();
