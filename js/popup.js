/*
const popupLinks = document.querySelectorAll('.popup-link');
const body = document.querySelectorAll('body');
const lockPadding = document.querySelectorAll(".lock-padding");

let unlock = true;

const timeout = 800;

if (popupLinks.length > 0) {
	for (let index = 0; index < popupLinks.length; index++) {
		const popupLink = popupLinks[index];
		popupLink.addEventListener("click", function (e) {
			const popupName = popupLink.getAttribute('href').replace('#', '');
			const curentPopup = document.getElementById(popupName);
			popupOpen(curentPopup);
			e.preventDefault();
		});
	}
}
const popupCloseIcon = document.querySelectorAll('.close-popup');
if (popupCloseIcon.length > 0) {
	for (let index = 0; index < popupCloseIcon.length; index++) {
		const element = popupCloseIcon[index];
		element.addEventListener('click', function (e) {
			popupClose(element.closest('.popup-open'));
			e.preventDefault();
		});
		
	}
}

function popupOpen(curentPopup) {
	if (curentPopup && unlock) {
		const popupActive = document.querySelector('.popup.popup-open');
		if (popupActive) {
			popupClose(popupActive, false);
		} else {
			bodyLock();
		}
		curentPopup.classList.add('popup-open');
		curentPopup.addEventListener("click", function (e) {
			if (!e.target.closest('.blog-post')) {
				popupClose(e.target.closest('.popup-open'));
			}
		});
	}
}

function bodyLock() {
	const lockPaddingValue = window.innerWidth - document.querySelector('.main-container').offsetWidth + 'px';

	for (let index = 0; index < lockPadding.length; index++) {
		const element = lockPadding[index];
		element.style.paddingRight = lockPaddingValue;
	}
	body.style.paddingRight = lockPaddingValue;
	body.classList.add('lock');

	unlock = false;
	setTimeout(function () {
		unlock = true;
	}, timeout);
}

function bodyUnLock() {
	setTimeout(function () {
		if (lockPadding.length > 0) {
			for (let index = 0; index < lockPadding.length; index++) {
				const element = lockPadding[index];
				element.style.paddingRight = '0px';
			}
		}
		body.style.paddingRight = '0px';
		body.classList.remove('lock');
	}, timeout);

	unlock = false;
	setTimeout(function () {
		unlock = true;
	}, timeout);
}

document.addEventListener('keydown', function (e) {
	if (e.which === 27) {
		const popupActive = document.querySelector('.popup.open');
		popupClose(popupActive);
	}
});

(function () {
	if (!Element.prototype.closest) {
		Element.prototype.closest = function (css) {
			var node = this;
			while (node) {
				if (node.matches(css)) return node;
				else node = node.parentElement;
			}
			return null;
		};
	}
})();
(function () {
	if (Element.prototype.matches) {
		Element.prototype.matches = Element.prototype.matchesSelector ||
			Element.prototype.webkitMatchesSelector ||
			Element.prototype.mozMatchesSelector ||
			Element.prototype.msMatchesSelector;
	}
})();
*/

/* Модальное окно */
let btnsPopup = document.querySelectorAll("*[data-modal-btn]");

for (let i = 0; i < btnsPopup.length; i++) {
	btnsPopup[i].addEventListener('click', function () {
		let name = btnsPopup[i].getAttribute('data-modal-btn');
		let modal = document.querySelector("[data-modal-window='" + name + "']");
		modal.style.display = "block";
		let close = modal.querySelector(".close-modal-window");
		close.addEventListener('click', function () {
			modal.style.display = "none";
		});
	});
};

window.onclick = function (event) {
	if (event.target.hasAttribute('data-modal-window')) {
		let modals = document.querySelectorAll('*[data-modal-window]');
		for (let i = 0; i < modals.length; i++) {
		modals[i].style.display = "none";
		}
	}
};