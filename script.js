let slideIndex = 0;
showSlides();

function showSlides() {
    let slides = document.getElementsByClassName("slide");
    let dots = document.getElementsByClassName("dot");
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  
    }
    slideIndex++;
    if (slideIndex > slides.length) {
        slideIndex = 1
    }    
    for (let i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex-1].style.display = "block";  
    dots[slideIndex-1].className += " active";
    setTimeout(showSlides, 4000); // Change image every 3 seconds
}

function currentSlide(n) {
    slideIndex = n;
    showSlides();
}


document.addEventListener('DOMContentLoaded', () => {
    const carousel = document.getElementById('carousel');
    const scrollLeftButton = document.getElementById('scroll-left');
    const scrollRightButton = document.getElementById('scroll-right');

    scrollLeftButton.addEventListener('click', () => {
        carousel.scrollBy({
            left: -carousel.clientWidth,
            behavior: 'smooth'
        });
    });

    scrollRightButton.addEventListener('click', () => {
        carousel.scrollBy({
            left: carousel.clientWidth,
            behavior: 'smooth'
        });
    });
});