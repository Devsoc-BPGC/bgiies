// Professional Pitch Deck JavaScript
class PitchDeck {
    constructor() {
        this.currentSlide = 1;
        this.totalSlides = 17;
        this.slides = document.querySelectorAll('.slide');
        this.prevBtn = document.getElementById('prevBtn');
        this.nextBtn = document.getElementById('nextBtn');
        this.slideIndicators = document.getElementById('slideIndicators');
        this.slideCounter = document.getElementById('slideCounter');
        this.currentSlideSpan = document.getElementById('currentSlide');
        this.totalSlidesSpan = document.getElementById('totalSlides');
        
        this.init();
    }
    
    init() {
        this.createIndicators();
        this.updateSlideCounter();
        this.bindEvents();
        this.updateNavButtons();
        this.updateIndicators();
    }
    
    createIndicators() {
        this.slideIndicators.innerHTML = '';
        for (let i = 1; i <= this.totalSlides; i++) {
            const indicator = document.createElement('div');
            indicator.className = 'indicator';
            indicator.dataset.slide = i;
            if (i === this.currentSlide) {
                indicator.classList.add('active');
            }
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
            if (e.key === 'ArrowRight' || e.key === 'Space') {
                e.preventDefault();
                this.nextSlide();
            } else if (e.key === 'ArrowLeft') {
                e.preventDefault();
                this.previousSlide();
            } else if (e.key === 'Home') {
                e.preventDefault();
                this.goToSlide(1);
            } else if (e.key === 'End') {
                e.preventDefault();
                this.goToSlide(this.totalSlides);
            }
        });
        
        // Touch/swipe support for mobile
        let touchStartX = 0;
        let touchEndX = 0;
        
        document.addEventListener('touchstart', (e) => {
            touchStartX = e.changedTouches[0].screenX;
        });
        
        document.addEventListener('touchend', (e) => {
            touchEndX = e.changedTouches[0].screenX;
            this.handleSwipe();
        });
        
        const handleSwipe = () => {
            const swipeThreshold = 50;
            const swipeDistance = touchEndX - touchStartX;
            
            if (Math.abs(swipeDistance) > swipeThreshold) {
                if (swipeDistance > 0) {
                    this.previousSlide();
                } else {
                    this.nextSlide();
                }
            }
        };
        
        this.handleSwipe = handleSwipe;
    }
    
    goToSlide(slideNumber) {
        if (slideNumber < 1 || slideNumber > this.totalSlides) {
            return;
        }
        
        // Remove active class from current slide
        const currentSlideElement = document.querySelector('.slide.active');
        if (currentSlideElement) {
            currentSlideElement.classList.remove('active');
            
            // Add transition class based on direction
            if (slideNumber > this.currentSlide) {
                currentSlideElement.classList.add('prev');
            } else {
                currentSlideElement.classList.remove('prev');
            }
        }
        
        // Update current slide
        this.currentSlide = slideNumber;
        
        // Add active class to new slide
        const newSlideElement = document.querySelector(`.slide[data-slide="${slideNumber}"]`);
        if (newSlideElement) {
            // Small delay to ensure smooth transition
            setTimeout(() => {
                newSlideElement.classList.add('active');
                newSlideElement.classList.remove('prev');
            }, 50);
        }
        
        // Update UI elements
        this.updateSlideCounter();
        this.updateNavButtons();
        this.updateIndicators();
        
        // Announce slide change for accessibility
        this.announceSlideChange();
    }
    
    nextSlide() {
        if (this.currentSlide < this.totalSlides) {
            this.goToSlide(this.currentSlide + 1);
        }
    }
    
    previousSlide() {
        if (this.currentSlide > 1) {
            this.goToSlide(this.currentSlide - 1);
        }
    }
    
    updateSlideCounter() {
        this.currentSlideSpan.textContent = this.currentSlide;
        this.totalSlidesSpan.textContent = this.totalSlides;
    }
    
    updateNavButtons() {
        this.prevBtn.disabled = this.currentSlide === 1;
        this.nextBtn.disabled = this.currentSlide === this.totalSlides;
    }
    
    updateIndicators() {
        const indicators = this.slideIndicators.querySelectorAll('.indicator');
        indicators.forEach((indicator, index) => {
            indicator.classList.toggle('active', index + 1 === this.currentSlide);
        });
    }
    
    announceSlideChange() {
        // Create announcement for screen readers
        const announcement = document.createElement('div');
        announcement.setAttribute('aria-live', 'polite');
        announcement.setAttribute('aria-atomic', 'true');
        announcement.className = 'sr-only';
        announcement.textContent = `Slide ${this.currentSlide} of ${this.totalSlides}`;
        
        document.body.appendChild(announcement);
        
        // Remove announcement after screen reader has time to read it
        setTimeout(() => {
            document.body.removeChild(announcement);
        }, 1000);
    }
    
    // Auto-advance functionality (disabled by default)
    startAutoAdvance(intervalMs = 30000) {
        this.autoAdvanceInterval = setInterval(() => {
            if (this.currentSlide < this.totalSlides) {
                this.nextSlide();
            } else {
                this.stopAutoAdvance();
            }
        }, intervalMs);
    }
    
    stopAutoAdvance() {
        if (this.autoAdvanceInterval) {
            clearInterval(this.autoAdvanceInterval);
            this.autoAdvanceInterval = null;
        }
    }
    
    // Fullscreen functionality
    toggleFullscreen() {
        if (!document.fullscreenElement) {
            document.documentElement.requestFullscreen().catch(err => {
                console.log('Error attempting to enable fullscreen:', err);
            });
        } else {
            document.exitFullscreen();
        }
    }
    
    // Print functionality
    print() {
        window.print();
    }
    
    // Export slide data (for analytics or sharing)
    getSlideData() {
        return {
            currentSlide: this.currentSlide,
            totalSlides: this.totalSlides,
            timestamp: new Date().toISOString()
        };
    }
}

// Enhanced slide content animations
class SlideAnimations {
    constructor() {
        this.observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };
        
        this.init();
    }
    
    init() {
        this.setupIntersectionObserver();
        this.addAnimationClasses();
    }
    
    setupIntersectionObserver() {
        this.observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    this.animateSlideContent(entry.target);
                }
            });
        }, this.observerOptions);
        
        // Observe all slides
        document.querySelectorAll('.slide').forEach(slide => {
            this.observer.observe(slide);
        });
    }
    
    addAnimationClasses() {
        // Add animation classes to various elements
        const animateElements = document.querySelectorAll(`
            .summary-card,
            .stat-card,
            .feature-card,
            .usp-card,
            .market-card,
            .stream-card,
            .phase-card,
            .reg-step,
            .invest-phase,
            .revenue-phase,
            .risk-card,
            .esg-card,
            .thesis-card,
            .step-card
        `);
        
        animateElements.forEach((element, index) => {
            element.style.opacity = '0';
            element.style.transform = 'translateY(20px)';
            element.style.transition = 'all 0.6s ease';
            element.style.transitionDelay = `${index * 0.1}s`;
        });
    }
    
    animateSlideContent(slide) {
        const elements = slide.querySelectorAll(`
            .summary-card,
            .stat-card,
            .feature-card,
            .usp-card,
            .market-card,
            .stream-card,
            .phase-card,
            .reg-step,
            .invest-phase,
            .revenue-phase,
            .risk-card,
            .esg-card,
            .thesis-card,
            .step-card
        `);
        
        elements.forEach((element, index) => {
            setTimeout(() => {
                element.style.opacity = '1';
                element.style.transform = 'translateY(0)';
            }, index * 100);
        });
    }
}

// Enhanced chart interactions
class ChartInteractions {
    constructor() {
        this.init();
    }
    
    init() {
        this.setupChartHovers();
        this.setupImageZoom();
    }
    
    setupChartHovers() {
        const chartImages = document.querySelectorAll('.chart-image');
        
        chartImages.forEach(img => {
            img.addEventListener('mouseenter', () => {
                img.style.transform = 'scale(1.02)';
                img.style.transition = 'transform 0.3s ease';
            });
            
            img.addEventListener('mouseleave', () => {
                img.style.transform = 'scale(1)';
            });
        });
    }
    
    setupImageZoom() {
        const images = document.querySelectorAll('.chart-image, .solution-image, .manufacturing-image, .regulatory-image');
        
        images.forEach(img => {
            img.addEventListener('click', () => {
                this.showImageModal(img);
            });
            
            img.style.cursor = 'pointer';
            img.title = 'Click to enlarge';
        });
    }
    
    showImageModal(img) {
        const modal = document.createElement('div');
        modal.className = 'image-modal';
        modal.style.cssText = `
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: rgba(0, 0, 0, 0.9);
            display: flex;
            align-items: center;
            justify-content: center;
            z-index: 10000;
            cursor: pointer;
        `;
        
        const modalImg = document.createElement('img');
        modalImg.src = img.src;
        modalImg.alt = img.alt;
        modalImg.style.cssText = `
            max-width: 90%;
            max-height: 90%;
            object-fit: contain;
            border-radius: var(--radius-md);
            box-shadow: var(--shadow-lg);
        `;
        
        modal.appendChild(modalImg);
        document.body.appendChild(modal);
        
        // Close modal on click
        modal.addEventListener('click', () => {
            document.body.removeChild(modal);
        });
        
        // Close modal on escape key
        const closeOnEscape = (e) => {
            if (e.key === 'Escape') {
                document.body.removeChild(modal);
                document.removeEventListener('keydown', closeOnEscape);
            }
        };
        
        document.addEventListener('keydown', closeOnEscape);
    }
}

// Progress tracking
class ProgressTracker {
    constructor() {
        this.viewTimes = {};
        this.totalViewTime = 0;
        this.startTime = Date.now();
        this.init();
    }
    
    init() {
        this.trackSlideViews();
        this.trackTotalTime();
    }
    
    trackSlideViews() {
        // Track how long each slide is viewed
        const originalGoToSlide = PitchDeck.prototype.goToSlide;
        PitchDeck.prototype.goToSlide = function(slideNumber) {
            // Record view time for previous slide
            if (this.currentSlide && this.slideStartTime) {
                const viewTime = Date.now() - this.slideStartTime;
                if (!this.viewTimes) this.viewTimes = {};
                this.viewTimes[this.currentSlide] = (this.viewTimes[this.currentSlide] || 0) + viewTime;
            }
            
            // Call original method
            originalGoToSlide.call(this, slideNumber);
            
            // Start timing for new slide
            this.slideStartTime = Date.now();
        };
    }
    
    trackTotalTime() {
        // Track total presentation time
        window.addEventListener('beforeunload', () => {
            this.totalViewTime = Date.now() - this.startTime;
            // Could send analytics data here
        });
    }
    
    getAnalytics() {
        return {
            viewTimes: this.viewTimes,
            totalViewTime: this.totalViewTime,
            slidesViewed: Object.keys(this.viewTimes).length
        };
    }
}

// Initialize the pitch deck when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    // Initialize main pitch deck functionality
    const pitchDeck = new PitchDeck();
    
    // Initialize animations
    const slideAnimations = new SlideAnimations();
    
    // Initialize chart interactions
    const chartInteractions = new ChartInteractions();
    
    // Initialize progress tracking
    const progressTracker = new ProgressTracker();
    
    // Make instances globally available for debugging
    window.pitchDeck = pitchDeck;
    window.slideAnimations = slideAnimations;
    window.chartInteractions = chartInteractions;
    window.progressTracker = progressTracker;
    
    // Add keyboard shortcuts info
    const showKeyboardHelp = () => {
        const helpText = `
            Keyboard Shortcuts:
            → Arrow Right / Space: Next slide
            ← Arrow Left: Previous slide
            Home: First slide
            End: Last slide
            F11: Toggle fullscreen
            Ctrl+P: Print presentation
            Esc: Close modals
        `;
        
        alert(helpText);
    };
    
    // Add help functionality (Ctrl+H or F1)
    document.addEventListener('keydown', (e) => {
        if ((e.ctrlKey && e.key === 'h') || e.key === 'F1') {
            e.preventDefault();
            showKeyboardHelp();
        } else if (e.key === 'F11') {
            e.preventDefault();
            pitchDeck.toggleFullscreen();
        } else if (e.ctrlKey && e.key === 'p') {
            e.preventDefault();
            pitchDeck.print();
        }
    });
    
    // Performance optimization: Preload images
    const preloadImages = () => {
        const images = document.querySelectorAll('img');
        images.forEach(img => {
            if (img.dataset.src) {
                const newImg = new Image();
                newImg.src = img.dataset.src;
            }
        });
    };
    
    // Preload images after initial load
    setTimeout(preloadImages, 1000);
    
    // Add resize handler for responsive behavior
    let resizeTimeout;
    window.addEventListener('resize', () => {
        clearTimeout(resizeTimeout);
        resizeTimeout = setTimeout(() => {
            // Recalculate layouts if needed
            pitchDeck.updateIndicators();
        }, 250);
    });
    
    // Add visibility change handler to pause auto-advance when tab is hidden
    document.addEventListener('visibilitychange', () => {
        if (document.hidden) {
            pitchDeck.stopAutoAdvance();
        }
    });
    
    // Add smooth scrolling for any internal links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });
    
    console.log('Burnicol Pitch Deck initialized successfully');
});