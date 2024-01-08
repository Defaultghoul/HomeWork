// 1
const arr = ['Mango', 'Poly', 'Ajax'];
const logItems = function (array) {
	for (i = 0; array.length > i; i++) {
		console.log(`${i + 1} - ${array[i]}`);
	}
};

// 2
const calculateEngravingPrice = function (message, pricePerWord) {
	let newMessage = message.split(' ').length;

	return `Ціна: ${pricePerWord * +newMessage}`;
};


//3
let LongestWord = '';
const findLongestWord = function (string) {
	let newArray = string.split(' ');

	for (let i = 0; newArray.length > i; i++) {
		LongestWord = newArray[i];

		if (LongestWord.length < newArray[i]) {
			LongestWord = newArray[i];
		}
	}

	return LongestWord;
};

//4
const formatString = function (string) {
	if (string.length < 40) {
		return string;
	} else {
		return string.slice(0, 40) + '...';
	}
};

//5
const checkForSpam = function (message) {
	var newMessages = message.toLowerCase();
	if (newMessages.includes('spam' || 'sale')) {
		return true;
	} else {
		return false;
	}
};

//6
let numbers = [];

while (true) {
	let input = +prompt('введіть число:');
	numbers.push(input);

	if (input == 0) {
		break;
	}
}

let total = +'';
for (let i = 0; numbers.length > i; i++) {
	total += numbers[i];
}
