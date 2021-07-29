$(document).ready(function () {
	$('.header-burger').click(function (event) {
		$('.header-burger, .header-menu').toggleClass('active');
		$('body').toggleClass('lock');
	});
});

$(document).ready(function () {
	$('.search').click(function (event) {
		$('.header-flex-bar').toggleClass('visually-button');
	});
});

//Поиск всех кнопок с классом btn
let btns = document.querySelectorAll('.btn');
//Цикл по всем кнопкам
for (btn of btns) {
  	//Обработка события клика для каждой кнопки
	btn.addEventListener('click', function() {
		//Поиск родителя у текущей кнопки с классом card
		let card = this.closest('.card')
		//Поиск Точек у родителя (класс dots)
		let dots = card.querySelector('.dots');
		//Поиск Текста у родителя (класс more)
		let more = card.querySelector('.more');
		//Если точек нет то скрыть текст и показхать точки
		if(dots.style.display === 'none') {
		dots.style.display = 'block';
		more.style.display = 'none';
		this.textContent = 'Подробнее';
		} else {
		//Иначе показать текст и скрыть точки
		dots.style.display = 'none';
		more.style.display = 'block';
		this.textContent = 'Скрыть';
		}
	});
};


function theme() {
	// const check = document.getElementsByClassName('.active-check');
	const toggleTeme = document.querySelector('.active-light')
	let el = document.documentElement
	
	toggleTeme.addEventListener('click', () => {
		if(el.hasAttribute('class')) {
			el.removeAttribute('class')
			localStorage.removeItem('theme')
		} else {
			el.setAttribute('class', 'light')
			localStorage.setItem('theme', 'light')
		}
	});

	// check.addEventListener('change', () => {
	// 	document.html.classList.toggle('light');
	// });

	if(localStorage.getItem('theme') !== null) {
		el.setAttribute('theme', 'light')
	}
}

theme();

/*
function smr() {
	const toggleTemer = document.querySelector('.active-light')
	let elt = document.documentElement
	
	toggleTemer.addEventListener('click', () => {
		if(elr.hasAttribute('class')) {
			elr.removeAttribute('class')
			localStorage.removeItem('smr')
		} else {
			elr.setAttribute('class', 'fa-toggle-off')
			localStorage.setItem('smr', 'fa-toggle-off')
		}
	})

	if(localStorage.getItem('smr') !== null) {
		elr.setAttribute('smr', 'fa-toggle-off')
	}
}

smr();
*/