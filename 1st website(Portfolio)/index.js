// Selecting the button and icon
const themeToggleBtn = document.getElementById('theme-toggle');
const themeIcon = document.getElementById('theme-icon');

// Check for saved theme in localStorage
const currentTheme = localStorage.getItem('theme');
if (currentTheme === 'dark') {
  document.body.classList.add('dark-theme');
  themeIcon.classList.remove('fa-moon');
  themeIcon.classList.add('fa-sun');
}

// Theme toggle function
themeToggleBtn.addEventListener('click', () => {
  document.body.classList.toggle('dark-theme');

  // Change the icon and save theme to localStorage
  if (document.body.classList.contains('dark-theme')) {
    themeIcon.classList.remove('fa-moon');
    themeIcon.classList.add('fa-sun');
    localStorage.setItem('theme', 'dark');
  } else {
    themeIcon.classList.remove('fa-sun');
    themeIcon.classList.add('fa-moon');
    localStorage.setItem('theme', 'light');
  }
});
function openModal(imageSrc) {
  const modal = document.getElementById("modal");
  const modalImg = document.getElementById("modal-img");
  modal.style.display = "flex"; // Set modal display to flex to center content
  modalImg.src = imageSrc; // Set the source of the modal image
  modalImg.alt = "Certificate Image"; // Add alt text for accessibility
}

function closeModal(event) {
  event.stopPropagation(); // Prevent triggering closeModal on modal click
  const modal = document.getElementById("modal");
  modal.style.display = "none"; // Hide modal
}
