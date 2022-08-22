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
	distance: '600px',
	duration: 1000,
	reset: true
});

// Animacion Home
sr.reveal('.home-title', {});
sr.reveal('.button', {});
sr.reveal('.img-bloque', {});

// Animacion About
sr.reveal('.about-img', {});
sr.reveal('.about-subtitle', {});
sr.reveal('.about__text', {});

// Animacion Skills
sr.reveal('.skills-subtitle', {});
sr.reveal('.skills-text', {});
sr.reveal('.skills-data', {});
sr.reveal('.skills-img', {});

// Animacion Proyectos
sr.reveal('.proyect-img', {});