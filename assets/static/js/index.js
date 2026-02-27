window.HELP_IMPROVE_VIDEOJS = false;


$(document).ready(function() {
    // Check for click events on the navbar burger icon

    var options = {
			slidesToScroll: 1,
			slidesToShow: 1,
			loop: true,
			infinite: true,
			autoplay: true,
			autoplaySpeed: 1000000,
    }

		// Initialize all div with carousel class
    var carousels = bulmaCarousel.attach('.carousel', options);
	
    bulmaSlider.attach();

})

// GardenDesigner Carousel Functionality
let currentSlideIndex = 0;
let slides, indicators;

function initializeGardenCarousel() {
    slides = document.querySelectorAll('.slide');
    indicators = document.querySelectorAll('.slide-indicator');
    
    if (slides.length > 0) {
        showSlide(0);
    }
}

function showSlide(index) {
    if (!slides || !indicators) return;
    
    // Hide all slides
    slides.forEach(slide => {
        slide.style.display = 'none';
        slide.classList.remove('active');
    });
    
    // Remove active class from indicators
    indicators.forEach(indicator => {
        indicator.classList.remove('active');
    });
    
    // Show current slide
    if (slides[index]) {
        slides[index].style.display = 'block';
        slides[index].classList.add('active');
    }
    
    // Add active class to current indicator
    if (indicators[index]) {
        indicators[index].classList.add('active');
    }
    
    currentSlideIndex = index;
}

function nextSlide() {
    if (!slides) return;
    const nextIndex = (currentSlideIndex + 1) % slides.length;
    showSlide(nextIndex);
}

function previousSlide() {
    if (!slides) return;
    const prevIndex = (currentSlideIndex - 1 + slides.length) % slides.length;
    showSlide(prevIndex);
}

function currentSlide(index) {
    showSlide(index - 1);
}

// Initialize the carousel when DOM is ready
$(document).ready(function() {
    initializeGardenCarousel();
});

