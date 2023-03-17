const hamburger = document.querySelector('.navbar__hamburger');
const navmobile = document.querySelector('.navbar__links');

const handleNav = () => {
	navmobile.classList.toggle('navbar__links--active');
    console.log('test');
};

hamburger.addEventListener('click', handleNav);
