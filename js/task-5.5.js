class Car {
  static getSpecs(car) {
    console.log(car);
  }

  constructor({ price, maxSpeed }) {
    this.maxSpeed = maxSpeed;
    this.speed = 0;
    this.isOn = false;
    this.distance = 0;
    this.price = price;
  }

  get priceCar() {
    return this.price;
  }

  set priceCar(newPriceCar) {
    this.priceCar = newPriceCar;
  }

  turnOn() {
    this.isOn = true;
  }

  turnOff() {
    this.isOn = false;
    this.speed = 0;
  }

  accelerate(value) {
    if (value > this.maxSpeed) {
      console.log(
        'Ошибка! Значение скорости превышает максимально допустимое!'
      );
    }
    this.speed = this.speed + value;
  }

  decelerate(value) {
    if (value < 0) {
      console.log('Ошибка! Значение скорости не может быть меньше 0!');
    }
    this.speed = this.speed - value;
  }

  drive(hours) {
    if (this.isOn !== true) {
      console.log('Ошибка! Автомобиль не заведен!');
    }
    this.distance = this.distance + this.speed * hours;
  }
}

const mustang = new Car({ maxSpeed: 200, price: 2000 });

mustang.turnOn();
mustang.accelerate(50);
mustang.drive(2);

Car.getSpecs(mustang);
// maxSpeed: 200, speed: 50, isOn: true, distance: 100, price: 2000

mustang.decelerate(20);
mustang.drive(1);
mustang.turnOff();

Car.getSpecs(mustang);
// maxSpeed: 200, speed: 0, isOn: false, distance: 130, price: 2000

console.log(mustang.price); // 2000
mustang.price = 4000;
console.log(mustang.price); // 4000
