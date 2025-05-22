import { animateCounters, initParallax, initScrollAnimations } from '../js/animations.js';
import { initSmoothScroll, initMobileMenu, initHeaderScroll } from '../js/navigation.js';

// Initialize all functions when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    animateCounters();
    initSmoothScroll();
    initParallax();
    initScrollAnimations();
    initMobileMenu();
    initHeaderScroll();
});

// Loading Animation
window.addEventListener('load', () => {
    document.body.classList.add('animate-fade-in');
}); 