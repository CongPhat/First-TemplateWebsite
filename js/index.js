//--------------------------MenuOpen--------------------//
let hamburger = document.querySelector('.hamburger');
let menu = document.querySelector('.menu');

function MenuOpen(){
	menu.classList.toggle('menu--visible');
	if(window.innerWidth <= 1024){
		menu.classList.toggle('menu--hide');
	}
}

hamburger.addEventListener('click', MenuOpen);