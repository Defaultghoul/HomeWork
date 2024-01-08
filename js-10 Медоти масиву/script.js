// 1

const friends = ['Mango', 'Poly', 'Kiwi', 'Ajax'];
let friendsNew = '';

for (let i = 0; friends.length > i; i++) {
	friendsNew += `${friends[i]},`;
}

console.log(friendsNew);

friendsNew = friends.join(',');

console.log(friendsNew);

// 2

const cards = [
	'Карточка-1',
	'Карточка-2',
	'Карточка-3',
	'Карточка-4',
	'Карточка-5',
];

// 3

const cardToRemove = cards.indexOf('Карточка-3');

cards.splice(cardToRemove, 1);

// 4

cards.push('Карточка-6');

// 5

const cardToUpdate = cards.indexOf('Карточка-4');
cards[cardToUpdate] = '-_-';
