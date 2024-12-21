const slider = document.querySelector('.slider');
const prevBtn = document.querySelector('.slider-btn.prev');
const nextBtn = document.querySelector('.slider-btn.next');
let offset = 0;
const boxWidth = 300 + 20; 
const totalBoxes = 6;

function moveSlider(direction) {
    if (direction === 'next') {
        offset -= boxWidth;
        if (Math.abs(offset) >= boxWidth * totalBoxes) {
            offset = 0; 
        }
    } else {
        offset += boxWidth;
        if (offset > 0) {
            offset = -boxWidth * (totalBoxes - 1); 
        }
    }
    slider.style.transform = `translateX(${offset}px)`;
}

nextBtn.addEventListener('click', () => moveSlider('next'));
prevBtn.addEventListener('click', () => moveSlider('prev'));


setInterval(() => moveSlider('next'), 3000);
