let i = 10
let timerId = setInterval(function() {

    if (i <= 0) {
		clearInterval(timerId);
    }
    console.log(i--)
}, 1000);
