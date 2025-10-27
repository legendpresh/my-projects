// DOM Elements
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');
const cartBtn = document.querySelector('.cart-btn');
const cartModal = document.getElementById('cartModal');
const closeCart = document.querySelector('.close-cart');
const cartItems = document.querySelector('.cart-items');
const cartCount = document.querySelector('.cart-count');
const totalAmount = document.querySelector('.total-amount');
const addToCartButtons = document.querySelectorAll('.add-to-cart');
const searchSubmit = document.querySelector('.search-submit');
const searchInput = document.querySelector('.search-box input');

// Cart functionality
let cart = [];
let cartTotal = 0;

// Mobile Navigation Toggle
hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
});

// Close mobile menu when clicking on a link
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
    });
});

// Cart Modal Toggle
cartBtn.addEventListener('click', () => {
    cartModal.classList.add('active');
});

closeCart.addEventListener('click', () => {
    cartModal.classList.remove('active');
});

// Close cart when clicking outside
document.addEventListener('click', (e) => {
    if (e.target === cartModal) {
        cartModal.classList.remove('active');
    }
});

// Add to Cart functionality
addToCartButtons.forEach(button => {
    button.addEventListener('click', (e) => {
        e.preventDefault();
        const menuItem = button.closest('.menu-item');
        const itemName = menuItem.querySelector('h3').textContent;
        const itemPrice = parseFloat(menuItem.querySelector('.price').textContent.replace('$', ''));
        const itemImage = menuItem.querySelector('img').src;
        
        addToCart(itemName, itemPrice, itemImage);
        
        // Show success message
        showNotification(`${itemName} added to cart!`);
    });
});

// Enhanced add to cart functionality for menu page
document.addEventListener('click', (e) => {
    if (e.target.classList.contains('add-to-cart-btn')) {
        e.preventDefault();
        
        const menuItem = e.target.closest('.menu-item-large');
        if (menuItem) {
            const itemName = menuItem.querySelector('h3').textContent;
            const itemPrice = parseFloat(menuItem.querySelector('.price').textContent.replace('$', ''));
            const itemImage = menuItem.querySelector('img').src;
            const quantity = parseInt(menuItem.querySelector('.quantity').textContent);
            
            // Add item to cart with quantity
            for (let i = 0; i < quantity; i++) {
                addToCart(itemName, itemPrice, itemImage);
            }
            
            // Show success message
            showNotification(`${quantity}x ${itemName} added to cart!`);
            
            // Reset quantity to 1
            menuItem.querySelector('.quantity').textContent = '1';
        }
    }
});

function addToCart(name, price, image) {
    const existingItem = cart.find(item => item.name === name);
    
    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        cart.push({
            name: name,
            price: price,
            image: image,
            quantity: 1
        });
    }
    
    updateCart();
}

function updateCart() {
    cartCount.textContent = cart.reduce((total, item) => total + item.quantity, 0);
    cartTotal = cart.reduce((total, item) => total + (item.price * item.quantity), 0);
    totalAmount.textContent = `$${cartTotal.toFixed(2)}`;
    
    renderCartItems();
}

function renderCartItems() {
    cartItems.innerHTML = '';
    
    if (cart.length === 0) {
        cartItems.innerHTML = '<p style="text-align: center; color: #666; padding: 2rem;">Your cart is empty</p>';
        return;
    }
    
    cart.forEach(item => {
        const cartItem = document.createElement('div');
        cartItem.className = 'cart-item';
        cartItem.style.cssText = `
            display: flex;
            align-items: center;
            gap: 1rem;
            padding: 1rem 0;
            border-bottom: 1px solid #eee;
        `;
        
        cartItem.innerHTML = `
            <img src="${item.image}" alt="${item.name}" style="width: 60px; height: 60px; object-fit: cover; border-radius: 10px;">
            <div style="flex: 1;">
                <h4 style="margin: 0 0 0.5rem 0; font-size: 1rem;">${item.name}</h4>
                <p style="margin: 0; color: #ff6b35; font-weight: 600;">$${item.price.toFixed(2)}</p>
            </div>
            <div style="display: flex; align-items: center; gap: 0.5rem;">
                <button onclick="updateQuantity('${item.name}', -1)" style="background: #f8f9fa; border: none; width: 30px; height: 30px; border-radius: 50%; cursor: pointer;">-</button>
                <span style="font-weight: 600;">${item.quantity}</span>
                <button onclick="updateQuantity('${item.name}', 1)" style="background: #f8f9fa; border: none; width: 30px; height: 30px; border-radius: 50%; cursor: pointer;">+</button>
            </div>
        `;
        
        cartItems.appendChild(cartItem);
    });
}

function updateQuantity(itemName, change) {
    const item = cart.find(item => item.name === itemName);
    
    if (item) {
        item.quantity += change;
        
        if (item.quantity <= 0) {
            cart = cart.filter(cartItem => cartItem.name !== itemName);
        }
        
        updateCart();
    }
}

// Search functionality
searchSubmit.addEventListener('click', () => {
    const searchTerm = searchInput.value.trim();
    if (searchTerm) {
        showNotification(`Searching for restaurants near "${searchTerm}"...`);
        // Here you would typically make an API call to search for restaurants
    }
});

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Navbar scroll effect
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 100) {
        navbar.style.background = 'rgba(255, 255, 255, 0.98)';
        navbar.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.1)';
    } else {
        navbar.style.background = 'rgba(255, 255, 255, 0.95)';
        navbar.style.boxShadow = 'none';
    }
});

// Notification system
function showNotification(message) {
    const notification = document.createElement('div');
    notification.style.cssText = `
        position: fixed;
        top: 100px;
        right: 20px;
        background: #ff6b35;
        color: white;
        padding: 1rem 1.5rem;
        border-radius: 10px;
        box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
        z-index: 3000;
        transform: translateX(400px);
        transition: transform 0.3s ease;
        max-width: 300px;
        font-weight: 500;
    `;
    notification.textContent = message;
    
    document.body.appendChild(notification);
    
    // Animate in
    setTimeout(() => {
        notification.style.transform = 'translateX(0)';
    }, 100);
    
    // Remove after 3 seconds
    setTimeout(() => {
        notification.style.transform = 'translateX(400px)';
        setTimeout(() => {
            document.body.removeChild(notification);
        }, 300);
    }, 3000);
}

// Intersection Observer for animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe elements for animation
document.addEventListener('DOMContentLoaded', () => {
    const animatedElements = document.querySelectorAll('.category-card, .restaurant-card, .menu-item, .feature');
    
    animatedElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
});

// Checkout functionality
document.querySelector('.btn-checkout').addEventListener('click', () => {
    if (cart.length === 0) {
        showNotification('Your cart is empty!');
        return;
    }
    
    showNotification('Redirecting to checkout...');
    // Here you would typically redirect to a checkout page or open a payment modal
});

// Hero section buttons
document.querySelector('.btn-primary').addEventListener('click', () => {
    document.querySelector('#menu').scrollIntoView({ behavior: 'smooth' });
});

document.querySelector('.btn-secondary').addEventListener('click', () => {
    document.querySelector('#restaurants').scrollIntoView({ behavior: 'smooth' });
});

// Category cards click functionality
document.querySelectorAll('.category-card').forEach(card => {
    card.addEventListener('click', () => {
        const categoryName = card.querySelector('h3').textContent;
        showNotification(`Browsing ${categoryName} category...`);
        // Here you would typically filter the menu items by category
    });
});

// Restaurant cards click functionality
document.querySelectorAll('.restaurant-card').forEach(card => {
    card.addEventListener('click', () => {
        const restaurantName = card.querySelector('h3').textContent;
        showNotification(`Opening ${restaurantName} menu...`);
        // Here you would typically navigate to the restaurant's menu page
    });
});

// Form validation for search
searchInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        searchSubmit.click();
    }
});

// Prevent form submission on Enter key
document.addEventListener('keypress', (e) => {
    if (e.key === 'Enter' && e.target.tagName !== 'INPUT') {
        e.preventDefault();
    }
});

// Loading animation
window.addEventListener('load', () => {
    document.body.style.opacity = '0';
    document.body.style.transition = 'opacity 0.5s ease';
    
    setTimeout(() => {
        document.body.style.opacity = '1';
    }, 100);
});

// Error handling for images
document.querySelectorAll('img').forEach(img => {
    img.addEventListener('error', function() {
        this.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgdmlld0JveD0iMCAwIDIwMCAyMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIiBmaWxsPSIjRjVGNUY1Ii8+CjxwYXRoIGQ9Ik04MCAxMDBDODAgODkuNTQ0NyA4OC4wMDAxIDgxIDEwMCA4MUMxMTEuOTk5IDgxIDEyMCA4OS41NDQ3IDEyMCAxMEMxMjAgMTEwLjQ1NSAxMTEuOTk5IDExOSAxMDAgMTE5Qzg4LjAwMDEgMTE5IDgwIDExMC40NTUgODAgMTAwWiIgZmlsbD0iI0NDQ0NDQyIvPgo8L3N2Zz4K';
    });
});

// Performance optimization - lazy loading for images
if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.classList.remove('lazy');
                imageObserver.unobserve(img);
            }
        });
    });

    document.querySelectorAll('img[data-src]').forEach(img => {
        imageObserver.observe(img);
    });
}