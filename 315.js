
let elem = document.querySelector('#elem');

elem.addEventListener('click', function() {
	setInterval(function(a) {
		a.value--;
	}, 1000, this);
    
});