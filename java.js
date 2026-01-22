
window.addEventListener('scroll', () => {
document.querySelector('.header').style.background =
window.scrollY > 50 ? 'rgba(0,0,0,0.85)' : 'rgba(0,0,0,0.6)';
});