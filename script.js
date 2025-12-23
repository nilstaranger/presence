document.addEventListener('DOMContentLoaded', () => {
    // Subtle parallax or cursor following could go here
    // For now, keeping it extremely lightweight for "Quiet Luxury"
    
    const wrapper = document.querySelector('.content-wrapper');
    
    document.addEventListener('mousemove', (e) => {
        const x = (e.clientX / window.innerWidth - 0.5) * 10;
        const y = (e.clientY / window.innerHeight - 0.5) * 10;
        
        wrapper.style.transform = `translate(${x}px, ${y}px)`;
        wrapper.style.transition = 'transform 0.5s ease-out';
    });
});
