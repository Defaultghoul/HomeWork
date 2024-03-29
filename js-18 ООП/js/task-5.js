class Car {
	static getSpecs(car) {
		console.log(
			`maxSpeed: ${car.maxSpeed}, speed: ${car.speed}, isOn: ${car.isOn}, distance: ${car.distance}, price: ${car.price}`
		);
	}

	speed = 0;
	price;
	maxSpeed;
	isOn = false;
	distance = 0;

	constructor({ maxSpeed, price }) {
		this.maxSpeed = maxSpeed;
		this.price = price;
	}

	get price() {
		return this.price;
	}

	set price(newPrice) {
		this.price = newPrice;
	}

	turnOn() {
		this.isOn = true;
	}

	turnOff() {
		this.isOn = false;
		this.speed = 0;
	}

	accelerate(value) {
		if (this.maxSpeed > value) this.speed = value;
	}

	decelerate(value) {
		if (value >= 0) {
			this.speed = 0; // не андерсенд
		}
	}

	/*
	 * Додає в поле distance кілометраж (hours * speed),
	 * але тільки в тому випадку, якщо машина заведена!
	 */
	drive(hours) {
		if ((this.isOn = true)) {
			this.distance = hours * this.speed;
		}
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
