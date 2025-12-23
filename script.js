/**
 * Nils Taranger | Presence Guide
 * Interactive JavaScript
 */

// ===================================
// SMOOTH PARALLAX FOR ORBS
// ===================================
let mouseX = 0;
let mouseY = 0;
let currentX = 0;
let currentY = 0;

// Track mouse position
document.addEventListener('mousemove', (e) => {
  mouseX = e.clientX / window.innerWidth - 0.5;
  mouseY = e.clientY / window.innerHeight - 0.5;
});

// Smooth parallax effect
function updateParallax() {
  currentX += (mouseX - currentX) * 0.03;
  currentY += (mouseY - currentY) * 0.03;

  const orbs = document.querySelectorAll('.orb');
  orbs.forEach((orb, index) => {
    const speed = (index + 1) * 8;
    const x = currentX * speed;
    const y = currentY * speed;
    orb.style.transform = `translate(${x}px, ${y}px)`;
  });

  requestAnimationFrame(updateParallax);
}

updateParallax();

// ===================================
// INTERSECTION OBSERVER
// ===================================
const observerOptions = {
  threshold: 0.1,
  rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = '1';
      entry.target.style.transform = 'translateY(0)';
    }
  });
}, observerOptions);

// Observe hero elements
document.addEventListener('DOMContentLoaded', () => {
  const heroElements = document.querySelectorAll('.hero > *');
  heroElements.forEach(el => observer.observe(el));
});

// ===================================
// BUTTON HOVER EFFECT
// ===================================
const inquireButton = document.querySelector('.inquire-button');

if (inquireButton) {
  inquireButton.addEventListener('mouseenter', function () {
    this.style.color = '#000000';
  });

  inquireButton.addEventListener('mouseleave', function () {
    this.style.color = '#c9a961';
  });
}

// ===================================
// PROFILE IMAGE SUBTLE HOVER
// ===================================
const profileImage = document.querySelector('.profile-image');

if (profileImage) {
  profileImage.addEventListener('mouseenter', () => {
    profileImage.style.transform = 'scale(1.02)';
  });

  profileImage.addEventListener('mouseleave', () => {
    profileImage.style.transform = 'scale(1)';
  });
}

// ===================================
// PERFORMANCE OPTIMIZATION
// ===================================
// Reduce motion for users who prefer it
if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
  document.querySelectorAll('.orb').forEach(el => {
    el.style.animation = 'none';
  });
}

// ===================================
// PAGE LOAD ANIMATION
// ===================================
window.addEventListener('load', () => {
  document.body.style.opacity = '1';

  // Stagger animation for hero elements
  const heroElements = document.querySelectorAll('.hero > *, .profile-container');
  heroElements.forEach((el, index) => {
    setTimeout(() => {
      el.style.opacity = '1';
      el.style.transform = 'translateY(0)';
    }, index * 150);
  });
});

// ===================================
// CONSOLE SIGNATURE
// ===================================
console.log('%c✨ Nils Taranger | Presence Guide', 'font-size: 16px; font-weight: bold; color: #c9a961;');
console.log('%cGrounding into presence through supported silence', 'font-size: 12px; font-style: italic; color: #999999;');
