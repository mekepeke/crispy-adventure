const initSlider = () => {
    const imageList = document.querySelector(".slider-wrapper .image-list");
    const slideButtons = document.querySelectorAll(".slider-wrapper .slide-button");
    const sliderScrollbar = document.querySelector(".container .slider-scrollbar");
    const scrollbarThumb = sliderScrollbar.querySelector(".scrollbar-thumb");
    const maxScrollLeft = imageList.scrollWidth - imageList.clientWidth;

    let isDragging = false;
    let startX;
    let scrollLeft;

    const startDrag = (e) => {
        isDragging = true;
        startX = e.pageX - scrollbarThumb.offsetLeft;
        scrollLeft = imageList.scrollLeft;
    };

    const endDrag = () => {
        isDragging = false;
    };

    const drag = (e) => {
        if (!isDragging) return;
        e.preventDefault();
        const x = e.pageX - scrollbarThumb.offsetWidth / 2;
        const walk = (x - startX) * 2; // Adjust multiplier as needed
        imageList.scrollLeft = scrollLeft + walk;
    };

    scrollbarThumb.addEventListener("mousedown", startDrag);
    document.addEventListener("mouseup", endDrag);
    document.addEventListener("mousemove", drag);

    const updateScrollThumbPosition = () => {
        const scrollPercentage = (imageList.scrollLeft / maxScrollLeft) * 100;
        const thumbPosition = (scrollPercentage / 100) * (sliderScrollbar.clientWidth - scrollbarThumb.offsetWidth);
        scrollbarThumb.style.left = `${thumbPosition}px`;
    };

    imageList.addEventListener("scroll", updateScrollThumbPosition);

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

    handleSlideButtons();
    updateScrollThumbPosition();
};

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
