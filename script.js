document.addEventListener('DOMContentLoaded', () => {

    // Subtle Parallax Effect on Scroll
    window.addEventListener('scroll', () => {
        const scrolled = window.pageYOffset;
        const image = document.querySelector('.hero-image');
        const text = document.querySelector('.hero-text');

        // Very subtle movement for "heavy/expensive" feel
        if (image) {
            image.style.transform = `translateY(${scrolled * 0.1}px) scale(1)`;
        }
    });

});
