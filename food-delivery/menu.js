// Menu Page JavaScript

// Category filtering functionality
document.addEventListener('DOMContentLoaded', function() {
    const categoryTabs = document.querySelectorAll('.category-tab');
    const menuItems = document.querySelectorAll('.menu-item-large');

    // Category filter function
    function filterMenu(category) {
        menuItems.forEach(item => {
            const itemCategory = item.getAttribute('data-category');
            
            if (category === 'all' || itemCategory === category) {
                item.style.display = 'block';
                item.style.animation = 'fadeInUp 0.6s ease forwards';
            } else {
                item.style.display = 'none';
            }
        });
    }

    // Add click event to category tabs
    categoryTabs.forEach(tab => {
        tab.addEventListener('click', function() {
            // Remove active class from all tabs
            categoryTabs.forEach(t => t.classList.remove('active'));
            
            // Add active class to clicked tab
            this.classList.add('active');
            
            // Get category from data attribute
            const category = this.getAttribute('data-category');
            
            // Filter menu items
            filterMenu(category);
            
            // Show notification
            const categoryName = this.textContent;
            showNotification(`Showing ${categoryName} items`);
        });
    });

    // Quantity controls functionality
    const quantityControls = document.querySelectorAll('.quantity-controls');
    
    quantityControls.forEach(control => {
        const minusBtn = control.querySelector('.minus');
        const plusBtn = control.querySelector('.plus');
        const quantitySpan = control.querySelector('.quantity');
        
        if (minusBtn && plusBtn && quantitySpan) {
            let quantity = parseInt(quantitySpan.textContent);
            
            minusBtn.addEventListener('click', function() {
                if (quantity > 1) {
                    quantity--;
                    quantitySpan.textContent = quantity;
                }
            });
            
            plusBtn.addEventListener('click', function() {
                quantity++;
                quantitySpan.textContent = quantity;
            });
        }
    });

    // Enhanced add to cart functionality
    const addToCartButtons = document.querySelectorAll('.add-to-cart-btn');
    
    addToCartButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            e.preventDefault();
            
            const menuItem = this.closest('.menu-item-large');
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
        });
    });

    // Search functionality for menu items
    const searchInput = document.createElement('input');
    searchInput.type = 'text';
    searchInput.placeholder = 'Search menu items...';
    searchInput.className = 'menu-search';
    searchInput.style.cssText = `
        width: 100%;
        max-width: 400px;
        padding: 1rem 1.5rem;
        border: 1px solid #ddd;
        border-radius: 25px;
        font-size: 1rem;
        margin: 0 auto 2rem;
        display: block;
    `;

    // Insert search input before category tabs
    const categoryTabsContainer = document.querySelector('.category-tabs');
    if (categoryTabsContainer) {
        categoryTabsContainer.parentNode.insertBefore(searchInput, categoryTabsContainer);
    }

    // Search functionality
    searchInput.addEventListener('input', function() {
        const searchTerm = this.value.toLowerCase().trim();
        
        menuItems.forEach(item => {
            const itemName = item.querySelector('h3').textContent.toLowerCase();
            const itemDescription = item.querySelector('.description').textContent.toLowerCase();
            
            if (itemName.includes(searchTerm) || itemDescription.includes(searchTerm)) {
                item.style.display = 'block';
            } else {
                item.style.display = 'none';
            }
        });
        
        // Reset category tabs
        categoryTabs.forEach(tab => tab.classList.remove('active'));
        categoryTabs[0].classList.add('active'); // Set "All Items" as active
    });

    // Favorite functionality
    const favoriteButtons = document.querySelectorAll('.btn-favorite');
    
    favoriteButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            e.preventDefault();
            e.stopPropagation();
            
            const icon = this.querySelector('i');
            const isFavorited = this.classList.contains('favorited');
            
            if (isFavorited) {
                this.classList.remove('favorited');
                icon.className = 'far fa-heart';
                showNotification('Removed from favorites');
            } else {
                this.classList.add('favorited');
                icon.className = 'fas fa-heart';
                showNotification('Added to favorites');
            }
        });
    });

    // Price range filter
    const priceRanges = [
        { min: 0, max: 10, label: 'Under $10' },
        { min: 10, max: 20, label: '$10 - $20' },
        { min: 20, max: 30, label: '$20 - $30' },
        { min: 30, max: 1000, label: 'Over $30' }
    ];

    const priceFilterContainer = document.createElement('div');
    priceFilterContainer.className = 'price-filter';
    priceFilterContainer.style.cssText = `
        display: flex;
        justify-content: center;
        gap: 1rem;
        margin-bottom: 2rem;
        flex-wrap: wrap;
    `;

    priceRanges.forEach(range => {
        const filterBtn = document.createElement('button');
        filterBtn.textContent = range.label;
        filterBtn.className = 'price-filter-btn';
        filterBtn.style.cssText = `
            background: white;
            border: 1px solid #ddd;
            padding: 0.5rem 1rem;
            border-radius: 20px;
            cursor: pointer;
            transition: all 0.3s ease;
            font-size: 0.9rem;
        `;
        
        filterBtn.addEventListener('click', function() {
            // Remove active class from all price filter buttons
            document.querySelectorAll('.price-filter-btn').forEach(btn => {
                btn.style.background = 'white';
                btn.style.color = '#333';
            });
            
            // Add active class to clicked button
            this.style.background = '#ff6b35';
            this.style.color = 'white';
            
            // Filter by price
            menuItems.forEach(item => {
                const price = parseFloat(item.querySelector('.price').textContent.replace('$', ''));
                
                if (price >= range.min && price <= range.max) {
                    item.style.display = 'block';
                } else {
                    item.style.display = 'none';
                }
            });
            
            showNotification(`Showing items ${range.label}`);
        });
        
        priceFilterContainer.appendChild(filterBtn);
    });

    // Insert price filter before menu grid
    const menuGrid = document.querySelector('.menu-grid-large');
    if (menuGrid) {
        menuGrid.parentNode.insertBefore(priceFilterContainer, menuGrid);
    }

    // Sort functionality
    const sortOptions = [
        { value: 'name', label: 'Name A-Z' },
        { value: 'price-low', label: 'Price: Low to High' },
        { value: 'price-high', label: 'Price: High to Low' },
        { value: 'rating', label: 'Rating' }
    ];

    const sortContainer = document.createElement('div');
    sortContainer.className = 'sort-container';
    sortContainer.style.cssText = `
        display: flex;
        justify-content: center;
        margin-bottom: 2rem;
    `;

    const sortSelect = document.createElement('select');
    sortSelect.style.cssText = `
        padding: 0.75rem 1rem;
        border: 1px solid #ddd;
        border-radius: 10px;
        background: white;
        font-size: 1rem;
        cursor: pointer;
    `;

    sortOptions.forEach(option => {
        const optionElement = document.createElement('option');
        optionElement.value = option.value;
        optionElement.textContent = option.label;
        sortSelect.appendChild(optionElement);
    });

    sortSelect.addEventListener('change', function() {
        const sortBy = this.value;
        const menuGrid = document.querySelector('.menu-grid-large');
        const items = Array.from(menuGrid.children);
        
        items.sort((a, b) => {
            switch(sortBy) {
                case 'name':
                    const nameA = a.querySelector('h3').textContent;
                    const nameB = b.querySelector('h3').textContent;
                    return nameA.localeCompare(nameB);
                
                case 'price-low':
                    const priceA = parseFloat(a.querySelector('.price').textContent.replace('$', ''));
                    const priceB = parseFloat(b.querySelector('.price').textContent.replace('$', ''));
                    return priceA - priceB;
                
                case 'price-high':
                    const priceC = parseFloat(a.querySelector('.price').textContent.replace('$', ''));
                    const priceD = parseFloat(b.querySelector('.price').textContent.replace('$', ''));
                    return priceD - priceC;
                
                case 'rating':
                    const ratingA = parseFloat(a.querySelector('.rating span').textContent);
                    const ratingB = parseFloat(b.querySelector('.rating span').textContent);
                    return ratingB - ratingA;
                
                default:
                    return 0;
            }
        });
        
        // Reorder items in the grid
        items.forEach(item => menuGrid.appendChild(item));
        
        showNotification(`Sorted by ${this.options[this.selectedIndex].text}`);
    });

    sortContainer.appendChild(sortSelect);
    
    // Insert sort container before menu grid
    if (menuGrid) {
        menuGrid.parentNode.insertBefore(sortContainer, menuGrid);
    }

    // Quick add to cart from quantity controls
    quantityControls.forEach(control => {
        const addBtn = control.querySelector('.plus');
        const menuItem = control.closest('.menu-item-large');
        
        if (addBtn && menuItem) {
            addBtn.addEventListener('dblclick', function() {
                const itemName = menuItem.querySelector('h3').textContent;
                const itemPrice = parseFloat(menuItem.querySelector('.price').textContent.replace('$', ''));
                const itemImage = menuItem.querySelector('img').src;
                const quantity = parseInt(menuItem.querySelector('.quantity').textContent);
                
                // Add item to cart
                for (let i = 0; i < quantity; i++) {
                    addToCart(itemName, itemPrice, itemImage);
                }
                
                showNotification(`${quantity}x ${itemName} added to cart!`);
                
                // Reset quantity
                menuItem.querySelector('.quantity').textContent = '1';
            });
        }
    });

    // Keyboard shortcuts
    document.addEventListener('keydown', function(e) {
        // Ctrl/Cmd + F to focus search
        if ((e.ctrlKey || e.metaKey) && e.key === 'f') {
            e.preventDefault();
            searchInput.focus();
        }
        
        // Escape to clear search
        if (e.key === 'Escape') {
            searchInput.value = '';
            searchInput.dispatchEvent(new Event('input'));
        }
    });

    // Initialize tooltips for menu items
    menuItems.forEach(item => {
        const price = item.querySelector('.price').textContent;
        const rating = item.querySelector('.rating span').textContent;
        const restaurant = item.querySelector('.restaurant').textContent;
        
        item.title = `${item.querySelector('h3').textContent} - ${price} | Rating: ${rating} | From: ${restaurant}`;
    });
});

// Enhanced notification function
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
        animation: slideIn 0.3s ease forwards;
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
            if (document.body.contains(notification)) {
                document.body.removeChild(notification);
            }
        }, 300);
    }, 3000);
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
    
    @keyframes fadeInUp {
        from {
            opacity: 0;
            transform: translateY(30px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }
    
    .menu-search:focus {
        outline: none;
        border-color: #ff6b35;
        box-shadow: 0 0 0 3px rgba(255, 107, 53, 0.1);
    }
    
    .price-filter-btn:hover {
        background: #ff6b35 !important;
        color: white !important;
    }
    
    .btn-favorite.favorited {
        background: #ff6b35 !important;
        color: white !important;
        border-color: #ff6b35 !important;
    }
`;
document.head.appendChild(style);