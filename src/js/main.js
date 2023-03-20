const hamburger = document.querySelector('.navbar__hamburger');
const navmobile = document.querySelector('.navbar__links');

const footerYear = document.querySelector('.footer__year');

const handleNav = () => {
	navmobile.classList.toggle('navbar__links--active');
    console.log('test');
};



const handleCurrentYear = () => {
    const year = new Date().getFullYear();
	footerYear.innerText = year;
};

handleCurrentYear();
hamburger.addEventListener('click', handleNav);