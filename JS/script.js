document.addEventListener('DOMContentLoaded', function() {
    const menuButton = document.querySelector('.mobile-menu-button');
    const navList = document.querySelector('.nav-list-container');
    
    menuButton.addEventListener('click', function() {
        navList.classList.toggle('active');
        menuButton.classList.toggle('active');
    });
    
    // Close menu when a nav link is clicked
    const navLinks = document.querySelectorAll('.nav-container a');
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            navList.classList.remove('active');
            menuButton.classList.remove('active');
        });
    });
});