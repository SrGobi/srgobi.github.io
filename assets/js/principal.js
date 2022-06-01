// Ver Menu
const showMenu = (toggleId, navId) => {
	const toggle = document.getElementById(toggleId),
		nav = document.getElementById(navId)

	if (toggle && nav) {
		toggle.addEventListener('click', () => {
			nav.classList.toggle('show')
		})
	}
}
showMenu('nav-toggle', 'nav-menu')

// Activar y ocultar menu
const navLink = document.querySelectorAll('.nav-link');
document.getElementById("CurrentYear").innerHTML = new Date().getFullYear();

function linkAction() {
	// Activar link
	navLink.forEach(n => n.classList.remove('active'));
	this.classList.add('active');

	// Remover menu modo movil
	const navMenu = document.getElementById('nav-menu')
	navMenu.classList.remove('show')
}
navLink.forEach(n => n.addEventListener('click', linkAction));

// Animacion revelacion barra
const sr = ScrollReveal({
	origin: 'top',
	distance: '300px',
	duration: 1000,
	reset: true
});

// Animacion Home
sr.reveal('.home-title', {});
sr.reveal('.button', { delay: 100 });
sr.reveal('.img-bloque', { delay: 200 });

// Animacion About
sr.reveal('.about-img', {});
sr.reveal('.about-subtitle', { delay: 200 });
sr.reveal('.about__text', { delay: 200 });

// Animacion Skills
sr.reveal('.skills-subtitle', {});
sr.reveal('.skills-text', {});
sr.reveal('.skills-data', { interval: 100 });
sr.reveal('.skills-img', { delay: 300 });

// Animacion Proyectos
sr.reveal('.proyect-img', { interval: 100 });