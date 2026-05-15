// Initialize page
document.body.style.transition = 'opacity 0.3s ease';
const navUl = document.querySelector('nav ul');

// Enhanced mobile menu functionality
document.addEventListener('DOMContentLoaded', () => {
    const mobileMenuBtn = document.querySelector('.mobile-menu-toggle');
    const nav = document.querySelector('nav ul');
    let isMenuOpen = false;
    
    if (mobileMenuBtn && nav) {
        mobileMenuBtn.addEventListener('click', () => {
            isMenuOpen = !isMenuOpen;
            if (isMenuOpen) {
                nav.classList.add('mobile-open');
                mobileMenuBtn.classList.add('active');
            } else {
                nav.classList.remove('mobile-open');
                mobileMenuBtn.classList.remove('active');
            }
        });

        // Close menu when clicking on links
        nav.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                nav.classList.remove('mobile-open');
                mobileMenuBtn.classList.remove('active');
                isMenuOpen = false;
            });
        });
        
        // Close menu when clicking outside
        document.addEventListener('click', (e) => {
            if (!mobileMenuBtn.contains(e.target) && !nav.contains(e.target)) {
                nav.classList.remove('mobile-open');
                mobileMenuBtn.classList.remove('active');
                isMenuOpen = false;
            }
        });
    }
});