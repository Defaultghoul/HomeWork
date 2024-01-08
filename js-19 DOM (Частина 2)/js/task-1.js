const list = document.querySelectorAll('#categories .item');

console.log(`У списку ${list.length} категорії.`);

for (let i = 0; i < list.length; i++) {
	console.log(
		`Категорія: ${list[i].querySelector('h2').textContent}
	Кількість елементів: ${list[i].querySelectorAll('ul li').length}`
	);
}
