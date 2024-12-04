// script.js
document.addEventListener('DOMContentLoaded', () => {
    const navLinks = document.querySelectorAll('header nav ul li a');
  
    // Animar enlaces del menú al hacer clic
    navLinks.forEach(link => {
      link.addEventListener('click', (e) => {
        e.preventDefault();
        document.querySelector(e.target.getAttribute('href')).scrollIntoView({
          behavior: 'smooth'
        });
      });
    });
  
    // Efecto al pasar el cursor sobre los artículos
    const articles = document.querySelectorAll('section');
    articles.forEach(article => {
      article.addEventListener('mouseover', () => {
        article.style.transform = 'scale(1.02)';
        article.style.transition = 'transform 0.3s ease';
      });
      article.addEventListener('mouseout', () => {
        article.style.transform = 'scale(1)';
      });
    });
  });
// JavaScript para toggle del menú en dispositivos móviles
const toggleButton = document.getElementById('toggle-menu');
const navbarMenu = document.getElementById('navbar-menu');

toggleButton.addEventListener('click', () => {
  navbarMenu.classList.toggle('active');
});
document.addEventListener('DOMContentLoaded', () => {
    const navLinks = document.querySelectorAll('.nav-link');

    // Smooth scroll for nav links
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            document.querySelector(e.target.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Navbar toggle for mobile view
    const toggleButton = document.getElementById('toggle-menu');
    const navbarMenu = document.getElementById('navbar-menu');

    toggleButton.addEventListener('click', () => {
        navbarMenu.classList.toggle('active');
    });
});