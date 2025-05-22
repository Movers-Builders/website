// Smooth Scroll
export function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
                // Close mobile menu if open
                const mobileMenu = document.getElementById('mobile-menu');
                if (mobileMenu.classList.contains('block')) {
                    mobileMenu.classList.remove('block');
                    mobileMenu.classList.add('hidden');
                }
            }
        });
    });
}

// Mobile Menu
export function initMobileMenu() {
    const menuButton = document.querySelector('[aria-label="Toggle mobile menu"]');
    const mobileMenu = document.getElementById('mobile-menu');
    
    menuButton.addEventListener('click', () => {
        const isExpanded = menuButton.getAttribute('aria-expanded') === 'true';
        menuButton.setAttribute('aria-expanded', !isExpanded);
        
        mobileMenu.classList.toggle('hidden');
        
        // Update menu button icon
        const icon = menuButton.querySelector('svg');
        if (!isExpanded) {
            icon.innerHTML = `
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
            `;
        } else {
            icon.innerHTML = `
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>
            `;
        }
    });
}

// Header Scroll
export function initHeaderScroll() {
    const header = document.querySelector('header');
    let lastScroll = 0;
    
    window.addEventListener('scroll', () => {
        const currentScroll = window.pageYOffset;
        
        if (currentScroll <= 0) {
            header.classList.remove('shadow-lg');
            return;
        }
        
        if (currentScroll > lastScroll && currentScroll > 100) {
            // Scrolling down & past header
            header.classList.add('transform', '-translate-y-full', 'transition-transform', 'duration-300');
            header.classList.remove('shadow-lg');
        } else {
            // Scrolling up
            header.classList.remove('transform', '-translate-y-full');
            header.classList.add('shadow-lg', 'transition-transform', 'duration-300');
        }
        
        lastScroll = currentScroll;
    });
} 