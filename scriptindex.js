const initSlider = () => {
    const imageList = document.querySelector(".slider-wrapper .image-list");
    const slideButtons = document.querySelectorAll(".slider-wrapper .slide-button");
    const sliderScrollbar = document.querySelector(".container .slider-scrollbar");
    const scrollbarThumb = sliderScrollbar.querySelector(".scrollbar-thumb");
    const maxScrollLeft = imageList.scrollWidth - imageList.clientWidth;

    const updateScrollThumbPosition = () => {
        const scrollPercentage = (imageList.scrollLeft / maxScrollLeft) * 100;
        const thumbPosition = (scrollPercentage / 100) * (sliderScrollbar.clientWidth - scrollbarThumb.offsetWidth);
        scrollbarThumb.style.left = `${thumbPosition}px`;
    };

    // Add event listener to update scrollbar thumb position on scroll
    imageList.addEventListener("scroll", updateScrollThumbPosition);

    // Slide images
    slideButtons.forEach((button) => {
        button.addEventListener("click", () => {
            const direction = button.id === "prev-slide" ? -1 : 1;
            const scrollAmount = imageList.clientWidth * direction;
            imageList.scrollBy({ left: scrollAmount, behavior: "smooth" });
        });
    });

    const handleSlideButtons = () => {
        slideButtons[0].style.display = imageList.scrollLeft <= 0 ? "none" : "block";
        slideButtons[1].style.display = imageList.scrollLeft >= maxScrollLeft ? "none" : "block";
    };

    handleSlideButtons(); // Initial setup
    updateScrollThumbPosition(); // Initial setup
};

// Initialize slider when the window is loaded
window.addEventListener("load", initSlider);

document.addEventListener("DOMContentLoaded", function () {
    const hamburgerMenu = document.querySelector(".hamburger-menu");
    const navigationMenu = document.querySelector("nav ul");

    if (hamburgerMenu && navigationMenu) {
        hamburgerMenu.addEventListener("click", function () {
            navigationMenu.classList.toggle("show");
        });
    } else {
        console.log("Hamburger menu or navigation menu not found. Script skipped.");
    }
});
