// 1
let user = {
	hobby: 'drawing',
	premium: true,
};

user.mood = 'happy';
user.hobby = 'skydiving';
user.premium = false;

for (const key of Object.keys(user)) {
	console.log(`${key}:${user[key]}`);
}

//2

const countProps = obj => {
	return Object.keys(obj).length;
};

console.log(countProps(user));

//3
let team = {
	John: 25,
	Jane: 30,
	Bob: 20,
	Alice: 35,
};

const findBestEmployee = employees => {
	let Highest = 0;
	let bestEmployee = '';

	for (const employee in employees) {
		if (employees[employee] > Highest) {
			Highest = employees[employee];
			bestEmployee = employee;
		}
	}

	return `${bestEmployee}:${Highest}`;
};

console.log(findBestEmployee(team));

//4

const countTotalSalary = employees => {
	let totalSalary = 0;

	for (const employee in employees) {
		totalSalary += employees[employee];
	}

	return totalSalary;
};

console.log(countTotalSalary(team));

//5
const users = [
	{ name: 'John', age: 50 },
	{ name: 'Jane', age: 25 },
	{ name: 'Bob', age: 10 },
];

const getAllPropValues = (arr, prop) => {
	const props = [];

	for (const obj of arr) {
		props.push(obj[prop]);
	}

	return props;
};

console.log(getAllPropValues(users, 'name'));

//6

const Products = [
	{ name: 'monitor', quantity: 3, price: 110 },
	{ name: 'TV', quantity: 12, price: 20 },
	{ name: 'PC', quantity: 52, price: 220 },
];

const calculateTotalPrice = (allProdcuts, productName) => {
	for (const product of allProdcuts) {
		if (product.name == productName) {
			return product.price * product.quantity;
		}
	}
};

console.log(calculateTotalPrice(Products, 'monitor'));

// 7
const account = {
	id: 17849287,
	userName: 'Bob',
	balance: 0,
};

const deposit = document.querySelector('.panel').querySelectorAll('button')[0];
const withdraw = document.querySelector('.panel').querySelectorAll('button')[1];
const balance = document.querySelector('.balance').querySelectorAll('h2')[1];
const history = document.querySelector('.history');

deposit.addEventListener('click', () => {
	let balancePromptDeposit = +prompt(
		'На яку сумму ви хочите поповнити рахунок?:'
	);

	account.balance += balancePromptDeposit;
	balance.innerHTML = account.balance;

	history.innerHTML += `<h2>+${balancePromptDeposit}</h2>`;
});

withdraw.addEventListener('click', () => {
	let balancePromptWithdraw = +prompt('яку сумму ви хочите вивести?:');

	if (account.balance <= 0 || account.balance < balancePromptWithdraw) {
		alert('Немає Грошей!');
		return false;
	}

	account.balance -= balancePromptWithdraw;
	balance.innerHTML = account.balance;

	history.innerHTML += `<h2>-${balancePromptWithdraw}</h2>`;
});

// деструктуризація об’єктів

const { hobby, premium, mood } = user;

const {
	John: employeeJohn,
	Jane: employeeJane,
	Bob: employeeBob,
	Alice: employeeAlice,
} = team;

const [JohnInfo, JaneInfo, BobInfo] = users;

const [monitor, tv, pc] = Products;

const { id, userName, balance: accountBalance } = account;
