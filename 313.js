// let elem = document.querySelector('#elem');

// setInterval(function() {
    
// 	elem.value = Number(elem.value) - 1;
// }, 1000);

let elem = document.querySelector('#elem');

a = setInterval(function() {
    
	elem.value = Number(elem.value) - 1;
    if (elem.value <=0) {
        clearInterval (a)
    }
}, 1000);