// 1

let btnDep = document.querySelector('#deposit');
let inputDep = document.querySelector('#deposit-input');

let btnWithdraw = document.querySelector('#withdraw');
let inputWithdraw = document.querySelector('#withdraw-input');

let balance = document.querySelector('#balance');
let reloadBalance = document.querySelector('#reload-balance');

const bankAccount = {
	ownerName: 'Svyatoslav',
	accountNumber: 71344246,
	balance: 1220,

	deposit(amount) {
		this.balance += amount;
	},

	withdraw(amount) {
		this.balance -= amount;
	},
};

balance.textContent = `Баланс: ${bankAccount.balance}`;

btnDep.addEventListener('click', () => {
	bankAccount.deposit(+inputDep.value);

	alert(`Залишок: ${bankAccount.balance}`);
});

btnWithdraw.addEventListener('click', () => {
	bankAccount.withdraw(+inputWithdraw.value);

	alert(`Залишок: ${bankAccount.balance}`);
});

reloadBalance.addEventListener('click', () => {
	balance.textContent = `Баланс: ${bankAccount.balance}`;
});

// 2

let tempInp = document.querySelector('#temp');
let btn = document.querySelector('#btn');

const weather = {
	temperature: 0,
	humidity: '10%',
	windSpeed: '34 km/h',

	temp() {
		if (weather.temperature < 0) {
			return true;
		} else {
			return false;
		}
	},
};

btn.addEventListener('click', () => {
	weather.temperature = +temp.value;

	if (weather.temp()) {
		alert('температура нижче 0 градусів Цельсія');
	} else {
		alert('температура вижча або дорівнює 0 градусів Цельсія');
	}
});

// 3

let passInput = document.querySelector('#pass');
let emailInput = document.querySelector('#email');
let btn = document.querySelector('button');

const user = {
	name: 'Svyatoslav',
	email: 'test@gmail.com',
	password: '123321qq',

	login() {
		if (passInput.value == this.password && emailInput.value == this.email) {
			alert('Успішно!');
		} else {
			alert('Ви ввели деякі дані невірно!');
		}
	},
};

btn.addEventListener('click', () => {
	user.login();
});

// 4

let allH2 = document.querySelectorAll('h2');
let btn = document.querySelector('button');
const movie = {
	title: 'Iron Man',
	director: 'Man',
	year: 2019,
	rating: 9,

	check() {
		if (this.rating > 8) {
			return true;
		}
		return false;
	},
};

btn.addEventListener('click', () => {
	allH2[0].textContent = `title: ${movie.title}`;
	allH2[1].textContent = `director: ${movie.director}`;
	allH2[2].textContent = `year: ${movie.year}`;
	allH2[3].textContent = `rating: ${movie.rating}`;

	if (movie.check() == true) {
		allH2[0].style.color = 'green';
	}
});
