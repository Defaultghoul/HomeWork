const ul = document.querySelector('#ingredients');

const ingredients = [
	'Картопля',
	'Гриби',
	'Часник',
	'Помідори',
	'Зелень',
	'Приправи',
];

for (let i = 0; i < ingredients.length; i++) {
	const createLi = document.createElement('li');

	createLi.innerHTML = ingredients[i];
	ul.appendChild(createLi);
}
