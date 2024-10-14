const hamburger = document.getElementById('hamburger');
const navLinks = document.querySelector('.nav-links');
const navLinkItems = document.querySelectorAll('.nav-links a');
const closeButton = document.getElementById('close-btn');

// Toggle the menu when the hamburger icon is clicked
hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('open');
});

// Close the menu when a nav link is clicked
navLinkItems.forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('open');
    });
});

// Close the menu when the close button is clicked
closeButton.addEventListener('click', () => {
    navLinks.classList.remove('open');
});
