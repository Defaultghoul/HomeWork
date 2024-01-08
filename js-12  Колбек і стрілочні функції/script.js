const btn = document.querySelector('.btn');

btn.addEventListener('click', () => {
	alert('HelloWorld');
});

// 2
const inputValue = document.querySelector('#guessField');
const pText = document.querySelector('#guessResult');

const checkGuess = function () {
	let rndNumber = Math.floor(Math.random() * (100 - 1) + 1);

	if (rndNumber === +inputValue.value) {
		pText.innerHTML = 'Ви вгадали!';
	} else {
		pText.innerHTML = 'Ви не вгадали!';
	}
};

// task 3
let counter = 0;

document.addEventListener('click', () => {
	counter++;
	console.log(`Hа сторiнку натиснили ${counter}`);
});
//

// 4
const applyCallbackToArray = (arr, callback) => {
	const result = [];
	for (let i = 0; i < arr.length; i++) {
		result.push(callback(arr[i]));
	}
	return result;
};

const square = num => {
	return num * num;
};

const myArray = [1, 2, 3, 4, 5];

console.log(applyCallbackToArray(myArray, square));

// 5

const calculateDiscountPrice = (price, discount, callback) => {
	const newDiscount = price - (price / 100) * discount;
	showDiscountPrice(
		`Ціна: ${price}, Знижка: ${discount}, Ціна з знижкою: ${newDiscount}`
	);
};

const showDiscountPrice = string => {
	console.log(string);
};

calculateDiscountPrice(100, 10, showDiscountPrice);

