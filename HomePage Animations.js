// Enhanced HomePage Animations
document.addEventListener("DOMContentLoaded", () => {
    // Hero section animation
    const heroText = document.querySelector(".hero-text");
    if (heroText) {
        heroText.style.opacity = "0";
        heroText.style.transform = "translateX(-30px)";
        setTimeout(() => {
            heroText.style.transition = "all 0.8s ease";
            heroText.style.opacity = "1";
            heroText.style.transform = "translateX(0)";
        }, 300);
    }

    // Animate special cards when they come into view
    const animateOnScroll = () => {
        const specialCards = document.querySelectorAll('.special-card');
        const aboutText = document.querySelector('.about-text');
        const aboutImg = document.querySelector('.about-img');

        specialCards.forEach((card, index) => {
            const cardTop = card.getBoundingClientRect().top;
            const cardVisible = 150;

            if (cardTop < window.innerHeight - cardVisible) {
                card.style.animationDelay = `${0.4 + (index * 0.1)}s`;
                card.classList.add('animated');
            }
        });

        // Animate about section
        if (aboutText) {
            const aboutTop = aboutText.getBoundingClientRect().top;
            if (aboutTop < window.innerHeight - 100) {
                aboutText.classList.add('animate-slideLeft');
            }
        }

        if (aboutImg) {
            const aboutImgTop = aboutImg.getBoundingClientRect().top;
            if (aboutImgTop < window.innerHeight - 100) {
                aboutImg.classList.add('animate-slideRight');
            }
        }
    };

    // Add ripple effect to buttons
    const addRippleEffect = () => {
        const buttons = document.querySelectorAll('.btn');

        buttons.forEach(button => {
            button.addEventListener('click', function (e) {
                // Create ripple element
                const ripple = document.createElement('span');
                const rect = this.getBoundingClientRect();
                const size = Math.max(rect.width, rect.height);
                const x = e.clientX - rect.left - size / 2;
                const y = e.clientY - rect.top - size / 2;

                ripple.style.cssText = `
                    position: absolute;
                    border-radius: 50%;
                    background: rgba(255, 255, 255, 0.6);
                    transform: scale(0);
                    animation: ripple 0.6s linear;
                    width: ${size}px;
                    height: ${size}px;
                    left: ${x}px;
                    top: ${y}px;
                    pointer-events: none;
                `;

                this.style.position = 'relative';
                this.style.overflow = 'hidden';
                this.appendChild(ripple);

                // Remove ripple after animation
                setTimeout(() => {
                    ripple.remove();
                }, 600);
            });
        });
    };

    // Add hover effects to navigation
    const enhanceNavigation = () => {
        const navLinks = document.querySelectorAll('.nav-links a');

        navLinks.forEach(link => {
            link.addEventListener('mouseenter', function () {
                this.style.transform = 'translateY(-2px)';
            });

            link.addEventListener('mouseleave', function () {
                this.style.transform = 'translateY(0)';
            });
        });
    };

    // Add image loading animations
    const enhanceImages = () => {
        const images = document.querySelectorAll('img');

        images.forEach(img => {
            img.addEventListener('load', function () {
                this.style.opacity = '1';
                this.style.transform = 'scale(1)';
                this.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
            });

            // Set initial state
            img.style.opacity = '0';
            img.style.transform = 'scale(0.95)';
        });
    };

    // Initialize all animations
    const initAnimations = () => {
        // Initial scroll check
        animateOnScroll();

        // Add scroll event listener
        window.addEventListener('scroll', animateOnScroll);

        // Add other effects
        addRippleEffect();
        enhanceNavigation();
        enhanceImages();

        // Add loading state to body
        document.body.style.opacity = '1';
    };

    // Start animations when page is fully loaded
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initAnimations);
    } else {
        initAnimations();
    }

    // Add some interactive fun to the logo
    const logoBox = document.querySelector('.logo-box');
    if (logoBox) {
        logoBox.addEventListener('click', function () {
            this.style.animation = 'bounce 0.5s ease';
            setTimeout(() => {
                this.style.animation = 'bounce 3s infinite';
            }, 500);
        });
    }
});

// Smooth page load
window.addEventListener('load', function () {
    document.body.style.opacity = "0";
    document.body.style.transition = "opacity 0.5s ease";

    setTimeout(() => {
        document.body.style.opacity = "1";
    }, 100);
});