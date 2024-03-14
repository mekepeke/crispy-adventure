
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
});

