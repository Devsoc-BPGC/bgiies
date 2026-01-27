class PitchDeckPresentation {
    constructor() {
        this.currentSlide = 0;
        this.totalSlides = 9;
        this.slides = document.querySelectorAll('.slide');
        this.prevBtn = document.getElementById('prevBtn');
        this.nextBtn = document.getElementById('nextBtn');
        this.slideIndicators = document.getElementById('slideIndicators');
        this.progressFill = document.getElementById('progressFill');
        this.autoAdvance = false;
        this.autoAdvanceInterval = null;
        this.autoAdvanceDelay = 10000; // 10 seconds

        this.init();
    }

    init() {
        this.createSlideIndicators();
        this.bindEvents();
        this.updateSlide();
        this.updateProgress();
        this.animateSlideContent();
    }

    createSlideIndicators() {
        for (let i = 0; i < this.totalSlides; i++) {
            const indicator = document.createElement('div');
            indicator.classList.add('slide-indicator');
            if (i === 0) indicator.classList.add('active');
            indicator.addEventListener('click', () => this.goToSlide(i));
            this.slideIndicators.appendChild(indicator);
        }
    }

    bindEvents() {
        // Navigation buttons
        this.prevBtn.addEventListener('click', () => this.previousSlide());
        this.nextBtn.addEventListener('click', () => this.nextSlide());

        // Keyboard navigation
        document.addEventListener('keydown', (e) => {
            switch (e.key) {
                case 'ArrowLeft':
                case 'ArrowUp':
                    e.preventDefault();
                    this.previousSlide();
                    break;
                case 'ArrowRight':
                case 'ArrowDown':
                case ' ':
                    e.preventDefault();
                    this.nextSlide();
                    break;
                case 'Home':
                    e.preventDefault();
                    this.goToSlide(0);
                    break;
                case 'End':
                    e.preventDefault();
                    this.goToSlide(this.totalSlides - 1);
                    break;
                case 'a':
                case 'A':
                    e.preventDefault();
                    this.toggleAutoAdvance();
                    break;
            }
        });

        // Touch/swipe support
        let startX = 0;
        let startY = 0;
        let endX = 0;
        let endY = 0;

        document.addEventListener('touchstart', (e) => {
            startX = e.touches[0].clientX;
            startY = e.touches[0].clientY;
        });

        document.addEventListener('touchend', (e) => {
            endX = e.changedTouches[0].clientX;
            endY = e.changedTouches[0].clientY;
            this.handleSwipe(startX, startY, endX, endY);
        });

        // Prevent context menu on right click
        document.addEventListener('contextmenu', (e) => {
            e.preventDefault();
        });

        // Auto-advance toggle on spacebar hold
        let spacebarTimer;
        document.addEventListener('keydown', (e) => {
            if (e.key === ' ' && !e.repeat) {
                spacebarTimer = setTimeout(() => {
                    this.toggleAutoAdvance();
                }, 1000);
            }
        });

        document.addEventListener('keyup', (e) => {
            if (e.key === ' ') {
                clearTimeout(spacebarTimer);
            }
        });
    }

    handleSwipe(startX, startY, endX, endY) {
        const deltaX = endX - startX;
        const deltaY = endY - startY;
        const minSwipeDistance = 50;

        if (Math.abs(deltaX) > Math.abs(deltaY)) {
            if (Math.abs(deltaX) > minSwipeDistance) {
                if (deltaX > 0) {
                    this.previousSlide();
                } else {
                    this.nextSlide();
                }
            }
        }
    }

    nextSlide() {
        if (this.currentSlide < this.totalSlides - 1) {
            this.currentSlide++;
            this.updateSlide();
            this.updateProgress();
            this.animateSlideContent();
        }
    }

    previousSlide() {
        if (this.currentSlide > 0) {
            this.currentSlide--;
            this.updateSlide();
            this.updateProgress();
            this.animateSlideContent();
        }
    }

    goToSlide(index) {
        if (index >= 0 && index < this.totalSlides && index !== this.currentSlide) {
            this.currentSlide = index;
            this.updateSlide();
            this.updateProgress();
            this.animateSlideContent();
        }
    }

    updateSlide() {
        // Update slide visibility
        this.slides.forEach((slide, index) => {
            slide.classList.remove('active', 'prev');
            if (index === this.currentSlide) {
                slide.classList.add('active');
            } else if (index < this.currentSlide) {
                slide.classList.add('prev');
            }
        });

        // Update slide indicators
        const indicators = this.slideIndicators.querySelectorAll('.slide-indicator');
        indicators.forEach((indicator, index) => {
            indicator.classList.toggle('active', index === this.currentSlide);
        });

        // Update navigation buttons
        this.prevBtn.disabled = this.currentSlide === 0;
        this.nextBtn.disabled = this.currentSlide === this.totalSlides - 1;

        // Update button text for last slide
        if (this.currentSlide === this.totalSlides - 1) {
            this.nextBtn.innerHTML = '✓';
            this.nextBtn.title = 'Presentation Complete';
        } else {
            this.nextBtn.innerHTML = '→';
            this.nextBtn.title = 'Next Slide';
        }
    }

    updateProgress() {
        const progress = ((this.currentSlide + 1) / this.totalSlides) * 100;
        this.progressFill.style.width = `${progress}%`;
    }

    animateSlideContent() {
        const currentSlideElement = this.slides[this.currentSlide];
        const animatableElements = currentSlideElement.querySelectorAll(
            '.stat-card, .benefit-card, .market-section, .pathway-step, .phase, .advantage-item'
        );

        // Reset animations
        animatableElements.forEach(element => {
            element.style.opacity = '0';
            element.style.transform = 'translateY(20px)';
        });

        // Animate elements with staggered delay
        animatableElements.forEach((element, index) => {
            setTimeout(() => {
                element.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
                element.style.opacity = '1';
                element.style.transform = 'translateY(0)';
            }, index * 150);
        });

        // Special animations for specific slides
        this.addSpecialAnimations();
    }

    addSpecialAnimations() {
        const currentSlideElement = this.slides[this.currentSlide];
        
        // Slide 1: Logo animation
        if (this.currentSlide === 0) {
            const logo = currentSlideElement.querySelector('.logo');
            const tagline = currentSlideElement.querySelector('.tagline');
            const subtitle = currentSlideElement.querySelector('.subtitle');
            
            if (logo) {
                logo.style.animation = 'slideInFromTop 1s ease';
            }
            if (tagline) {
                setTimeout(() => {
                    tagline.style.animation = 'fadeInUp 0.8s ease';
                }, 500);
            }
            if (subtitle) {
                setTimeout(() => {
                    subtitle.style.animation = 'fadeInUp 0.8s ease';
                }, 1000);
            }
        }

        // Slide 2: Crisis counter animation
        if (this.currentSlide === 1) {
            const statNumbers = currentSlideElement.querySelectorAll('.stat-number');
            statNumbers.forEach((stat, index) => {
                setTimeout(() => {
                    this.animateNumber(stat, stat.textContent);
                }, index * 200);
            });
        }

        // Slide 3: Market growth animation
        if (this.currentSlide === 2) {
            const marketValues = currentSlideElement.querySelectorAll('.market-value');
            marketValues.forEach((value, index) => {
                setTimeout(() => {
                    this.animateMarketValue(value);
                }, index * 300);
            });
        }

        // Slide 9: Final message pulse
        if (this.currentSlide === 8) {
            const finalMessage = currentSlideElement.querySelector('.final-message h1');
            if (finalMessage) {
                setTimeout(() => {
                    finalMessage.style.animation = 'pulse 2s infinite';
                }, 1000);
            }
        }
    }

    animateNumber(element, finalValue) {
        const duration = 2000;
        const startTime = performance.now();
        const numericValue = parseFloat(finalValue.replace(/[^0-9.]/g, ''));
        const suffix = finalValue.replace(/[0-9.]/g, '');

        const animate = (currentTime) => {
            const elapsed = currentTime - startTime;
            const progress = Math.min(elapsed / duration, 1);
            
            // Easing function
            const easeOut = 1 - Math.pow(1 - progress, 3);
            const currentValue = Math.floor(numericValue * easeOut);
            
            element.textContent = currentValue + suffix;
            
            if (progress < 1) {
                requestAnimationFrame(animate);
            } else {
                element.textContent = finalValue;
            }
        };

        requestAnimationFrame(animate);
    }

    animateMarketValue(element) {
        const originalTransform = element.style.transform;
        element.style.transform = 'scale(1.2)';
        element.style.color = 'var(--medical-green)';
        
        setTimeout(() => {
            element.style.transform = originalTransform;
            element.style.transition = 'transform 0.3s ease';
        }, 300);
    }

    toggleAutoAdvance() {
        this.autoAdvance = !this.autoAdvance;
        
        if (this.autoAdvance) {
            this.startAutoAdvance();
            this.showNotification('Auto-advance enabled');
        } else {
            this.stopAutoAdvance();
            this.showNotification('Auto-advance disabled');
        }
    }

    startAutoAdvance() {
        this.stopAutoAdvance(); // Clear any existing interval
        this.autoAdvanceInterval = setInterval(() => {
            if (this.currentSlide < this.totalSlides - 1) {
                this.nextSlide();
            } else {
                this.stopAutoAdvance(); // Stop at the last slide
            }
        }, this.autoAdvanceDelay);
    }

    stopAutoAdvance() {
        if (this.autoAdvanceInterval) {
            clearInterval(this.autoAdvanceInterval);
            this.autoAdvanceInterval = null;
        }
    }

    showNotification(message) {
        // Create notification element
        const notification = document.createElement('div');
        notification.className = 'notification';
        notification.textContent = message;
        notification.style.cssText = `
            position: fixed;
            top: 100px;
            right: 20px;
            background: var(--medical-blue);
            color: white;
            padding: 12px 20px;
            border-radius: 8px;
            box-shadow: var(--shadow-medium);
            z-index: 1000;
            opacity: 0;
            transform: translateX(100%);
            transition: all 0.3s ease;
        `;

        document.body.appendChild(notification);

        // Show notification
        setTimeout(() => {
            notification.style.opacity = '1';
            notification.style.transform = 'translateX(0)';
        }, 100);

        // Hide and remove notification
        setTimeout(() => {
            notification.style.opacity = '0';
            notification.style.transform = 'translateX(100%)';
            setTimeout(() => {
                document.body.removeChild(notification);
            }, 300);
        }, 3000);
    }

    // Public methods for external control
    getCurrentSlide() {
        return this.currentSlide;
    }

    getTotalSlides() {
        return this.totalSlides;
    }

    isAutoAdvanceEnabled() {
        return this.autoAdvance;
    }
}

// Add CSS animations
const style = document.createElement('style');
style.textContent = `
    @keyframes slideInFromTop {
        from {
            opacity: 0;
            transform: translateY(-50px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }

    @keyframes fadeInUp {
        from {
            opacity: 0;
            transform: translateY(20px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }

    @keyframes pulse {
        0%, 100% {
            transform: scale(1);
        }
        50% {
            transform: scale(1.05);
        }
    }

    @keyframes slideInFromRight {
        from {
            opacity: 0;
            transform: translateX(50px);
        }
        to {
            opacity: 1;
            transform: translateX(0);
        }
    }

    @keyframes slideInFromLeft {
        from {
            opacity: 0;
            transform: translateX(-50px);
        }
        to {
            opacity: 1;
            transform: translateX(0);
        }
    }

    @keyframes bounceIn {
        from {
            opacity: 0;
            transform: scale(0.5);
        }
        to {
            opacity: 1;
            transform: scale(1);
        }
    }

    /* Hover effects */
    .stat-card:hover,
    .benefit-card:hover,
    .market-section:hover,
    .pathway-step:hover,
    .phase:hover {
        transform: translateY(-5px) scale(1.02);
        box-shadow: var(--shadow-large);
    }

    .nav-btn:hover {
        box-shadow: var(--shadow-medium);
    }

    /* Focus styles for accessibility */
    .slide-indicator:focus,
    .nav-btn:focus {
        outline: 2px solid var(--medical-green);
        outline-offset: 2px;
    }

    /* Print styles */
    @media print {
        .navigation,
        .progress-bar {
            display: none !important;
        }
        
        .slide {
            position: static !important;
            opacity: 1 !important;
            transform: none !important;
            page-break-after: always;
        }
        
        .slide-content {
            max-width: 100% !important;
        }
    }
`;
document.head.appendChild(style);

// Initialize the presentation when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    const presentation = new PitchDeckPresentation();
    
    // Make presentation globally accessible for debugging
    window.pitchDeck = presentation;
    
    // Add keyboard shortcut help
    document.addEventListener('keydown', (e) => {
        if (e.key === 'h' || e.key === 'H') {
            showHelp();
        }
    });
    
    function showHelp() {
        const helpContent = `
            <h3>Keyboard Shortcuts:</h3>
            <ul>
                <li><strong>Arrow Keys / Space:</strong> Navigate slides</li>
                <li><strong>Home:</strong> Go to first slide</li>
                <li><strong>End:</strong> Go to last slide</li>
                <li><strong>A:</strong> Toggle auto-advance</li>
                <li><strong>H:</strong> Show this help</li>
            </ul>
            <h3>Mouse/Touch:</h3>
            <ul>
                <li><strong>Click buttons:</strong> Navigate</li>
                <li><strong>Click indicators:</strong> Jump to slide</li>
                <li><strong>Swipe:</strong> Navigate on touch devices</li>
            </ul>
        `;
        
        showModal('Help', helpContent);
    }
    
    function showModal(title, content) {
        const modal = document.createElement('div');
        modal.style.cssText = `
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: rgba(0, 0, 0, 0.8);
            display: flex;
            align-items: center;
            justify-content: center;
            z-index: 2000;
        `;
        
        const modalContent = document.createElement('div');
        modalContent.style.cssText = `
            background: white;
            padding: 30px;
            border-radius: 15px;
            max-width: 500px;
            max-height: 80vh;
            overflow-y: auto;
            box-shadow: var(--shadow-large);
        `;
        
        modalContent.innerHTML = `
            <h2 style="margin-bottom: 20px; color: var(--medical-blue);">${title}</h2>
            ${content}
            <button onclick="this.closest('.modal').remove()" style="
                margin-top: 20px;
                padding: 10px 20px;
                background: var(--medical-blue);
                color: white;
                border: none;
                border-radius: 8px;
                cursor: pointer;
                font-size: 16px;
            ">Close</button>
        `;
        
        modal.className = 'modal';
        modal.appendChild(modalContent);
        document.body.appendChild(modal);
        
        // Close on click outside
        modal.addEventListener('click', (e) => {
            if (e.target === modal) {
                modal.remove();
            }
        });
        
        // Close on Escape key
        const escapeHandler = (e) => {
            if (e.key === 'Escape') {
                modal.remove();
                document.removeEventListener('keydown', escapeHandler);
            }
        };
        document.addEventListener('keydown', escapeHandler);
    }
});

// Error handling
window.addEventListener('error', (e) => {
    console.error('Presentation error:', e.error);
});

// Performance monitoring
if ('performance' in window) {
    window.addEventListener('load', () => {
        const perfData = performance.getEntriesByType('navigation')[0];
        console.log('Presentation loaded in:', perfData.loadEventEnd - perfData.loadEventStart, 'ms');
    });
}