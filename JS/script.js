document.addEventListener('DOMContentLoaded', function() {
    const menuButton = document.querySelector('.mobile-menu-button');
    const navList = document.querySelector('.nav-list-container');
    
    menuButton.addEventListener('click', function() {
        navList.classList.toggle('active');
        menuButton.classList.toggle('active');
    });
    
    const navLinks = document.querySelectorAll('.nav-container a');
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            navList.classList.remove('active');
            menuButton.classList.remove('active');
        });
    });
});


document.addEventListener("DOMContentLoaded", function() {
    const sections = document.querySelectorAll(".hidden");

    function fadeInOnScroll() {
        sections.forEach(section => {
            const sectionTop = section.getBoundingClientRect().top;
            const triggerPoint = window.innerHeight * 0.8;

            if (sectionTop < triggerPoint) {
                section.classList.add("show");
            }
        });
    }

    window.addEventListener("scroll", fadeInOnScroll);
    fadeInOnScroll(); 
});
