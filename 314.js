// let elem = document.querySelector('#elem');

// elem.addEventListener('click', function() {
// let a = this
// 	setInterval(function() {
// 		a.value = Number(elem.value) + 1; // ошибка потмоу что this был во внутренней функции
// 	}, 1000);
// });

// let elem = document.querySelector('#elem');

// elem.addEventListener('click', function() {
// let a = this
// 	setInterval(() => a.value = Number(elem.value) + 1, 1000); // ошибка потмоу что this был во внутренней функции
// 	;
// });

let elem = document.querySelector('#elem');

elem.addEventListener('click', function() {
	setInterval((function(self) {
		return function() {
			console.log(self.value);
		}
	})(this), 1000);
});