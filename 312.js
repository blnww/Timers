// let start = document.querySelector('#start');
// let stop  = document.querySelector('#stop');
// let timerId; // сделаем переменную глобальной

// start.addEventListener('click', function() {
// 	let i = 100;
	
// 	timerId = setInterval(function() {
// 		console.log(i--)
//         if (i<=0) {
//             clearInterval (timerId)
//         }
// 	}, 10);


// });

// stop.addEventListener('click', function() {
// 	clearInterval(timerId);

    
// });

// let start = document.querySelector('#start');
// let stop  = document.querySelector('#stop');

// start.addEventListener('click', function() {
// 	timerId = setInterval(function() {
// 		let date = new Date();
// 		console.log(date.getMinutes() + ' ' + date.getSeconds());
// 	}, 1000);
// });

// stop.addEventListener('click', function() {
// 	clearInterval(timerId);
// });


// let start = document.querySelector('#start');
// let stop  = document.querySelector('#stop');

// start.addEventListener('click', function() {
// 	timerId = setInterval(function() {
// 		let date = new Date;
// 		console.log(date.getMinutes() + ' ' + date.getSeconds());
// 	}, 1000);
// });

// stop.addEventListener('click', function() {
// 	clearInterval(timerId);
// });

// let start = document.querySelector('#start');
// let stop  = document.querySelector('#stop');

// start.addEventListener('click', function() {
// 	timerId = setInterval(function() {
// 		let date = new Date;
// 		console.log(date.getMinutes() + ' ' + date.getSeconds());
// 	}, 1000);
// });

// stop.addEventListener('click', function() {
// 	clearInterval(timerId);
// });


let start = document.querySelector('#start');
let stop  = document.querySelector('#stop');

start.addEventListener('click', function func() {
	timerId = setInterval(function func() {
		let date = new Date;
		console.log(date.getMinutes() + ' ' + date.getSeconds());
	}, 1000);
    start.removeEventListener('click', func)
});

stop.addEventListener('click', function func() {
	clearInterval(timerId);
    stop.removeEventListener('click', func)
});