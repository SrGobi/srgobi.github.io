// Ver Menu
const showMenu = (toggleId, navId) =>{
  const toggle = document.getElementById(toggleId),
  nav = document.getElementById(navId)

  if(toggle && nav){
      toggle.addEventListener('click', ()=>{
          nav.classList.toggle('show')
      })
  }
}
showMenu('nav-toggle','nav-menu')

// Activar y ocultar menu
const navLink = document.querySelectorAll('.nav-link');   

function linkAction(){
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
  distance: '80px',
  duration: 2000,
  reset: true
});

// Animacion Home
sr.reveal('.home-title',{}); 
sr.reveal('.button',{delay: 200}); 
sr.reveal('.img-bloque',{delay: 400}); 

// Animacion About
sr.reveal('.about-img',{}); 
sr.reveal('.about-subtitle',{delay: 400}); 
sr.reveal('.about__text',{delay: 400}); 

// Animacion Skills
sr.reveal('.skills-subtitle',{}); 
sr.reveal('.skills-text',{}); 
sr.reveal('.skills-data',{interval: 200}); 
sr.reveal('.skills-img',{delay: 600});

// Animacion Proyectos
sr.reveal('.proyect-img',{interval: 200}); 