// Select all service cards
const serviceCards = document.querySelectorAll('.service-card');

// Add mouse enter and leave event listeners
serviceCards.forEach(card => {
    card.addEventListener('mouseenter', () => {
        card.classList.add('active');
    });

    card.addEventListener('mouseleave', () => {
        card.classList.remove('active');
    });
});

// Add hover effect for button
const btn = document.querySelector('.btn');


btn.addEventListener('mouseover', function() {
    this.style.backgroundColor = '#555';
});

btn.addEventListener('mouseout', function() {
    this.style.backgroundColor = '#333';
});

document.getElementById('subscribe-btn').addEventListener('click', function() {
    const emailInput = document.getElementById('email-input').value;
    if (emailInput) {
        alert(`Subscribed with: ${emailInput}`);
    } else {
        alert('Please enter an email address.');
    }
});
