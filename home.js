let slideIndex = 0;

function showSlides() {
    let i;
    const slides = document.getElementsByClassName("mySlides");
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > slides.length) {
        slideIndex = 1;
    }
    slides[slideIndex - 1].style.display = "block";
    setTimeout(showSlides, 5000); // Change slide every 5 seconds
}

// Start the slideshow when the page loads
window.onload = function () {
    showSlides();
};

const carousel = document.querySelector('.custom-carousel');
const prevButton = document.querySelector('.prev-button');
const nextButton = document.querySelector('.next-button');

let currentIndex = 0;

nextButton.addEventListener('click', () => {
    if (currentIndex < 2) {
        currentIndex++;
    } else {
        currentIndex = 0; // Reset to the first slide
    }
    updateCarousel();
});

prevButton.addEventListener('click', () => {
    if (currentIndex > 0) {
        currentIndex--;
    } else {
        currentIndex = 2; // Jump to the last slide
    }
    updateCarousel();
});

function updateCarousel() {
    const translateValue = currentIndex * -33.33; // increase the translate value by multiplying with index. on first click +33.33%, on second click +66.33% 
    carousel.style.transform = `translateX(${translateValue}%)`;
}

const navbar = document.querySelector('.transparent-navbar');

// Function to add a class when scrolling down
function addScrollClass() {
    if (window.scrollY > 0) {
        navbar.classList.add('scroll-down');
    } else {
        navbar.classList.remove('scroll-down');
    }
}

// Add scroll event listener
window.addEventListener('scroll', addScrollClass);
