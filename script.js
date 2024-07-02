document.addEventListener('DOMContentLoaded', function() {
    const hamburgerMenu = document.querySelector('.hamburger-menu');
    const navigationMenu = document.querySelector('nav ul');
    
    if (hamburgerMenu && navigationMenu) {
        hamburgerMenu.addEventListener('click', function() {
            navigationMenu.classList.toggle('show');
        });
    } else {
        console.log("Hamburger menu or navigation menu not found. Script skipped.");
    }
    
    let slideIndex = 0; // Start with 0 to show the first slide automatically
    let slides = document.getElementsByClassName("mySlides");
    let dots = document.getElementsByClassName("dot");
    let slideTimeout; // Variable to hold the timeout ID
    
    showSlides();
    
    function showSlides() {
        for (let i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";
            dots[i].classList.remove("active");
        }
        slideIndex++;
        if (slideIndex > slides.length) { slideIndex = 1 }
        slides[slideIndex - 1].style.display = "block";
        dots[slideIndex - 1].classList.add("active");
        
        // Clear the previous timeout
        clearTimeout(slideTimeout);
        
        // Set a new timeout to automatically advance the slideshow
        slideTimeout = setTimeout(showSlides, 5000); // Adjust the delay (in milliseconds) as needed
    }
    
    // Function to move to the next slide manually
    function nextSlide() {
        // Clear the previous timeout
        clearTimeout(slideTimeout);
        
        // Move to the next slide
        slideIndex++;
        if (slideIndex > slides.length) { slideIndex = 1 }
        
        // Display the next slide
        for (let i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";
            dots[i].classList.remove("active");
        }
        slides[slideIndex - 1].style.display = "block";
        dots[slideIndex - 1].classList.add("active");
        
        // Set a new timeout to resume automatic slideshow after delay
        slideTimeout = setTimeout(showSlides, 5000); // Adjust the delay (in milliseconds) as needed
    }
    
    // Function to move to the previous slide manually
    function previousSlide() {
        // Clear the previous timeout
        clearTimeout(slideTimeout);
        
        // Move to the previous slide
        slideIndex--;
        if (slideIndex < 1) { slideIndex = slides.length }
        
        // Display the previous slide
        for (let i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";
            dots[i].classList.remove("active");
        }
        slides[slideIndex - 1].style.display = "block";
        dots[slideIndex - 1].classList.add("active");
        
        // Set a new timeout to resume automatic slideshow after delay
        slideTimeout = setTimeout(showSlides, 5000); // Adjust the delay (in milliseconds) as needed
    }
    
    // Function to navigate directly to a specific slide
    function currentSlide(n) {
        // Clear the previous timeout
        clearTimeout(slideTimeout);
        
        // Update slideIndex to the selected slide
        slideIndex = n;
        
        // Display the selected slide
        for (let i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";
            dots[i].classList.remove("active");
        }
        slides[slideIndex - 1].style.display = "block";
        dots[slideIndex - 1].classList.add("active");
        
        // Set a new timeout to resume automatic slideshow after delay
        slideTimeout = setTimeout(showSlides, 5000); // Adjust the delay (in milliseconds) as needed
    }
    
    // Event listeners for next and previous slide buttons
    const nextButton = document.querySelector(".next");
    const prevButton = document.querySelector(".prev");
    
    if (nextButton && prevButton) {
        nextButton.addEventListener("click", nextSlide);
        prevButton.addEventListener("click", previousSlide);
    } else {
        console.log("Next or previous button not found. Event listeners not added.");
    }
});
