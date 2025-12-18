// Admin Dashboard JavaScript
let products = [];
let orders = [];
let currentEditProductId = null;

// Initialize dashboard
document.addEventListener('DOMContentLoaded', function() {
    loadProducts();
    loadOrders();
    loadDashboardStats();
    loadSiteSettings();
    updateAdminTime();
    setInterval(updateAdminTime, 1000);
});

// Update admin time display
function updateAdminTime() {
    const now = new Date();
    const timeString = now.toLocaleString('en-US', {
        weekday: 'short',
        year: 'numeric',
        month: 'short',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit'
    });
    const timeElement = document.getElementById('adminTime');
    if (timeElement) {
        timeElement.textContent = timeString;
    }
}

// Show admin section
function showSection(sectionId) {
    // Hide all sections
    const sections = document.querySelectorAll('.admin-section');
    sections.forEach(section => section.classList.remove('active'));
    
    // Show selected section
    const targetSection = document.getElementById(sectionId);
    if (targetSection) {
        targetSection.classList.add('active');
    }
    
    // Update active menu
    const menuItems = document.querySelectorAll('.admin-menu a');
    menuItems.forEach(item => item.classList.remove('active'));
    
    const activeMenuItem = document.querySelector(`.admin-menu a[onclick="showSection('${sectionId}')"]`);
    if (activeMenuItem) {
        activeMenuItem.classList.add('active');
    }
    
    // Load section-specific data
    if (sectionId === 'products') {
        loadProducts();
    } else if (sectionId === 'orders') {
        loadOrders();
    } else if (sectionId === 'dashboard') {
        loadDashboardStats();
    }
}

// Toggle mobile sidebar
function toggleSidebar() {
    const sidebar = document.getElementById('adminSidebar');
    if (sidebar) {
        sidebar.classList.toggle('show');
    }
}

// Load products for admin (prefer `shopProducts` from products.js and sync to localStorage)
function loadProducts() {
    // If the canonical `shopProducts` array is available, prefer it so admin sees the full site list
    if (typeof shopProducts !== 'undefined' && Array.isArray(shopProducts) && shopProducts.length) {
        products = JSON.parse(JSON.stringify(shopProducts));
        // Sync to localStorage so changes reflect across site
        try {
            localStorage.setItem('perfumeProducts', JSON.stringify(products));
        } catch (e) {
            console.error('Could not sync products to localStorage', e);
        }
    } else {
        // Fall back to reading from localStorage if shopProducts is not present
        const storedProducts = localStorage.getItem('perfumeProducts');
        if (storedProducts) {
            try {
                products = JSON.parse(storedProducts);
            } catch (e) {
                console.error('Invalid perfumeProducts in localStorage', e);
                products = [];
            }
        } else {
            // Initialize with sample products in case nothing else is available
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
                }
            ];
            saveProducts();
        }
    }

    displayProducts();
}

// Save products to localStorage
function saveProducts() {
    localStorage.setItem('perfumeProducts', JSON.stringify(products));
}

// Display products in table
function displayProducts() {
    const tbody = document.getElementById('productsTableBody');
    if (!tbody) return;
    
    if (products.length === 0) {
        tbody.innerHTML = '<tr><td colspan="6">No products found</td></tr>';
        return;
    }
    
    tbody.innerHTML = products.map(product => `
        <tr>
            <td><img src="${product.image || 'https://via.placeholder.com/50'}" alt="${product.name}" class="product-img"></td>
            <td>${product.name}</td>
            <td>${product.category}</td>
            <td>₦${product.price.toLocaleString()}</td>
            <td>${product.stock}</td>
            <td>
                <div class="action-buttons">
                    <button class="btn btn-warning btn-sm" onclick="editProduct(${product.id})">
                        <i class="fas fa-edit"></i>
                    </button>
                    <button class="btn btn-danger btn-sm" onclick="deleteProduct(${product.id})">
                        <i class="fas fa-trash"></i>
                    </button>
                </div>
            </td>
        </tr>
    `).join('');
}

// Open product modal
function openProductModal(productId = null) {
    currentEditProductId = productId;
    const modal = document.getElementById('productModal');
    const title = document.getElementById('productModalTitle');
    const form = document.getElementById('productForm');
    
    if (!modal || !title || !form) return;
    
    if (productId) {
        const product = products.find(p => p.id === productId);
        if (product) {
            title.textContent = 'Edit Product';
            document.getElementById('productName').value = product.name;
            document.getElementById('productCategory').value = product.category;
            document.getElementById('productPrice').value = product.price;
            document.getElementById('productStock').value = product.stock;
            document.getElementById('productType').value = product.type || 'Eau de Parfum';
            document.getElementById('productClass').value = product.class || 'Premium';
            document.getElementById('productImage').value = product.image || '';
            document.getElementById('productNotes').value = product.notes || '';
            document.getElementById('productDescription').value = product.description || '';
            document.getElementById('productBadge').value = product.badge || '';
        }
    } else {
        title.textContent = 'Add New Product';
        form.reset();
    }
    
    modal.style.display = 'block';
}

// Close product modal
function closeProductModal() {
    const modal = document.getElementById('productModal');
    if (modal) {
        modal.style.display = 'none';
    }
    currentEditProductId = null;
}

// Edit product
function editProduct(productId) {
    openProductModal(productId);
}

// Delete product
function deleteProduct(productId) {
    if (confirm('Are you sure you want to delete this product?')) {
        products = products.filter(p => p.id !== productId);
        saveProducts();
        displayProducts();
        showMessage('Product deleted successfully', 'success');
    }
}

// Handle product form submission
document.addEventListener('DOMContentLoaded', function() {
    const productForm = document.getElementById('productForm');
    if (productForm) {
        productForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const productData = {
                name: document.getElementById('productName').value,
                category: document.getElementById('productCategory').value,
                price: parseInt(document.getElementById('productPrice').value),
                stock: parseInt(document.getElementById('productStock').value),
                type: document.getElementById('productType').value,
                class: document.getElementById('productClass').value,
                image: document.getElementById('productImage').value,
                notes: document.getElementById('productNotes').value,
                description: document.getElementById('productDescription').value,
                badge: document.getElementById('productBadge').value
            };
            
            if (currentEditProductId) {
                // Update existing product
                const index = products.findIndex(p => p.id === currentEditProductId);
                if (index !== -1) {
                    products[index] = { ...products[index], ...productData };
                }
                showMessage('Product updated successfully', 'success');
            } else {
                // Add new product
                const newProduct = {
                    id: Date.now(),
                    ...productData
                };
                products.push(newProduct);
                showMessage('Product added successfully', 'success');
            }
            
            saveProducts();
            displayProducts();
            closeProductModal();
        });
    }
});

// Load orders
function loadOrders() {
    const storedOrders = localStorage.getItem('perfumeOrders');
    if (storedOrders) {
        orders = JSON.parse(storedOrders);
    } else {
        // Initialize with sample orders if empty
        orders = [
            {
                id: 'ORD001',
                customer: 'John Doe',
                email: 'john@example.com',
                phone: '+2341234567890',
                date: new Date().toISOString(),
                total: 85000,
                status: 'pending',
                items: [{ name: 'Creed Aventus', quantity: 1, price: 85000 }]
            }
        ];
        saveOrders();
    }
    displayOrders();
}

// Save orders to localStorage
function saveOrders() {
    localStorage.setItem('perfumeOrders', JSON.stringify(orders));
}

// Display orders in table
function displayOrders() {
    const tbody = document.getElementById('ordersTableBody');
    if (!tbody) return;
    
    if (orders.length === 0) {
        tbody.innerHTML = '<tr><td colspan="6">No orders found</td></tr>';
        return;
    }
    
    tbody.innerHTML = orders.map(order => `
        <tr>
            <td>${order.id}</td>
            <td>${order.customer}</td>
            <td>${new Date(order.date).toLocaleDateString()}</td>
            <td>₦${order.total.toLocaleString()}</td>
            <td><span class="status-badge status-${order.status}">${order.status}</span></td>
            <td>
                <div class="action-buttons">
                    <button class="btn btn-success btn-sm" onclick="updateOrderStatus('${order.id}', 'completed')">
                        <i class="fas fa-check"></i>
                    </button>
                    <button class="btn btn-warning btn-sm" onclick="updateOrderStatus('${order.id}', 'processing')">
                        <i class="fas fa-clock"></i>
                    </button>
                </div>
            </td>
        </tr>
    `).join('');
}

// Update order status
function updateOrderStatus(orderId, newStatus) {
    const order = orders.find(o => o.id === orderId);
    if (order) {
        order.status = newStatus;
        saveOrders();
        displayOrders();
        showMessage(`Order status updated to ${newStatus}`, 'success');
    }
}

// Load dashboard statistics
function loadDashboardStats() {
    const totalProducts = products.length;
    const totalOrders = orders.length;
    const totalRevenue = orders.reduce((sum, order) => sum + order.total, 0);
    const totalCustomers = [...new Set(orders.map(order => order.email))].length;
    
    const productsElement = document.getElementById('totalProducts');
    const ordersElement = document.getElementById('totalOrders');
    const revenueElement = document.getElementById('totalRevenue');
    const customersElement = document.getElementById('totalCustomers');
    
    if (productsElement) productsElement.textContent = totalProducts;
    if (ordersElement) ordersElement.textContent = totalOrders;
    if (revenueElement) revenueElement.textContent = `₦${totalRevenue.toLocaleString()}`;
    if (customersElement) customersElement.textContent = totalCustomers;
    
    // Load recent orders
    const recentOrdersElement = document.getElementById('recentOrders');
    if (recentOrdersElement) {
        const recentOrders = orders.slice(-5).reverse();
        if (recentOrders.length === 0) {
            recentOrdersElement.innerHTML = '<p>No recent orders</p>';
        } else {
            recentOrdersElement.innerHTML = recentOrders.map(order => `
                <div style="padding: 10px; border-bottom: 1px solid #eee; margin-bottom: 10px;">
                    <strong>${order.id}</strong> - ${order.customer}<br>
                    <small>Date: ${new Date(order.date).toLocaleDateString()} | Total: ₦${order.total.toLocaleString()}</small>
                </div>
            `).join('');
        }
    }
}

// Load site settings
function loadSiteSettings() {
    const settings = localStorage.getItem('siteSettings');
    if (settings) {
        const siteSettings = JSON.parse(settings);
        
        // Load bank settings
        if (document.getElementById('bankName')) document.getElementById('bankName').value = siteSettings.bankName || '';
        if (document.getElementById('accountName')) document.getElementById('accountName').value = siteSettings.accountName || '';
        if (document.getElementById('accountNumber')) document.getElementById('accountNumber').value = siteSettings.accountNumber || '';
        
        // Load site settings
        if (document.getElementById('siteName')) document.getElementById('siteName').value = siteSettings.siteName || 'TARICENT';
        if (document.getElementById('siteDescription')) document.getElementById('siteDescription').value = siteSettings.siteDescription || '';
        
        // Load content settings
        if (document.getElementById('heroTitle')) document.getElementById('heroTitle').value = siteSettings.heroTitle || '';
        if (document.getElementById('heroSubtitle')) document.getElementById('heroSubtitle').value = siteSettings.heroSubtitle || '';
        if (document.getElementById('aboutTitle')) document.getElementById('aboutTitle').value = siteSettings.aboutTitle || '';
        if (document.getElementById('aboutDescription')) document.getElementById('aboutDescription').value = siteSettings.aboutDescription || '';
        if (document.getElementById('contactPhone')) document.getElementById('contactPhone').value = siteSettings.contactPhone || '';
        if (document.getElementById('contactEmail')) document.getElementById('contactEmail').value = siteSettings.contactEmail || '';
        if (document.getElementById('contactAddress')) document.getElementById('contactAddress').value = siteSettings.contactAddress || '';
    }
}

// Save bank settings
function saveBankSettings() {
    const bankName = document.getElementById('bankName').value;
    const accountName = document.getElementById('accountName').value;
    const accountNumber = document.getElementById('accountNumber').value;
    
    if (!bankName || !accountName || !accountNumber) {
        showMessage('Please fill in all required bank details', 'error');
        return;
    }
    
    const settings = JSON.parse(localStorage.getItem('siteSettings') || '{}');
    settings.bankName = bankName;
    settings.accountName = accountName;
    settings.accountNumber = accountNumber;
    
    localStorage.setItem('siteSettings', JSON.stringify(settings));
    showMessage('Bank settings saved successfully', 'success');
}

// Save site settings
function saveSiteSettings() {
    const siteName = document.getElementById('siteName').value;
    const siteDescription = document.getElementById('siteDescription').value;
    
    const settings = JSON.parse(localStorage.getItem('siteSettings') || '{}');
    settings.siteName = siteName;
    settings.siteDescription = siteDescription;
    
    localStorage.setItem('siteSettings', JSON.stringify(settings));
    showMessage('Site settings saved successfully', 'success');
}

// Save hero content
function saveHeroContent() {
    const heroTitle = document.getElementById('heroTitle').value;
    const heroSubtitle = document.getElementById('heroSubtitle').value;
    
    const settings = JSON.parse(localStorage.getItem('siteSettings') || '{}');
    settings.heroTitle = heroTitle;
    settings.heroSubtitle = heroSubtitle;
    
    localStorage.setItem('siteSettings', JSON.stringify(settings));
    showMessage('Hero content saved successfully', 'success');
}

// Save about content
function saveAboutContent() {
    const aboutTitle = document.getElementById('aboutTitle').value;
    const aboutDescription = document.getElementById('aboutDescription').value;
    
    const settings = JSON.parse(localStorage.getItem('siteSettings') || '{}');
    settings.aboutTitle = aboutTitle;
    settings.aboutDescription = aboutDescription;
    
    localStorage.setItem('siteSettings', JSON.stringify(settings));
    showMessage('About content saved successfully', 'success');
}

// Save contact content
function saveContactContent() {
    const contactPhone = document.getElementById('contactPhone').value;
    const contactEmail = document.getElementById('contactEmail').value;
    const contactAddress = document.getElementById('contactAddress').value;
    
    const settings = JSON.parse(localStorage.getItem('siteSettings') || '{}');
    settings.contactPhone = contactPhone;
    settings.contactEmail = contactEmail;
    settings.contactAddress = contactAddress;
    
    localStorage.setItem('siteSettings', JSON.stringify(settings));
    showMessage('Contact information saved successfully', 'success');
}

// Show message
function showMessage(message, type) {
    const successMessage = document.getElementById('successMessage');
    const errorMessage = document.getElementById('errorMessage');
    const successText = document.getElementById('successText');
    const errorText = document.getElementById('errorText');
    
    if (type === 'success' && successMessage && successText) {
        successText.textContent = message;
        successMessage.classList.add('show');
        setTimeout(() => successMessage.classList.remove('show'), 3000);
    } else if (type === 'error' && errorMessage && errorText) {
        errorText.textContent = message;
        errorMessage.classList.add('show');
        setTimeout(() => errorMessage.classList.remove('show'), 3000);
    }
}

// Logout admin
function logoutAdmin() {
    if (confirm('Are you sure you want to logout?')) {
        window.location.href = 'index.html';
    }
}

// Close modal when clicking outside
window.onclick = function(event) {
    const productModal = document.getElementById('productModal');
    if (productModal && event.target === productModal) {
        closeProductModal();
    }
}