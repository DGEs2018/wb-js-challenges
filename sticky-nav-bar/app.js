const navbar = document.getElementById('main');
const navTop = navbar.offsetTop;

const fixNavBar = () => {
	// console.log(navTop, window.scrollY);
	if (window.scrollY >= navTop) {
		document.body.style.paddingTop = navbar.offsetHeight + 'px';
		document.body.classList.add('fixed-nav');
	} else {
		document.body.style.paddingTop = 0;
		document.body.classList.remove('fixed-nav');
	}
};

window.addEventListener('scroll', fixNavBar);
