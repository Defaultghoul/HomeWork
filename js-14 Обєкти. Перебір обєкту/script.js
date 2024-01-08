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
