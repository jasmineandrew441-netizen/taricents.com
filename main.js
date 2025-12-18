// Main JavaScript for TARICENT Perfume Website
let cart = [];
let products = [];

// Initialize the website
document.addEventListener('DOMContentLoaded', function() {
    loadProducts();
    loadCart();
    setupEventListeners();
    updateCartCount();
    displayFeaturedProducts();
    loadSiteSettings();
});

// Setup event listeners
function setupEventListeners() {
    // Cart functionality
    const cartBtn = document.getElementById('cartBtn');
    const closeCart = document.getElementById('closeCart');
    const checkoutBtn = document.getElementById('checkoutBtn');
    const checkoutForm = document.getElementById('checkoutForm');
    
    if (cartBtn) {
        cartBtn.addEventListener('click', openCart);
    }
    
    if (closeCart) {
        closeCart.addEventListener('click', closeCartSidebar);
    }
    
    if (checkoutBtn) {
        checkoutBtn.addEventListener('click', openCheckoutModal);
    }
    
    if (checkoutForm) {
        checkoutForm.addEventListener('submit', handleCheckout);
    }
    
    // Mobile menu
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');
    
    if (hamburger && navMenu) {
        hamburger.addEventListener('click', function() {
            navMenu.classList.toggle('active');
            hamburger.classList.toggle('active');
        });
    }
    
    // Newsletter form
    const newsletterForm = document.querySelector('.newsletter-form');
    if (newsletterForm) {
        newsletterForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const email = e.target.querySelector('input[type="email"]').value;
            if (email) {
                showMessage('Thank you for subscribing!', 'success');
                e.target.reset();
            }
        });
    }
    
    // Close modal when clicking outside
    const modal = document.getElementById('checkoutModal');
    const closeModal = document.querySelector('.close-modal');
    
    if (closeModal) {
        closeModal.addEventListener('click', closeCheckoutModal);
    }
    
    if (modal) {
        window.addEventListener('click', function(e) {
            if (e.target === modal) {
                closeCheckoutModal();
            }
        });
    }
}

// Load products from localStorage or use `shopProducts` defaults (and listen for storage updates)
function loadProducts() {
    const storedProducts = localStorage.getItem('perfumeProducts');
    if (storedProducts) {
        try {
            products = JSON.parse(storedProducts);
        } catch (e) {
            console.error('Invalid perfumeProducts in localStorage', e);
            products = [];
        }
    } else if (typeof shopProducts !== 'undefined' && Array.isArray(shopProducts) && shopProducts.length) {
        products = JSON.parse(JSON.stringify(shopProducts));
        localStorage.setItem('perfumeProducts', JSON.stringify(products));
    } else {
        // Default products if none exist (fallback sample)
        products = [
            {
                id: 1,
                name: "Creed Aventus",
                category: "men",
                price: 85000,
                stock: 15,
                type: "Eau de Parfum",
                class: "Luxury",
                image: "https://images.unsplash.com/photo-1541643600914-78b084683601?w=300&h=300&fit=crop",
                notes: "Pineapple, Birch, Musk",
                description: "A sophisticated fragrance for the modern man",
                badge: "Popular"
            },
            {
                id: 2,
                name: "Chanel No. 5",
                category: "women",
                price: 95000,
                stock: 10,
                type: "Eau de Parfum",
                class: "Classic",
                image: "https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?w=300&h=300&fit=crop",
                notes: "Rose, Jasmine, Sandalwood",
                description: "Timeless elegance in a bottle",
                badge: "Bestseller"
            },
            {
                id: 3,
                name: "Dior Sauvage",
                category: "men",
                price: 75000,
                stock: 20,
                type: "Eau de Toilette",
                class: "Premium",
                image: "https://images.unsplash.com/photo-1556228720-195a672e8a03?w=300&h=300&fit=crop",
                notes: "Pepper, Bergamot, Ambroxan",
                description: "Raw and noble, inspired by the great outdoors",
                badge: "New"
            },
            {
                id: 4,
                name: "YSL Black Opium",
                category: "women",
                price: 88000,
                stock: 12,
                type: "Eau de Parfum",
                class: "Luxury",
                image: "https://images.unsplash.com/photo-1543169868-93a637ffac0f?w=300&h=300&fit=crop",
                notes: "Coffee, Vanilla, White Flowers",
                description: "Addictive and electrifying, a modern fragrance",
                badge: "Popular"
            }
        ];
        localStorage.setItem('perfumeProducts', JSON.stringify(products));
    }
}

// Listen for changes made in other tabs/windows and update UI
window.addEventListener('storage', function(e) {
    if (e.key === 'perfumeProducts') {
        try {
            products = JSON.parse(e.newValue || '[]');
        } catch (err) {
            console.error('Invalid perfumeProducts in storage event', err);
            products = [];
        }
        displayFeaturedProducts();
        // If shop page is open, reapply filters or re-render full list
        if (typeof displayAllProducts === 'function') {
            displayAllProducts();
        }
    }
});

// Load cart from localStorage
function loadCart() {
    const storedCart = localStorage.getItem('perfumeCart');
    if (storedCart) {
        cart = JSON.parse(storedCart);
    }
}

// Save cart to localStorage
function saveCart() {
    localStorage.setItem('perfumeCart', JSON.stringify(cart));
    updateCartCount();
}

// Update cart count display
function updateCartCount() {
    const cartCount = document.getElementById('cartCount');
    if (cartCount) {
        const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
        cartCount.textContent = totalItems;
    }
}

// Display featured products
function displayFeaturedProducts() {
    const featuredContainer = document.getElementById('featuredProducts');
    if (!featuredContainer) return;
    
    const featuredProducts = products.slice(0, 4);
    
    featuredContainer.innerHTML = featuredProducts.map(product => `
        <div class="product-card">
            <div class="product-image">
                <img src="${product.image}" alt="${product.name}">
                ${product.badge ? `<span class="product-badge">${product.badge}</span>` : ''}
            </div>
            <div class="product-info">
                <h3>${product.name}</h3>
                <p class="product-category">${product.category}</p>
                <p class="product-price">₦${product.price.toLocaleString()}</p>
                <button class="btn btn-primary" onclick="addToCart(${product.id})">
                    <i class="fas fa-shopping-cart"></i> Add to Cart
                </button>
            </div>
        </div>
    `).join('');
}

// Add product to cart
function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    if (!product) return;
    
    const existingItem = cart.find(item => item.id === productId);
    
    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        cart.push({
            id: product.id,
            name: product.name,
            price: product.price,
            image: product.image,
            quantity: 1
        });
    }
    
    saveCart();
    displayCartItems();
    showMessage(`${product.name} added to cart!`, 'success');
}

// Remove item from cart
function removeFromCart(productId) {
    cart = cart.filter(item => item.id !== productId);
    saveCart();
    displayCartItems();
}

// Update cart item quantity
function updateCartQuantity(productId, quantity) {
    const item = cart.find(item => item.id === productId);
    if (item) {
        item.quantity = Math.max(1, parseInt(quantity) || 1);
        saveCart();
        displayCartItems();
    }
}

// Display cart items
function displayCartItems() {
    const cartItems = document.getElementById('cartItems');
    const cartTotal = document.getElementById('cartTotal');
    
    if (!cartItems) return;
    
    if (cart.length === 0) {
        cartItems.innerHTML = '<p class="empty-cart">Your cart is empty</p>';
        if (cartTotal) cartTotal.textContent = '₦0';
        return;
    }
    
    cartItems.innerHTML = cart.map(item => `
        <div class="cart-item">
            <img src="${item.image}" alt="${item.name}" class="cart-item-image">
            <div class="cart-item-details">
                <h4>${item.name}</h4>
                <p>₦${item.price.toLocaleString()}</p>
            </div>
            <div class="cart-item-quantity">
                <input type="number" value="${item.quantity}" min="1" onchange="updateCartQuantity(${item.id}, this.value)">
            </div>
            <div class="cart-item-total">
                ₦${(item.price * item.quantity).toLocaleString()}
            </div>
            <button class="remove-item" onclick="removeFromCart(${item.id})">
                <i class="fas fa-trash"></i>
            </button>
        </div>
    `).join('');
    
    const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    if (cartTotal) cartTotal.textContent = `₦${total.toLocaleString()}`;
}

// Open cart sidebar
function openCart() {
    const cartSidebar = document.getElementById('cartSidebar');
    if (cartSidebar) {
        cartSidebar.classList.add('show');
        displayCartItems();
    }
}

// Close cart sidebar
function closeCartSidebar() {
    const cartSidebar = document.getElementById('cartSidebar');
    if (cartSidebar) {
        cartSidebar.classList.remove('show');
    }
}

// Open checkout modal
function openCheckoutModal() {
    if (cart.length === 0) {
        showMessage('Your cart is empty!', 'error');
        return;
    }
    
    const modal = document.getElementById('checkoutModal');
    if (modal) {
        modal.style.display = 'block';
        displayOrderSummary();
        loadBankDetails();
    }
}

// Close checkout modal
function closeCheckoutModal() {
    const modal = document.getElementById('checkoutModal');
    if (modal) {
        modal.style.display = 'none';
    }
}

// Display order summary
function displayOrderSummary() {
    const orderItems = document.getElementById('orderItems');
    const subtotalElement = document.getElementById('summarySubtotal');
    const totalElement = document.getElementById('summaryTotal');
    const deliveryFee = 1500;
    
    if (!orderItems) return;
    
    orderItems.innerHTML = cart.map(item => `
        <div class="order-item">
            <span>${item.name} x ${item.quantity}</span>
            <span>₦${(item.price * item.quantity).toLocaleString()}</span>
        </div>
    `).join('');
    
    const subtotal = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    const total = subtotal + deliveryFee;
    
    if (subtotalElement) subtotalElement.textContent = `₦${subtotal.toLocaleString()}`;
    if (totalElement) totalElement.textContent = `₦${total.toLocaleString()}`;
}

// Load bank details from settings
function loadBankDetails() {
    const settings = localStorage.getItem('siteSettings');
    if (settings) {
        const siteSettings = JSON.parse(settings);
        
        const bankNameElement = document.getElementById('displayBankNameCheckout');
        const accountNameElement = document.getElementById('displayAccountNameCheckout');
        const accountNumberElement = document.getElementById('displayAccountNumberCheckout');
        
        if (bankNameElement) bankNameElement.textContent = siteSettings.bankName || 'Not configured';
        if (accountNameElement) accountNameElement.textContent = siteSettings.accountName || 'Not configured';
        if (accountNumberElement) accountNumberElement.textContent = siteSettings.accountNumber || 'Not configured';
    }
}

// Handle checkout form submission
function handleCheckout(e) {
    e.preventDefault();
    
    const formData = {
        customerName: document.getElementById('customerName').value,
        customerEmail: document.getElementById('customerEmail').value,
        customerPhone: document.getElementById('customerPhone').value,
        deliveryAddress: document.getElementById('deliveryAddress').value,
        landmark: document.getElementById('landmark').value,
        items: cart,
        subtotal: cart.reduce((sum, item) => sum + (item.price * item.quantity), 0),
        deliveryFee: 1500,
        total: cart.reduce((sum, item) => sum + (item.price * item.quantity), 0) + 1500,
        date: new Date().toISOString(),
        status: 'pending'
    };
    
    // Save order to localStorage
    const orders = JSON.parse(localStorage.getItem('perfumeOrders') || '[]');
    const orderId = 'ORD' + String(orders.length + 1).padStart(3, '0');
    formData.id = orderId;
    orders.push(formData);
    localStorage.setItem('perfumeOrders', JSON.stringify(orders));
    
    // Clear cart
    cart = [];
    saveCart();
    closeCartSidebar();
    closeCheckoutModal();
    
    // Show success message
    showMessage(`Order placed successfully! Your order ID is ${orderId}`, 'success');
    
    // Reset form
    e.target.reset();
}

// Load site settings
function loadSiteSettings() {
    const settings = localStorage.getItem('siteSettings');
    if (settings) {
        const siteSettings = JSON.parse(settings);
        
        // Update hero section if settings exist
        const heroTitle = document.querySelector('.hero-title');
        const heroSubtitle = document.querySelector('.hero-subtitle');
        
        if (heroTitle && siteSettings.heroTitle) {
            heroTitle.textContent = siteSettings.heroTitle;
        }
        
        if (heroSubtitle && siteSettings.heroSubtitle) {
            heroSubtitle.textContent = siteSettings.heroSubtitle;
        }
    }
}

// Show message function
function showMessage(message, type) {
    // Create message element if it doesn't exist
    let messageDiv = document.getElementById('messageContainer');
    if (!messageDiv) {
        messageDiv = document.createElement('div');
        messageDiv.id = 'messageContainer';
        messageDiv.style.cssText = `
            position: fixed;
            top: 20px;
            right: 20px;
            z-index: 10000;
            max-width: 300px;
        `;
        document.body.appendChild(messageDiv);
    }
    
    const messageElement = document.createElement('div');
    messageElement.style.cssText = `
        padding: 15px;
        margin-bottom: 10px;
        border-radius: 5px;
        color: white;
        font-weight: 500;
        animation: slideIn 0.3s ease;
        ${type === 'success' ? 'background: #28a745;' : 'background: #dc3545;'}
    `;
    messageElement.textContent = message;
    
    messageDiv.appendChild(messageElement);
    
    // Remove message after 3 seconds
    setTimeout(() => {
        messageElement.style.animation = 'slideOut 0.3s ease';
        setTimeout(() => {
            if (messageElement.parentNode) {
                messageElement.parentNode.removeChild(messageElement);
            }
        }, 300);
    }, 3000);
}

// Add CSS animations
const style = document.createElement('style');
style.textContent = `
    @keyframes slideIn {
        from {
            transform: translateX(100%);
            opacity: 0;
        }
        to {
            transform: translateX(0);
            opacity: 1;
        }
    }
    
    @keyframes slideOut {
        from {
            transform: translateX(0);
            opacity: 1;
        }
        to {
            transform: translateX(100%);
            opacity: 0;
        }
    }
    
    .cart-sidebar {
        position: fixed;
        right: -400px;
        top: 0;
        width: 400px;
        height: 100vh;
        background: white;
        box-shadow: -2px 0 10px rgba(0,0,0,0.1);
        transition: right 0.3s ease;
        z-index: 1001;
        overflow-y: auto;
    }
    
    .cart-sidebar.show {
        right: 0;
    }
    
    .cart-header {
        padding: 20px;
        border-bottom: 1px solid #eee;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    
    .cart-items {
        padding: 20px;
        max-height: 60vh;
        overflow-y: auto;
    }
    
    .cart-item {
        display: flex;
        align-items: center;
        margin-bottom: 15px;
        padding: 10px;
        border: 1px solid #eee;
        border-radius: 5px;
    }
    
    .cart-item-image {
        width: 50px;
        height: 50px;
        object-fit: cover;
        border-radius: 5px;
        margin-right: 10px;
    }
    
    .cart-item-details {
        flex: 1;
    }
    
    .cart-item-quantity input {
        width: 60px;
        padding: 5px;
        border: 1px solid #ddd;
        border-radius: 3px;
        text-align: center;
    }
    
    .cart-item-total {
        font-weight: bold;
        margin: 0 10px;
    }
    
    .remove-item {
        background: #dc3545;
        color: white;
        border: none;
        padding: 5px 10px;
        border-radius: 3px;
        cursor: pointer;
    }
    
    .cart-footer {
        padding: 20px;
        border-top: 1px solid #eee;
    }
    
    .cart-total {
        display: flex;
        justify-content: space-between;
        margin-bottom: 15px;
        font-size: 1.2rem;
        font-weight: bold;
    }
    
    .empty-cart {
        text-align: center;
        color: #666;
        padding: 20px;
    }
    
    .modal {
        display: none;
        position: fixed;
        z-index: 1002;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        background: rgba(0,0,0,0.5);
    }
    
    .modal-content {
        background: white;
        margin: 5% auto;
        padding: 30px;
        border-radius: 10px;
        width: 90%;
        max-width: 600px;
        max-height: 80vh;
        overflow-y: auto;
    }
    
    .close-modal {
        float: right;
        font-size: 28px;
        font-weight: bold;
        cursor: pointer;
        color: #aaa;
    }
    
    .close-modal:hover {
        color: #000;
    }
    
    .form-group {
        margin-bottom: 20px;
    }
    
    .form-group label {
        display: block;
        margin-bottom: 5px;
        font-weight: 600;
    }
    
    .form-group input,
    .form-group textarea {
        width: 100%;
        padding: 10px;
        border: 1px solid #ddd;
        border-radius: 5px;
        font-size: 1rem;
    }
    
    .order-summary {
        background: #f8f9fa;
        padding: 20px;
        border-radius: 5px;
        margin: 20px 0;
    }
    
    .order-item {
        display: flex;
        justify-content: space-between;
        margin-bottom: 10px;
    }
    
    .summary-row {
        display: flex;
        justify-content: space-between;
        margin-bottom: 10px;
        padding-top: 10px;
        border-top: 1px solid #ddd;
    }
    
    .summary-row.total {
        font-weight: bold;
        font-size: 1.2rem;
        color: var(--primary-color);
    }
    
    .product-card {
        background: white;
        border-radius: 10px;
        overflow: hidden;
        box-shadow: 0 2px 10px rgba(0,0,0,0.1);
        transition: transform 0.3s;
    }
    
    .product-card:hover {
        transform: translateY(-5px);
    }
    
    .product-image {
        position: relative;
        height: 200px;
        overflow: hidden;
    }
    
    .product-image img {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
    
    .product-badge {
        position: absolute;
        top: 10px;
        right: 10px;
        background: var(--secondary-color);
        color: var(--dark-color);
        padding: 5px 10px;
        border-radius: 20px;
        font-size: 0.8rem;
        font-weight: bold;
    }
    
    .product-info {
        padding: 20px;
    }
    
    .product-info h3 {
        margin-bottom: 10px;
        color: var(--dark-color);
    }
    
    .product-category {
        color: var(--gray);
        font-size: 0.9rem;
        margin-bottom: 10px;
    }
    
    .product-price {
        font-size: 1.2rem;
        font-weight: bold;
        color: var(--primary-color);
        margin-bottom: 15px;
    }
    
    @media (max-width: 768px) {
        .cart-sidebar {
            width: 100%;
            right: -100%;
        }
        
        .nav-menu {
            position: fixed;
            left: -100%;
            top: 70px;
            flex-direction: column;
            background-color: white;
            width: 100%;
            text-align: center;
            transition: 0.3s;
            box-shadow: 0 10px 27px rgba(0,0,0,0.05);
            padding: 20px 0;
        }
        
        .nav-menu.active {
            left: 0;
        }
        
        .hamburger.active span:nth-child(2) {
            opacity: 0;
        }
        
        .hamburger.active span:nth-child(1) {
            transform: translateY(8px) rotate(45deg);
        }
        
        .hamburger.active span:nth-child(3) {
            transform: translateY(-8px) rotate(-45deg);
        }
    }
`;
document.head.appendChild(style);
