const hamburger = document.querySelector('.navbar__hamburger');
const navmobile = document.querySelector('.navbar__links');
const navbar = document.querySelector('.navbar');
const footerYear = document.querySelector('.footer__year');
const allNavItems = document.querySelectorAll('.navbar__links-link');

const handleNav = () => {
	navmobile.classList.toggle('navbar__links--active');
	document.body.classList.toggle('sticky-body');
	allNavItems.forEach((item) => {
		item.addEventListener('click', () => {
			navmobile.classList.remove('navbar__links--active');
		});
	});
};

const handleCurrentYear = () => {
	const year = new Date().getFullYear();
	footerYear.innerText = year;
};

const handleNavBgc = () => {
	navbar.classList.toggle('navbar--active', window.scrollY > 0);
};

handleCurrentYear();
hamburger.addEventListener('click', handleNav);
window.addEventListener('scroll', handleNavBgc);
