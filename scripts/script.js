// Obtém a navbar
const navbar = document.querySelector('.navbar');
const navlink = document.querySelectorAll('.nav-links');

// Função para verificar o scroll
window.addEventListener('scroll', () => {
    if (window.scrollY > 1) {  
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});


links.forEach(link => {
    link.addEventListener('click', () => {
        navbar.classList.add('active');
    })
});

