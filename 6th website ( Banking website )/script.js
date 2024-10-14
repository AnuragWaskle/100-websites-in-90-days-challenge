const burger = document.querySelector('.burger');
const navLinks = document.querySelector('.nav-links');
const links = document.querySelectorAll('.nav-links a'); // Select all links in the navigation

// Toggle mobile navigation visibility on burger click
burger.addEventListener('click', () => {
    navLinks.classList.toggle('mobile-visible');
});

// Close the mobile navigation when any link is clicked
links.forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('mobile-visible'); // Remove the 'mobile-visible' class
    });
});

document.querySelector('.newsletter-form').addEventListener('submit', function(event) {
    event.preventDefault();
    alert('Subscribed successfully!');
});
