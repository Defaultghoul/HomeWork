let counter = 0;

let counterValue = document.querySelector('#counter #value');

let btnAdd = document.querySelectorAll('#counter button')[1];
let btnSubtract = document.querySelectorAll('#counter button')[0];

btnAdd.addEventListener('click', () => {
	counter += 1;
	counterValue.innerHTML = counter;
});

btnSubtract.addEventListener('click', () => {
	counter -= 1;
	counterValue.innerHTML = counter;
});
