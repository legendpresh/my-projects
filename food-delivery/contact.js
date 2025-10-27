// Contact Page JavaScript

document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.querySelector('.contact-form-element');
    const supportButtons = document.querySelectorAll('.btn-support');
    const mapButton = document.querySelector('.btn-view-map');

    // Form validation and submission
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            if (validateForm()) {
                submitForm();
            }
        });

        // Real-time validation
        const inputs = contactForm.querySelectorAll('input, select, textarea');
        inputs.forEach(input => {
            input.addEventListener('blur', function() {
                validateField(this);
            });
            
            input.addEventListener('input', function() {
                clearFieldError(this);
            });
        });
    }

    // Form validation function
    function validateForm() {
        let isValid = true;
        const requiredFields = contactForm.querySelectorAll('[required]');
        
        requiredFields.forEach(field => {
            if (!validateField(field)) {
                isValid = false;
            }
        });

        // Email validation
        const emailField = contactForm.querySelector('#email');
        if (emailField && emailField.value) {
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(emailField.value)) {
                showFieldError(emailField, 'Please enter a valid email address');
                isValid = false;
            }
        }

        // Phone validation (if provided)
        const phoneField = contactForm.querySelector('#phone');
        if (phoneField && phoneField.value) {
            const phoneRegex = /^[\+]?[1-9][\d]{0,15}$/;
            if (!phoneRegex.test(phoneField.value.replace(/\s/g, ''))) {
                showFieldError(phoneField, 'Please enter a valid phone number');
                isValid = false;
            }
        }

        return isValid;
    }

    // Individual field validation
    function validateField(field) {
        const value = field.value.trim();
        
        if (field.hasAttribute('required') && !value) {
            showFieldError(field, 'This field is required');
            return false;
        }
        
        if (field.type === 'email' && value) {
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(value)) {
                showFieldError(field, 'Please enter a valid email address');
                return false;
            }
        }
        
        clearFieldError(field);
        return true;
    }

    // Show field error
    function showFieldError(field, message) {
        clearFieldError(field);
        
        field.style.borderColor = '#dc3545';
        field.style.boxShadow = '0 0 0 3px rgba(220, 53, 69, 0.1)';
        
        const errorDiv = document.createElement('div');
        errorDiv.className = 'field-error';
        errorDiv.textContent = message;
        errorDiv.style.cssText = `
            color: #dc3545;
            font-size: 0.8rem;
            margin-top: 0.25rem;
            animation: fadeIn 0.3s ease;
        `;
        
        field.parentNode.appendChild(errorDiv);
    }

    // Clear field error
    function clearFieldError(field) {
        field.style.borderColor = '#ddd';
        field.style.boxShadow = '';
        
        const errorDiv = field.parentNode.querySelector('.field-error');
        if (errorDiv) {
            errorDiv.remove();
        }
    }

    // Form submission
    function submitForm() {
        const formData = new FormData(contactForm);
        const submitButton = contactForm.querySelector('.btn-submit');
        const originalText = submitButton.textContent;
        
        // Show loading state
        submitButton.textContent = 'Sending...';
        submitButton.disabled = true;
        submitButton.style.opacity = '0.7';
        
        // Simulate form submission (replace with actual API call)
        setTimeout(() => {
            // Success state
            submitButton.textContent = 'Message Sent!';
            submitButton.style.background = '#28a745';
            
            // Show success message
            showNotification('Thank you! Your message has been sent successfully. We\'ll get back to you soon.', 'success');
            
            // Reset form
            contactForm.reset();
            
            // Reset button after 3 seconds
            setTimeout(() => {
                submitButton.textContent = originalText;
                submitButton.disabled = false;
                submitButton.style.opacity = '1';
                submitButton.style.background = '#ff6b35';
            }, 3000);
            
        }, 2000);
    }

    // Support button functionality
    supportButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            e.preventDefault();
            
            const buttonText = this.textContent.trim();
            
            switch(buttonText) {
                case 'Start Chat':
                    showNotification('Opening live chat... Please wait while we connect you to our support team.', 'info');
                    // Simulate chat opening
                    setTimeout(() => {
                        showNotification('Chat connected! A support agent will be with you shortly.', 'success');
                    }, 2000);
                    break;
                    
                case 'Call Now':
                    showNotification('Initiating call... Please wait.', 'info');
                    // Simulate call initiation
                    setTimeout(() => {
                        showNotification('Call connected! You\'re now speaking with our support team.', 'success');
                    }, 1500);
                    break;
                    
                case 'Message Us':
                    showNotification('Opening WhatsApp... Please wait.', 'info');
                    // Simulate WhatsApp opening
                    setTimeout(() => {
                        showNotification('WhatsApp opened! You can now send us a message.', 'success');
                    }, 1000);
                    break;
            }
        });
    });

    // Map button functionality
    if (mapButton) {
        mapButton.addEventListener('click', function(e) {
            e.preventDefault();
            
            showNotification('Opening interactive map...', 'info');
            
            // Simulate map opening
            setTimeout(() => {
                const mapModal = document.createElement('div');
                mapModal.className = 'map-modal';
                mapModal.style.cssText = `
                    position: fixed;
                    top: 0;
                    left: 0;
                    width: 100%;
                    height: 100%;
                    background: rgba(0, 0, 0, 0.8);
                    z-index: 3000;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    animation: fadeIn 0.3s ease;
                `;
                
                mapModal.innerHTML = `
                    <div class="map-content" style="
                        background: white;
                        border-radius: 20px;
                        padding: 2rem;
                        max-width: 800px;
                        width: 90%;
                        max-height: 80vh;
                        overflow-y: auto;
                        position: relative;
                    ">
                        <button class="close-map" style="
                            position: absolute;
                            top: 1rem;
                            right: 1rem;
                            background: none;
                            border: none;
                            font-size: 1.5rem;
                            cursor: pointer;
                            color: #666;
                        ">&times;</button>
                        
                        <h3 style="margin-bottom: 1rem; color: #333;">Our Location & Delivery Coverage</h3>
                        
                        <div class="map-placeholder" style="
                            background: #f8f9fa;
                            height: 300px;
                            border-radius: 10px;
                            display: flex;
                            align-items: center;
                            justify-content: center;
                            margin-bottom: 1rem;
                        ">
                            <div style="text-align: center;">
                                <i class="fas fa-map-marked-alt" style="font-size: 3rem; color: #ff6b35; margin-bottom: 1rem;"></i>
                                <p style="color: #666;">Interactive Map Loading...</p>
                            </div>
                        </div>
                        
                        <div class="location-info">
                            <h4 style="color: #333; margin-bottom: 0.5rem;">Office Address:</h4>
                            <p style="color: #666; margin-bottom: 1rem;">123 Food Street, City, State 12345</p>
                            
                            <h4 style="color: #333; margin-bottom: 0.5rem;">Delivery Coverage:</h4>
                            <ul style="color: #666; margin-bottom: 1rem;">
                                <li>Downtown Area - 15 min delivery</li>
                                <li>Midtown Area - 25 min delivery</li>
                                <li>Suburban Areas - 35 min delivery</li>
                                <li>Extended Areas - 45 min delivery</li>
                            </ul>
                            
                            <h4 style="color: #333; margin-bottom: 0.5rem;">Business Hours:</h4>
                            <p style="color: #666;">Monday - Sunday: 8:00 AM - 11:00 PM</p>
                        </div>
                    </div>
                `;
                
                document.body.appendChild(mapModal);
                
                // Close map modal
                const closeMap = mapModal.querySelector('.close-map');
                closeMap.addEventListener('click', () => {
                    mapModal.remove();
                });
                
                mapModal.addEventListener('click', (e) => {
                    if (e.target === mapModal) {
                        mapModal.remove();
                    }
                });
                
            }, 1000);
        });
    }

    // FAQ accordion functionality
    const faqItems = document.querySelectorAll('.faq-item');
    faqItems.forEach(item => {
        const question = item.querySelector('h4');
        const answer = item.querySelector('p');
        
        if (question && answer) {
            // Initially hide answers
            answer.style.display = 'none';
            answer.style.transition = 'all 0.3s ease';
            
            // Add click functionality
            question.style.cursor = 'pointer';
            question.addEventListener('click', function() {
                const isOpen = answer.style.display === 'block';
                
                // Close all other FAQ items
                faqItems.forEach(otherItem => {
                    const otherAnswer = otherItem.querySelector('p');
                    if (otherAnswer) {
                        otherAnswer.style.display = 'none';
                    }
                });
                
                // Toggle current item
                if (!isOpen) {
                    answer.style.display = 'block';
                    question.style.color = '#ff6b35';
                } else {
                    answer.style.display = 'none';
                    question.style.color = '#333';
                }
            });
            
            // Add hover effect
            question.addEventListener('mouseenter', function() {
                this.style.color = '#ff6b35';
            });
            
            question.addEventListener('mouseleave', function() {
                if (answer.style.display === 'none') {
                    this.style.color = '#333';
                }
            });
        }
    });

    // Social link functionality
    const socialLinks = document.querySelectorAll('.social-link');
    socialLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            const platform = this.querySelector('span').textContent;
            showNotification(`Opening ${platform}...`, 'info');
            
            // Simulate social media opening
            setTimeout(() => {
                showNotification(`${platform} opened in a new tab!`, 'success');
            }, 1000);
        });
    });

    // Contact card hover effects
    const contactCards = document.querySelectorAll('.contact-card');
    contactCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-10px) scale(1.02)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });
    });

    // Auto-fill form with demo data (for testing)
    const demoButton = document.createElement('button');
    demoButton.textContent = 'Fill Demo Data';
    demoButton.style.cssText = `
        background: #6c757d;
        color: white;
        border: none;
        padding: 0.5rem 1rem;
        border-radius: 5px;
        cursor: pointer;
        margin-bottom: 1rem;
        font-size: 0.9rem;
    `;
    
    demoButton.addEventListener('click', function() {
        const demoData = {
            firstName: 'John',
            lastName: 'Doe',
            email: 'john.doe@example.com',
            phone: '+1234567890',
            subject: 'general',
            message: 'This is a demo message to test the contact form functionality. Thank you!'
        };
        
        Object.keys(demoData).forEach(key => {
            const field = contactForm.querySelector(`[name="${key}"]`);
            if (field) {
                field.value = demoData[key];
            }
        });
        
        // Check newsletter checkbox
        const newsletterCheckbox = contactForm.querySelector('#newsletter');
        if (newsletterCheckbox) {
            newsletterCheckbox.checked = true;
        }
        
        showNotification('Demo data filled! You can now test the form submission.', 'info');
    });
    
    // Insert demo button before form
    if (contactForm) {
        contactForm.parentNode.insertBefore(demoButton, contactForm);
    }

    // Keyboard shortcuts
    document.addEventListener('keydown', function(e) {
        // Ctrl/Cmd + Enter to submit form
        if ((e.ctrlKey || e.metaKey) && e.key === 'Enter') {
            if (document.activeElement.tagName === 'TEXTAREA') {
                e.preventDefault();
                contactForm.dispatchEvent(new Event('submit'));
            }
        }
        
        // Escape to close modals
        if (e.key === 'Escape') {
            const mapModal = document.querySelector('.map-modal');
            if (mapModal) {
                mapModal.remove();
            }
        }
    });

    // Form character counter for message field
    const messageField = contactForm.querySelector('#message');
    if (messageField) {
        const counter = document.createElement('div');
        counter.className = 'char-counter';
        counter.style.cssText = `
            text-align: right;
            font-size: 0.8rem;
            color: #666;
            margin-top: 0.25rem;
        `;
        
        messageField.parentNode.appendChild(counter);
        
        function updateCounter() {
            const length = messageField.value.length;
            const maxLength = 1000;
            counter.textContent = `${length}/${maxLength} characters`;
            
            if (length > maxLength * 0.9) {
                counter.style.color = '#ff6b35';
            } else {
                counter.style.color = '#666';
            }
        }
        
        messageField.addEventListener('input', updateCounter);
        updateCounter(); // Initial count
    }
});

// Enhanced notification function with different types
function showNotification(message, type = 'info') {
    const notification = document.createElement('div');
    
    const colors = {
        success: '#28a745',
        error: '#dc3545',
        warning: '#ffc107',
        info: '#ff6b35'
    };
    
    notification.style.cssText = `
        position: fixed;
        top: 100px;
        right: 20px;
        background: ${colors[type]};
        color: white;
        padding: 1rem 1.5rem;
        border-radius: 10px;
        box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
        z-index: 3000;
        transform: translateX(400px);
        transition: transform 0.3s ease;
        max-width: 300px;
        font-weight: 500;
        animation: slideIn 0.3s ease forwards;
    `;
    notification.textContent = message;
    
    document.body.appendChild(notification);
    
    // Animate in
    setTimeout(() => {
        notification.style.transform = 'translateX(0)';
    }, 100);
    
    // Remove after 4 seconds
    setTimeout(() => {
        notification.style.transform = 'translateX(400px)';
        setTimeout(() => {
            if (document.body.contains(notification)) {
                document.body.removeChild(notification);
            }
        }, 300);
    }, 4000);
}

// Add CSS animations
const style = document.createElement('style');
style.textContent = `
    @keyframes slideIn {
        from {
            transform: translateX(400px);
            opacity: 0;
        }
        to {
            transform: translateX(0);
            opacity: 1;
        }
    }
    
    @keyframes fadeIn {
        from {
            opacity: 0;
        }
        to {
            opacity: 1;
        }
    }
    
    .field-error {
        animation: fadeIn 0.3s ease;
    }
    
    .contact-form-element input:focus,
    .contact-form-element select:focus,
    .contact-form-element textarea:focus {
        border-color: #ff6b35 !important;
        box-shadow: 0 0 0 3px rgba(255, 107, 53, 0.1) !important;
    }
    
    .contact-card:hover {
        transform: translateY(-10px) scale(1.02);
    }
    
    .faq-item h4:hover {
        color: #ff6b35;
    }
    
    .social-link:hover {
        transform: translateX(10px);
    }
`;
document.head.appendChild(style);