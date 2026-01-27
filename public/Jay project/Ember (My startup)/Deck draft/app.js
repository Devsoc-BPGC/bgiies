class PitchDeck {
    constructor() {
        this.currentSlide = 1;
        this.totalSlides = 17;
        this.slides = document.querySelectorAll('.slide');
        this.prevBtn = document.getElementById('prev-btn');
        this.nextBtn = document.getElementById('next-btn');
        this.currentSlideElement = document.getElementById('current-slide');
        this.totalSlidesElement = document.getElementById('total-slides');
        
        this.init();
    }

    init() {
        // Set total slides
        this.totalSlidesElement.textContent = this.totalSlides;
        
        // Add event listeners
        this.prevBtn.addEventListener('click', () => this.previousSlide());
        this.nextBtn.addEventListener('click', () => this.nextSlide());
        
        // Keyboard navigation
        document.addEventListener('keydown', (e) => {
            if (e.key === 'ArrowLeft') {
                this.previousSlide();
            } else if (e.key === 'ArrowRight') {
                this.nextSlide();
            }
        });

        // Touch/swipe support for mobile
        this.setupTouchNavigation();
        
        // Initial state
        this.updateSlideDisplay();
        this.updateButtonStates();
    }

    setupTouchNavigation() {
        let startX = 0;
        let startY = 0;
        let endX = 0;
        let endY = 0;
        
        const slideContainer = document.querySelector('.pitch-deck');
        
        slideContainer.addEventListener('touchstart', (e) => {
            startX = e.touches[0].clientX;
            startY = e.touches[0].clientY;
        });
        
        slideContainer.addEventListener('touchmove', (e) => {
            e.preventDefault(); // Prevent scrolling
        });
        
        slideContainer.addEventListener('touchend', (e) => {
            endX = e.changedTouches[0].clientX;
            endY = e.changedTouches[0].clientY;
            
            const deltaX = endX - startX;
            const deltaY = endY - startY;
            
            // Check if horizontal swipe is more significant than vertical
            if (Math.abs(deltaX) > Math.abs(deltaY) && Math.abs(deltaX) > 50) {
                if (deltaX > 0) {
                    // Swipe right - previous slide
                    this.previousSlide();
                } else {
                    // Swipe left - next slide
                    this.nextSlide();
                }
            }
        });
    }

    nextSlide() {
        if (this.currentSlide < this.totalSlides) {
            this.currentSlide++;
            this.updateSlideDisplay();
            this.updateButtonStates();
            this.triggerSlideAnimation();
        }
    }

    previousSlide() {
        if (this.currentSlide > 1) {
            this.currentSlide--;
            this.updateSlideDisplay();
            this.updateButtonStates();
            this.triggerSlideAnimation();
        }
    }

    updateSlideDisplay() {
        // Update slide counter
        this.currentSlideElement.textContent = this.currentSlide;
        
        // Update slide visibility
        this.slides.forEach((slide, index) => {
            const slideNumber = index + 1;
            slide.classList.remove('active', 'prev', 'next');
            
            if (slideNumber === this.currentSlide) {
                slide.classList.add('active');
            } else if (slideNumber < this.currentSlide) {
                slide.classList.add('prev');
            } else {
                slide.classList.add('next');
            }
        });
    }

    updateButtonStates() {
        // Disable/enable navigation buttons
        this.prevBtn.disabled = this.currentSlide === 1;
        this.nextBtn.disabled = this.currentSlide === this.totalSlides;
        
        // Update button text for first/last slides
        if (this.currentSlide === 1) {
            this.prevBtn.textContent = 'Previous';
            this.nextBtn.textContent = 'Next';
        } else if (this.currentSlide === this.totalSlides) {
            this.prevBtn.textContent = 'Previous';
            this.nextBtn.textContent = 'Finish';
        } else {
            this.prevBtn.textContent = 'Previous';
            this.nextBtn.textContent = 'Next';
        }
    }

    triggerSlideAnimation() {
        // Add animation trigger for slide content
        const currentSlideElement = document.querySelector('.slide.active .slide-content');
        if (currentSlideElement) {
            currentSlideElement.style.animation = 'none';
            currentSlideElement.offsetHeight; // Trigger reflow
            currentSlideElement.style.animation = 'slideIn 0.6s ease-out';
        }
    }

    // Public method to go to specific slide
    goToSlide(slideNumber) {
        if (slideNumber >= 1 && slideNumber <= this.totalSlides) {
            this.currentSlide = slideNumber;
            this.updateSlideDisplay();
            this.updateButtonStates();
            this.triggerSlideAnimation();
        }
    }

    // Public method to get current slide
    getCurrentSlide() {
        return this.currentSlide;
    }

    // Public method to get total slides
    getTotalSlides() {
        return this.totalSlides;
    }
}

// Additional utility functions for enhanced presentation features
class PresentationUtils {
    static addProgressBar() {
        const progressBar = document.createElement('div');
        progressBar.className = 'presentation-progress';
        progressBar.innerHTML = '<div class="progress-fill"></div>';
        document.body.appendChild(progressBar);
        
        // Add CSS for progress bar
        const style = document.createElement('style');
        style.textContent = `
            .presentation-progress {
                position: fixed;
                top: 60px;
                left: 0;
                width: 100%;
                height: 3px;
                background: rgba(0,0,0,0.1);
                z-index: 999;
            }
            
            .progress-fill {
                height: 100%;
                background: linear-gradient(90deg, #ff6b35 0%, #3498db 100%);
                transition: width 0.5s ease;
                width: 0%;
            }
        `;
        document.head.appendChild(style);
        
        return progressBar;
    }

    static updateProgressBar(current, total) {
        const progressFill = document.querySelector('.progress-fill');
        if (progressFill) {
            const percentage = (current / total) * 100;
            progressFill.style.width = `${percentage}%`;
        }
    }

    static addFullscreenToggle() {
        const fullscreenBtn = document.createElement('button');
        fullscreenBtn.className = 'fullscreen-btn';
        fullscreenBtn.innerHTML = '⛶';
        fullscreenBtn.title = 'Toggle Fullscreen';
        
        // Add CSS for fullscreen button
        const style = document.createElement('style');
        style.textContent = `
            .fullscreen-btn {
                position: fixed;
                top: 15px;
                right: 200px;
                background: rgba(255,255,255,0.9);
                border: 1px solid #ddd;
                padding: 5px 10px;
                border-radius: 5px;
                cursor: pointer;
                font-size: 16px;
                z-index: 1001;
                transition: all 0.3s ease;
            }
            
            .fullscreen-btn:hover {
                background: white;
                transform: scale(1.1);
            }
        `;
        document.head.appendChild(style);
        
        fullscreenBtn.addEventListener('click', () => {
            if (!document.fullscreenElement) {
                document.documentElement.requestFullscreen();
            } else {
                document.exitFullscreen();
            }
        });
        
        document.body.appendChild(fullscreenBtn);
    }

    static addSlideIndicators(totalSlides) {
        const indicators = document.createElement('div');
        indicators.className = 'slide-indicators';
        
        for (let i = 1; i <= totalSlides; i++) {
            const indicator = document.createElement('div');
            indicator.className = 'indicator';
            indicator.dataset.slide = i;
            if (i === 1) indicator.classList.add('active');
            indicators.appendChild(indicator);
        }
        
        // Add CSS for indicators
        const style = document.createElement('style');
        style.textContent = `
            .slide-indicators {
                position: fixed;
                bottom: 20px;
                left: 50%;
                transform: translateX(-50%);
                display: flex;
                gap: 5px;
                z-index: 1000;
            }
            
            .indicator {
                width: 8px;
                height: 8px;
                border-radius: 50%;
                background: rgba(255,255,255,0.5);
                cursor: pointer;
                transition: all 0.3s ease;
            }
            
            .indicator.active {
                background: #3498db;
                transform: scale(1.2);
            }
            
            .indicator:hover {
                background: #3498db;
                transform: scale(1.1);
            }
        `;
        document.head.appendChild(style);
        
        document.body.appendChild(indicators);
        return indicators;
    }

    static updateSlideIndicators(currentSlide) {
        const indicators = document.querySelectorAll('.indicator');
        indicators.forEach((indicator, index) => {
            indicator.classList.toggle('active', index + 1 === currentSlide);
        });
    }
}

// Initialize the presentation when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    // Initialize main pitch deck
    const pitchDeck = new PitchDeck();
    
    // Add enhanced features
    const progressBar = PresentationUtils.addProgressBar();
    const indicators = PresentationUtils.addSlideIndicators(pitchDeck.getTotalSlides());
    PresentationUtils.addFullscreenToggle();
    
    // Update progress bar and indicators on slide change
    const originalUpdateSlideDisplay = pitchDeck.updateSlideDisplay.bind(pitchDeck);
    pitchDeck.updateSlideDisplay = function() {
        originalUpdateSlideDisplay();
        PresentationUtils.updateProgressBar(this.currentSlide, this.totalSlides);
        PresentationUtils.updateSlideIndicators(this.currentSlide);
    };
    
    // Initialize progress bar and indicators
    PresentationUtils.updateProgressBar(1, pitchDeck.getTotalSlides());
    PresentationUtils.updateSlideIndicators(1);
    
    // Add click handlers for indicators
    indicators.addEventListener('click', (e) => {
        if (e.target.classList.contains('indicator')) {
            const slideNumber = parseInt(e.target.dataset.slide);
            pitchDeck.goToSlide(slideNumber);
        }
    });
    
    // Auto-play functionality (optional - commented out by default)
    /*
    let autoPlayInterval;
    const startAutoPlay = () => {
        autoPlayInterval = setInterval(() => {
            if (pitchDeck.getCurrentSlide() < pitchDeck.getTotalSlides()) {
                pitchDeck.nextSlide();
            } else {
                clearInterval(autoPlayInterval);
            }
        }, 10000); // 10 seconds per slide
    };
    
    const stopAutoPlay = () => {
        clearInterval(autoPlayInterval);
    };
    
    // Start auto-play on space key
    document.addEventListener('keydown', (e) => {
        if (e.code === 'Space' && !autoPlayInterval) {
            e.preventDefault();
            startAutoPlay();
        } else if (e.code === 'Escape') {
            stopAutoPlay();
        }
    });
    */
    
    // Add presentation mode toggle
    let presentationMode = false;
    document.addEventListener('keydown', (e) => {
        if (e.key === 'p' || e.key === 'P') {
            presentationMode = !presentationMode;
            document.body.classList.toggle('presentation-mode', presentationMode);
            
            if (presentationMode) {
                // Hide navigation for clean presentation
                document.querySelector('.deck-nav').style.opacity = '0';
                document.querySelector('.slide-indicators').style.opacity = '0';
                document.querySelector('.presentation-progress').style.opacity = '0';
            } else {
                // Show navigation
                document.querySelector('.deck-nav').style.opacity = '1';
                document.querySelector('.slide-indicators').style.opacity = '1';
                document.querySelector('.presentation-progress').style.opacity = '1';
            }
        }
    });
    
    // Add loading animation
    const loadingOverlay = document.createElement('div');
    loadingOverlay.className = 'loading-overlay';
    loadingOverlay.innerHTML = `
        <div class="loading-content">
            <div class="loading-logo">BURNICOL</div>
            <div class="loading-text">Loading Presentation...</div>
        </div>
    `;
    
    // Add loading CSS
    const loadingStyle = document.createElement('style');
    loadingStyle.textContent = `
        .loading-overlay {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: linear-gradient(135deg, #ff6b35 0%, #f39c12 30%, #3498db 70%, #2980b9 100%);
            display: flex;
            align-items: center;
            justify-content: center;
            z-index: 9999;
            opacity: 1;
            transition: opacity 0.5s ease;
        }
        
        .loading-overlay.hidden {
            opacity: 0;
            pointer-events: none;
        }
        
        .loading-content {
            text-align: center;
            color: white;
        }
        
        .loading-logo {
            font-size: 3rem;
            font-weight: 700;
            margin-bottom: 1rem;
            animation: pulse 2s infinite;
        }
        
        .loading-text {
            font-size: 1.2rem;
            opacity: 0.9;
        }
        
        @keyframes pulse {
            0%, 100% { transform: scale(1); }
            50% { transform: scale(1.05); }
        }
    `;
    document.head.appendChild(loadingStyle);
    document.body.appendChild(loadingOverlay);
    
    // Hide loading overlay after a short delay
    setTimeout(() => {
        loadingOverlay.classList.add('hidden');
        setTimeout(() => {
            loadingOverlay.remove();
        }, 500);
    }, 1500);
    
    // Make pitchDeck globally accessible for debugging
    window.pitchDeck = pitchDeck;
    
    console.log('BURNICOL Pitch Deck initialized successfully!');
    console.log('Navigation: Arrow keys or buttons');
    console.log('Fullscreen: Click fullscreen button');
    console.log('Presentation mode: Press "P" key');
    console.log('Total slides:', pitchDeck.getTotalSlides());
});