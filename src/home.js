// Fade-in and slide animation for text
document.addEventListener("DOMContentLoaded", function () {
    document.getElementById('welcome-title').classList.add('welcome-animate');
    setTimeout(() => {
        document.getElementById('welcome-text').classList.add('welcome-animate');
    }, 500);

    // Fade-in images one after the other
    const images = document.querySelectorAll('.fade-image');
    images.forEach((img, index) => {
        setTimeout(() => {
            img.classList.add('show');
        }, 800 * (index + 1)); // staggered effect
    });
});

