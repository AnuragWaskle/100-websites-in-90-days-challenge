function openModal(imageSrc) {
    const modal = document.getElementById("modal");
    const modalImg = document.getElementById("modal-img");

    modalImg.src = imageSrc; // Set the source of the modal image
    modalImg.alt = "Certificate Image"; // Add alt text for accessibility

    modal.style.display = "flex"; // Set display to flex to show modal
    setTimeout(() => {
        modal.classList.add('show'); // Add 'show' class to trigger animations
    }, 10); // Short delay to ensure display change takes effect before animation
}

function closeModal(event) {
    event.stopPropagation(); // Prevent triggering closeModal on modal click

    const modal = document.getElementById("modal");

    modal.classList.remove('show'); // Remove 'show' class to start close animation
    setTimeout(() => {
        modal.style.display = "none"; // Hide modal completely after animation ends
    }, 500); // Wait for the animation to finish (0.5s)
}
