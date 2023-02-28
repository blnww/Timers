// let start = document.querySelector('#start');

// start.addEventListener('click', function() {
// 	let i = 100;
	
// 	setInterval(function() {
// 		console.log(i--);
// 	}, 1000);

    
// });

let start = document.querySelector('#start');

start.addEventListener('click', function func() {
	let i = 100;
	
	setInterval(function func() {
		console.log(i--);
	}, 100);

    this.removeEventListener('click', func);
});