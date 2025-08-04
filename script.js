// SmartSprout Irrigation Management System
// Main JavaScript functionality

document.addEventListener('DOMContentLoaded', function() {
    // Initialize all functionality
    initMobileMenu();
    initFAQAccordion();
    initSearchFunctionality();
    initDashboardInteractions();
    initSmoothScrolling();
    initAnimations();
    initNewsletterForm();
    initCurrentDate();
    initProbeData();
    initChartAnimations();
    initScrollEffects();
});

// Mobile Menu Toggle
function initMobileMenu() {
    const menuToggle = document.querySelector('.menu-toggle');
    const navCenter = document.querySelector('.nav-center');
    const navButtons = document.querySelector('.nav-buttons');
    
    if (menuToggle) {
        menuToggle.addEventListener('click', function() {
            const isOpen = navCenter.classList.contains('mobile-open');
            
            if (isOpen) {
                navCenter.classList.remove('mobile-open');
                navButtons.classList.remove('mobile-open');
                menuToggle.setAttribute('aria-expanded', 'false');
            } else {
                navCenter.classList.add('mobile-open');
                navButtons.classList.add('mobile-open');
                menuToggle.setAttribute('aria-expanded', 'true');
            }
        });
    }
    
    // Close mobile menu when clicking outside
    document.addEventListener('click', function(e) {
        if (!e.target.closest('.nav-container') && !e.target.closest('.menu-toggle')) {
            navCenter.classList.remove('mobile-open');
            navButtons.classList.remove('mobile-open');
            menuToggle.setAttribute('aria-expanded', 'false');
        }
    });
}

// FAQ Accordion Functionality
function initFAQAccordion() {
    const faqItems = document.querySelectorAll('.faq-item');
    
    faqItems.forEach(item => {
        const question = item.querySelector('.faq-question');
        const answer = item.querySelector('.faq-answer');
        const icon = question.querySelector('i');
        
        question.addEventListener('click', function() {
            const isActive = item.classList.contains('active');
            
            // Close all other FAQ items
            faqItems.forEach(otherItem => {
                if (otherItem !== item) {
                    otherItem.classList.remove('active');
                    const otherIcon = otherItem.querySelector('.faq-question i');
                    otherIcon.classList.remove('fa-minus');
                    otherIcon.classList.add('fa-plus');
                }
            });
            
            // Toggle current item
            if (isActive) {
                item.classList.remove('active');
                icon.classList.remove('fa-minus');
                icon.classList.add('fa-plus');
            } else {
                item.classList.add('active');
                icon.classList.remove('fa-plus');
                icon.classList.add('fa-minus');
            }
        });
    });
}

// Search Functionality
function initSearchFunctionality() {
    const searchInputs = document.querySelectorAll('.search-box input');
    const searchBtn = document.querySelector('.search-btn');
    
    searchInputs.forEach(input => {
        input.addEventListener('input', function() {
            const query = this.value.toLowerCase();
            performSearch(query);
        });
        
        input.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                e.preventDefault();
                const query = this.value.toLowerCase();
                performSearch(query);
            }
        });
    });
    
    if (searchBtn) {
        searchBtn.addEventListener('click', function() {
            const searchInput = document.querySelector('.search-box input');
            if (searchInput) {
                searchInput.focus();
            }
        });
    }
}

function performSearch(query) {
    // Search through dashboard content
    const searchableElements = document.querySelectorAll('.probe-card, .panel, .status-row');
    
    searchableElements.forEach(element => {
        const text = element.textContent.toLowerCase();
        if (text.includes(query)) {
            element.style.opacity = '1';
            element.style.transform = 'scale(1.02)';
        } else if (query.length > 0) {
            element.style.opacity = '0.3';
            element.style.transform = 'scale(1)';
        } else {
            element.style.opacity = '1';
            element.style.transform = 'scale(1)';
        }
    });
}

// Dashboard Interactions
function initDashboardInteractions() {
    // Farm selector toggle
    const farmSelector = document.querySelector('.farm-selector');
    if (farmSelector) {
        farmSelector.addEventListener('click', function() {
            this.classList.toggle('expanded');
            const icon = this.querySelector('.farm-toggle i');
            icon.style.transform = this.classList.contains('expanded') ? 'rotate(180deg)' : 'rotate(0deg)';
        });
    }
    
    // Navigation item clicks
    const navItems = document.querySelectorAll('.nav-item');
    navItems.forEach(item => {
        item.addEventListener('click', function(e) {
            e.preventDefault();
            
            // Remove active class from all items
            navItems.forEach(nav => nav.classList.remove('active'));
            
            // Add active class to clicked item
            this.classList.add('active');
            
            // Simulate navigation (in real app, this would navigate to different sections)
            const section = this.getAttribute('href').substring(1);
            console.log(`Navigating to ${section} section`);
        });
    });
    
    // Panel menu interactions
    const panelMenus = document.querySelectorAll('.panel-menu');
    panelMenus.forEach(menu => {
        menu.addEventListener('click', function(e) {
            e.stopPropagation();
            // Add dropdown menu functionality here
            console.log('Panel menu clicked');
        });
    });
    
    // Action buttons in status rows
    const actionBtns = document.querySelectorAll('.action-btn');
    actionBtns.forEach(btn => {
        btn.addEventListener('click', function(e) {
            e.stopPropagation();
            const row = this.closest('.status-row');
            const itemName = row.querySelector('.item-name').textContent;
            console.log(`Action menu for ${itemName}`);
        });
    });
}

// Smooth Scrolling for Navigation Links
function initSmoothScrolling() {
    const navLinks = document.querySelectorAll('a[href^="#"]');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                targetSection.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
}

// Animation on Scroll
function initAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-in');
            }
        });
    }, observerOptions);
    
    // Observe elements for animation
    const animateElements = document.querySelectorAll('.feature-card, .process-step, .faq-item, .panel');
    animateElements.forEach(el => observer.observe(el));
}

// Newsletter Form
function initNewsletterForm() {
    const newsletterForm = document.querySelector('.newsletter-form');
    
    if (newsletterForm) {
        newsletterForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const emailInput = this.querySelector('input[type="email"]');
            const email = emailInput.value.trim();
            
            if (validateEmail(email)) {
                // Simulate form submission
                const submitBtn = this.querySelector('button');
                const originalText = submitBtn.textContent;
                
                submitBtn.textContent = 'Subscribing...';
                submitBtn.disabled = true;
                
                setTimeout(() => {
                    showNotification('Successfully subscribed to newsletter!', 'success');
                    emailInput.value = '';
                    submitBtn.textContent = originalText;
                    submitBtn.disabled = false;
                }, 2000);
            } else {
                showNotification('Please enter a valid email address.', 'error');
            }
        });
    }
}

// Email validation
function validateEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

// Current Date Display
function initCurrentDate() {
    const dateElement = document.getElementById('current-date');
    if (dateElement) {
        const now = new Date();
        const options = { 
            weekday: 'long', 
            year: 'numeric', 
            month: 'long', 
            day: 'numeric' 
        };
        dateElement.textContent = now.toLocaleDateString('en-US', options);
    }
}

// Simulate Real-time Probe Data
function initProbeData() {
    const probeCards = document.querySelectorAll('.probe-card');
    
    setInterval(() => {
        probeCards.forEach(card => {
            const valueSpan = card.querySelector('.probe-value span');
            const timeElement = card.querySelector('.update-time');
            
            if (valueSpan && timeElement) {
                // Simulate temperature changes
                const currentTemp = parseInt(valueSpan.textContent);
                const newTemp = currentTemp + Math.floor(Math.random() * 6) - 3; // ±3 degrees
                const clampedTemp = Math.max(20, Math.min(45, newTemp)); // Keep between 20-45°C
                
                valueSpan.textContent = `${clampedTemp}°C`;
                timeElement.textContent = 'Just now';
                
                // Add visual feedback
                card.style.transform = 'scale(1.05)';
                setTimeout(() => {
                    card.style.transform = 'scale(1)';
                }, 200);
            }
        });
    }, 30000); // Update every 30 seconds
}

// Chart Animations
function initChartAnimations() {
    const chartBars = document.querySelectorAll('.chart-bar');
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const bar = entry.target;
                const height = bar.style.height;
                
                // Animate the bar from 0 to its final height
                bar.style.height = '0%';
                setTimeout(() => {
                    bar.style.height = height;
                }, 100);
            }
        });
    }, { threshold: 0.5 });
    
    chartBars.forEach(bar => observer.observe(bar));
}

// Scroll Effects
function initScrollEffects() {
    let ticking = false;
    
    function updateOnScroll() {
        const scrolled = window.pageYOffset;
        const parallaxElements = document.querySelectorAll('.hero-bg, .footer-bg img');
        
        parallaxElements.forEach(element => {
            const speed = 0.5;
            const yPos = -(scrolled * speed);
            element.style.transform = `translateY(${yPos}px)`;
        });
        
        ticking = false;
    }
    
    function requestTick() {
        if (!ticking) {
            requestAnimationFrame(updateOnScroll);
            ticking = true;
        }
    }
    
    window.addEventListener('scroll', requestTick);
}

// Notification System
function showNotification(message, type = 'info') {
    // Remove existing notifications
    const existingNotifications = document.querySelectorAll('.notification');
    existingNotifications.forEach(notification => notification.remove());
    
    // Create notification element
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.innerHTML = `
        <div class="notification-content">
            <span class="notification-message">${message}</span>
            <button class="notification-close">&times;</button>
        </div>
    `;
    
    // Add styles
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: ${type === 'success' ? '#00A651' : type === 'error' ? '#ff0000' : '#353535'};
        color: white;
        padding: 1rem 1.5rem;
        border-radius: 8px;
        box-shadow: 0 4px 20px rgba(0,0,0,0.3);
        z-index: 10000;
        transform: translateX(100%);
        transition: transform 0.3s ease;
        max-width: 300px;
    `;
    
    // Add to page
    document.body.appendChild(notification);
    
    // Animate in
    setTimeout(() => {
        notification.style.transform = 'translateX(0)';
    }, 100);
    
    // Close button functionality
    const closeBtn = notification.querySelector('.notification-close');
    closeBtn.addEventListener('click', () => {
        notification.style.transform = 'translateX(100%)';
        setTimeout(() => notification.remove(), 300);
    });
    
    // Auto remove after 5 seconds
    setTimeout(() => {
        if (notification.parentNode) {
            notification.style.transform = 'translateX(100%)';
            setTimeout(() => notification.remove(), 300);
        }
    }, 5000);
}

// Utility Functions
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

function throttle(func, limit) {
    let inThrottle;
    return function() {
        const args = arguments;
        const context = this;
        if (!inThrottle) {
            func.apply(context, args);
            inThrottle = true;
            setTimeout(() => inThrottle = false, limit);
        }
    };
}

// Performance optimization for scroll events
const optimizedScrollHandler = throttle(function() {
    // Handle scroll-based animations here
}, 16); // ~60fps

window.addEventListener('scroll', optimizedScrollHandler);

// Keyboard Navigation Support
document.addEventListener('keydown', function(e) {
    // Escape key to close modals/menus
    if (e.key === 'Escape') {
        const navCenter = document.querySelector('.nav-center');
        const navButtons = document.querySelector('.nav-buttons');
        const menuToggle = document.querySelector('.menu-toggle');
        
        if (navCenter.classList.contains('mobile-open')) {
            navCenter.classList.remove('mobile-open');
            navButtons.classList.remove('mobile-open');
            menuToggle.setAttribute('aria-expanded', 'false');
        }
    }
    
    // Enter key for interactive elements
    if (e.key === 'Enter') {
        const focusedElement = document.activeElement;
        if (focusedElement.classList.contains('faq-question')) {
            focusedElement.click();
        }
    }
});

// Error Handling
window.addEventListener('error', function(e) {
    console.error('JavaScript error:', e.error);
    showNotification('An error occurred. Please refresh the page.', 'error');
});

// Service Worker Registration (for PWA features)
if ('serviceWorker' in navigator) {
    window.addEventListener('load', function() {
        navigator.serviceWorker.register('/sw.js')
            .then(function(registration) {
                console.log('ServiceWorker registration successful');
            })
            .catch(function(err) {
                console.log('ServiceWorker registration failed');
            });
    });
}

// Export functions for potential external use
window.SmartSprout = {
    showNotification,
    performSearch,
    validateEmail,
    debounce,
    throttle
};