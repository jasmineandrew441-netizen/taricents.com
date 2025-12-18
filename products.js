// Products data for TARICENT Perfume Shop
const shopProducts = [
    // Men's Fragrances
    {
        id: 1,
        name: "Creed Aventus",
        category: "men",
        price: 450000,
        stock: 15,
        type: "Eau de Parfum",
        class: "Luxury",
        image: "https://i.pinimg.com/1200x/26/8e/d4/268ed47e33af8bc91f51cd3564f5d321.jpg",
        notes: "Pineapple, Birch, Musk",
        description: "A bold, fruity-chypre masterpiece featuring pineapple and birch, known for its powerful projection and long-lasting presence.",
        badge: "Popular"
    },
    {
        id: 2,
        name: "Dior Sauvage",
        category: "men",
        price: 85000,
        stock: 20,
        type: "Eau de Toilette",
        class: "Premium",
        image: "https://i.pinimg.com/736x/1c/81/52/1c8152f646e831c02c30ea03475fe908.jpg",
        notes: "Pepper, Bergamot, Ambroxan",
        description: "A fresh, spicy aromatic with bright bergamot and peppery top notes anchored by ambroxan for a modern, long-lasting scent.",
        badge: "Bestseller"
    },
    {
        id: 3,
        name: "Tom Ford Oud Wood",
        category: "men",
        price: 150000,
        stock: 12,
        type: "Eau de Parfum",
        class: "Luxury",
        image: "https://i.pinimg.com/736x/26/44/01/264401edb2e2fed269cec98c9b4216a5.jpg",
        notes: "Oud, Sandalwood, Vanilla",
        description: "An elegant oud-forward composition softened with sandalwood and vanilla for a warm, resinous, and sophisticated finish.",
        badge: "Exclusive"
    },
    {
        id: 4,
        name: "Bleu de Chanel",
        category: "men",
        price: 95000,
        stock: 18,
        type: "Eau de Parfum",
        class: "Luxury",
        image: "https://i.pinimg.com/1200x/57/a9/10/57a910712e410878c02a42a0afb880e2.jpg",
        notes: "Grapefruit, Incense, Ginger",
        description: "A modern aromatic-woody with sparkling citrus top notes and a smoky, resinous drydown—clean, refined, and versatile.",
        badge: "Popular"
    },
    {
        id: 5,
        name: "Versace Eros",
        category: "men",
        price: 65000,
        stock: 25,
        type: "Eau de Toilette",
        class: "Premium",
        image: "https://i.pinimg.com/1200x/da/08/ed/da08ed90f41bd7cc9977911078f73ff1.jpg",
        notes: "Mint, Green Apple, Lemon",
        description: "A bold, sweet-woody aromatic with fresh mint and fruity apple opening into warm tonka and vanilla base notes.",
        badge: "New"
    },
    {
        id: 6,
        name: "Jean Paul Gaultier Le Male",
        category: "men",
        price: 45000,
        stock: 22,
        type: "Eau de Toilette",
        class: "Classic",
        image: "https://i.pinimg.com/736x/e9/08/46/e908462e201d6b86086134ffbcd67c98.jpg",
        notes: "Lavender, Mint, Vanilla",
        description: "An iconic fougère with aromatic lavender and cooling mint softened by sweet vanilla for a comforting masculine scent.",
        badge: "Classic"
    },
    {
        id: 7,
        name: "Paco Rabanne 1 Million",
        category: "men",
        price: 55000,
        stock: 30,
        type: "Eau de Toilette",
        class: "Premium",
        image: "https://i.pinimg.com/736x/aa/93/c1/aa93c195cf7a5d9b9b5a8144ed36266c.jpg",
        notes: "Blood Orange, Mint, Rose",
        description: "A flashy, sweet-spicy leather scent with vibrant blood orange and warm notes that project confidently.",
        badge: "Popular"
    },
    {
        id: 8,
        name: "Acqua di Gio",
        category: "men",
        price: 50000,
        stock: 35,
        type: "Eau de Toilette",
        class: "Standard",
        image: "https://i.pinimg.com/1200x/9f/9b/f3/9f9bf3572339c014cf995228f2345543.jpg",
        notes: "Marine notes, Bergamot, Neroli",
        description: "A timeless aquatic with clean marine accords, citrus top notes, and a light woody base—fresh and wearable daily.",
        badge: "Classic"
    },
    {
        id: 9,
        name: "YSL La Nuit de L'Homme",
        category: "men",
        price: 70000,
        stock: 16,
        type: "Eau de Toilette",
        class: "Luxury",
        image: "https://i.pinimg.com/1200x/26/cb/6f/26cb6f0981e62bcb803593bd0fc414cb.jpg",
        notes: "Cardamom, Cedar, Vetiver",
        description: "A seductive oriental-spicy with cardamom spice and smooth cedar-vetiver base—made for evening wear.",
        badge: "Popular"
    },
    {
        id: 10,
        name: "Hugo Boss Bottled",
        category: "men",
        price: 40000,
        stock: 28,
        type: "Eau de Toilette",
        class: "Premium",
        image: "https://i.pinimg.com/736x/e7/73/f4/e773f4331b7dc6b6d4b7cbf81b1ae6fc.jpg",
        notes: "Apple, Cinnamon, Clove",
        description: "A modern woody-spicy scent with crisp apple and warm spices—versatile for day-to-day wear.",
        badge: "Classic"
    },
    {
        id: 11,
        name: "Armani Code",
        category: "men",
        price: 75000,
        stock: 20,
        type: "Eau de Parfum",
        class: "Luxury",
        image: "https://i.pinimg.com/736x/4f/de/9d/4fde9dd7e8cd5f766802d3dbad400660.jpg",
        notes: "Tonka Bean, Tobacco, Cedar",
        description: "A smooth, elegant oriental-woody with tonka and tobacco for an intimate, evening-ready aroma.",
        badge: "Popular"
    },
    {
        id: 12,
        name: "Gucci Guilty",
        category: "men",
        price: 70000,
        stock: 24,
        type: "Eau de Toilette",
        class: "Premium",
        image: "https://i.pinimg.com/1200x/b1/c1/95/b1c195f9feac51761b2996faf1eb03cd.jpg",
        notes: "Lemon, Lavender, Patchouli",
        description: "A modern warm aromatic with citrus and aromatic lavender layered over earthy patchouli for a confident feel.",
        badge: "New"
    },
    
    // Women's Fragrances
    {
        id: 13,
        name: "Chanel No. 5",
        category: "women",
        price: 180000,
        stock: 10,
        type: "Eau de Parfum",
        class: "Luxury",
        image: "https://i.pinimg.com/736x/4a/1f/fb/4a1ffb615996d59e647ea51c2596e125.jpg",
        notes: "Rose, Jasmine, Sandalwood",
        description: "An iconic aldehydic floral with luminous jasmine and rose over a warm sandalwood base—timeless and elegant.",
        badge: "Bestseller"
    },
    {
        id: 14,
        name: "YSL Black Opium",
        category: "women",
        price: 95000,
        stock: 12,
        type: "Eau de Parfum",
        class: "Luxury",
        image: "https://i.pinimg.com/736x/ac/23/e7/ac23e7748d55d0ba75fc7939b7f6fa33.jpg",
        notes: "Coffee, Vanilla, White Flowers",
        description: "An addictive gourmand-oriental centered on rich coffee and sweet vanilla, lifted by white florals for night-time allure.",
        badge: "Popular"
    },
    {
        id: 15,
        name: "Dior J'adore",
        category: "women",
        price: 95000,
        stock: 18,
        type: "Eau de Parfum",
        class: "Luxury",
        image: "https://i.pinimg.com/736x/8e/20/bd/8e20bdfc7242479206bd5cbb3c89ef6f.jpg",
        notes: "Ylang-Ylang, Rose, Jasmine",
        description: "A luminous floral bouquet with rich jasmine and ylang-ylang framed by soft, radiant notes—elegant and feminine.",
        badge: "Bestseller"
    },
    {
        id: 16,
        name: "Chanel Coco Mademoiselle",
        category: "women",
        price: 130000,
        stock: 14,
        type: "Eau de Parfum",
        class: "Luxury",
        image: "https://i.pinimg.com/736x/d9/d6/7e/d9d67e24fccfd1b9070d08e11a574636.jpg",
        notes: "Orange, Rose, Patchouli",
        description: "A modern chypre-floral with bright citrus, rich rose and warm patchouli—sophisticated, bold, and feminine.",
        badge: "Popular"
    },
    {
        id: 17,
        name: "Tom Ford Black Orchid",
        category: "women",
        price: 160000,
        stock: 8,
        type: "Eau de Parfum",
        class: "Luxury",
        image: "https://i.pinimg.com/736x/3b/b1/bb/3bb1bb736413b7bb450597cde7da8f2d.jpg",
        notes: "Black Orchid, Spice, Vanilla",
        description: "A dramatic, luxurious floral-oriental with dark truffle and black orchid at its heart—deep, sensual, and unique.",
        badge: "Exclusive"
    },
    {
        id: 18,
        name: "Versace Bright Crystal",
        category: "women",
        price: 55000,
        stock: 22,
        type: "Eau de Toilette",
        class: "Premium",
        image: "https://i.pinimg.com/736x/e5/3a/59/e53a59f00ff61814ddacca8bf0724ea2.jpg",
        notes: "Pomegranate, Peony, Amber",
        description: "A fresh, fruity-floral with sparkling pomegranate and soft peony resting on a light amber-musky base—bright and feminine.",
        badge: "Popular"
    },
    {
        id: 19,
        name: "Lancôme La Vie Est Belle",
        category: "women",
        price: 90000,
        stock: 16,
        type: "Eau de Parfum",
        class: "Luxury",
        image: "https://i.pinimg.com/1200x/bf/40/57/bf4057ac9bd8e9cbcbb5497e564bb012.jpg",
        notes: "Blackcurrant, Pear, Iris",
        description: "A joyful gourmand floral with iris, sweet praline and pear—soft, radiant and uplifting.",
        badge: "Bestseller"
    },
    {
        id: 20,
        name: "Viktor&Rolf Flowerbomb",
        category: "women",
        price: 95000,
        stock: 12,
        type: "Eau de Parfum",
        class: "Luxury",
        image: "https://i.pinimg.com/1200x/78/4d/26/784d265f06b0f55696dab7180f10b3b7.jpg",
        notes: "Jasmine, Rose, Orchid",
        description: "An explosive floral bouquet with opulent jasmine and rose balanced by patchouli—sweet, intense, and long-lasting.",
        badge: "Popular"
    },
    {
        id: 21,
        name: "Gucci Bloom",
        category: "women",
        price: 75000,
        stock: 20,
        type: "Eau de Parfum",
        class: "Premium",
        image: "https://i.pinimg.com/736x/b6/15/59/b615597f6bfa6db257249d8a3d92e7b9.jpg",
        notes: "Tuberose, Jasmine, Rangoon Creeper",
        description: "A natural white-floral composition celebrating tuberose and jasmine with an authentic garden-like character.",
        badge: "New"
    },
    {
        id: 22,
        name: "Narciso Rodriguez For Her",
        category: "women",
        price: 85000,
        stock: 15,
        type: "Eau de Parfum",
        class: "Luxury",
        image: "https://i.pinimg.com/736x/6b/ab/7b/6bab7b9165796ad5a921791514076ea5.jpg",
        notes: "Musk, Rose, Peach",
        description: "A soft, musky floral with delicate rose and peach facets layered over powdery musk—intimate and elegant.",
        badge: "Popular"
    },
    {
        id: 23,
        name: "Elie Saab Girl of Now",
        category: "women",
        price: 72000,
        stock: 18,
        type: "Eau de Parfum",
        class: "Premium",
        image: "https://i.pinimg.com/736x/de/5a/ee/de5aee9ff747244977e3de1f132c85ec.jpg",
        notes: "Orange Blossom, Almond, Pear",
        description: "A modern oriental-gourmand with almond and orange blossom over a sweet pear accord—youthful and addictive.",
        badge: "New"
    },
    {
        id: 24,
        name: "Carolina Herrera Good Girl",
        category: "women",
        price: 85000,
        stock: 14,
        type: "Eau de Parfum",
        class: "Luxury",
        image: "https://i.pinimg.com/736x/8f/71/04/8f71049dedd030cb0d20fb1d00b58810.jpg",
        notes: "Tuberose, Jasmine, Cocoa",
        description: "A seductive oriental-floral blending creamy tuberose and cocoa-tonka gourmand notes for confident femininity.",
        badge: "Popular"
    },
    
    // Unisex Fragrances
    {
        id: 25,
        name: "Jo Malone London Wood Sage & Sea Salt",
        category: "unisex",
        price: 75000,
        stock: 20,
        type: "Eau de Cologne",
        class: "Premium",
        image: "https://i.pinimg.com/736x/6d/ca/c3/6dcac3a080c84c32dad2a6255b838a81.jpg",
        notes: "Sea Salt, Sage, Ambrette Seed",
        description: "An airy coastal cologne with mineral sea salt and aromatic sage—fresh, breezy and effortlessly wearable.",
        badge: "Popular"
    },
    {
        id: 26,
        name: "Le Labo Santal 33",
        category: "unisex",
        price: 220000,
        stock: 10,
        type: "Eau de Parfum",
        class: "Luxury",
        image: "https://i.pinimg.com/736x/5b/5f/f5/5b5ff5b331a99f32c82b57842c0249b1.jpg",
        notes: "Sandalwood, Cedar, Leather",
        description: "A cult woody-aromatic centered on creamy sandalwood and smoky cedar with a leathery, slightly spicy character.",
        badge: "Exclusive"
    },
    {
        id: 27,
        name: "Byredo Mojave Ghost",
        category: "unisex",
        price: 170000,
        stock: 12,
        type: "Eau de Parfum",
        class: "Luxury",
        image: "https://i.pinimg.com/736x/b3/21/7c/b3217cbea5496f5c33948209ca7a7742.jpg",
        notes: "Ambrette, Sandalwood, Violet",
        description: "A transparent, woody-floral with delicate ambrette and sandalwood notes—subtle, powdery and slightly woody.",
        badge: "Popular"
    },
    {
        id: 28,
        name: "Maison Margiela Replica",
        category: "unisex",
        price: 75000,
        stock: 18,
        type: "Eau de Toilette",
        class: "Premium",
        image: "https://i.pinimg.com/1200x/c9/5b/52/c95b52f2965bed584f9319c4b68ac23d.jpg",
        notes: "Matcha, Fig, Cedar",
        description: "A memory-driven scent capturing comforting green and woody accords—matcha and fig give a warm, familiar character.",
        badge: "New"
    },
    {
        id: 29,
        name: "Diptyque Philosykos",
        category: "unisex",
        price: 95000,
        stock: 15,
        type: "Eau de Toilette",
        class: "Luxury",
        image: "https://i.pinimg.com/736x/67/e2/2b/67e22b0749e2d7fafa0583884338b8b1.jpg",
        notes: "Fig, Wood, Green Notes",
        description: "A natural fig fragrance with milky sap and cedar, evoking Mediterranean fig groves—green, slightly milky and woody.",
        badge: "Popular"
    },
    {
        id: 30,
        name: "Acqua di Parma Colonia",
        category: "unisex",
        price: 120000,
        stock: 25,
        type: "Eau de Cologne",
        class: "Classic",
        image: "https://i.pinimg.com/1200x/8b/c9/a3/8bc9a36c469aa001f4bf80eddf8ca06c.jpg",
        notes: "Lemon, Bergamot, Rosemary",
        description: "A classic Italian cologne built on bright citrus and aromatic herbs with a refined woody base—elegant and timeless.",
        badge: "Classic"
    },
    {
        id: 31,
        name: "Hermès Terre d'Hermès",
        category: "unisex",
        price: 95000,
        stock: 14,
        type: "Eau de Toilette",
        class: "Luxury",
        image: "https://i.pinimg.com/1200x/1f/7c/81/1f7c81877304fa762eaacdfb8166c6be.jpg",
        notes: "Orange, Pepper, Vetiver",
        description: "A mineral, earthy-woody masterpiece: bright orange and pepper top notes settle into a vetiver-driven, elegant drydown.",
        badge: "Popular"
    },
    {
        id: 32,
        name: "Bvlgari Omnia",
        category: "unisex",
        price: 60000,
        stock: 20,
        type: "Eau de Toilette",
        class: "Premium",
        image: "https://i.pinimg.com/736x/71/d3/9a/71d39a915b3d6136c8085e7bd3ebdc2b.jpg",
        notes: "Saffron, Mandarin, Spices",
        description: "A bright, modern oriental with saffron and mandarin that stays light yet sophisticated—easy to wear day or night.",
        badge: "New"
    },
    {
        id: 33,
        name: "Penhaligon's Endymion",
        category: "unisex",
        price: 90000,
        stock: 10,
        type: "Eau de Parfum",
        class: "Luxury",
        image: "https://i.pinimg.com/1200x/cd/6f/a4/cd6fa47e7e13e39bb8f6ac227ca35ead.jpg",
        notes: "Coffee, Bergamot, Lavender",
        description: "A warm, aromatic fougère with gentle coffee and lavender over woody-musk notes—refined and comforting.",
        badge: "Exclusive"
    },
    {
        id: 34,
        name: "Guerlain L'Homme Idéal",
        category: "unisex",
        price: 70000,
        stock: 16,
        type: "Eau de Toilette",
        class: "Premium",
        image: "https://i.pinimg.com/1200x/f7/b1/c3/f7b1c380a943e830efa7d5f451f24280.jpg",
        notes: "Almond, Cherry, Leather",
        description: "A gourmand-woody blend of roasted almond and leather with a subtly sweet cherry-laced heart—smooth and modern.",
        badge: "Popular"
    },
    {
        id: 35,
        name: "Tom Ford Neroli Portofino",
        category: "unisex",
        price: 150000,
        stock: 18,
        type: "Eau de Parfum",
        class: "Luxury",
        image: "https://i.pinimg.com/1200x/fa/da/62/fada62b0a12ec296bae208a030edab75.jpg",
        notes: "Neroli, Bergamot, Lemon",
        description: "A sparkling Mediterranean neroli cologne with vivid citrus and floral-amber facets—fresh, elegant and luminous.",
        badge: "Popular"
    },
    {
        id: 36,
        name: "Dior Homme Intense",
        category: "men",
        price: 95000,
        stock: 12,
        type: "Eau de Parfum",
        class: "Luxury",
        image: "https://i.pinimg.com/1200x/d8/20/4e/d8204e4d7cb208268f70ec6adf8cab27.jpg",
        notes: "Iris, Cacao, Ambrette",
        description: "A powdery-iris chypre enriched with cocoa and ambrette for a velvety, elegant and long-lasting effect.",
        badge: "New"
    },
    {
        id: 37,
        name: "YSL Libre",
        category: "women",
        price: 90000,
        stock: 15,
        type: "Eau de Parfum",
        class: "Luxury",
        image: "https://i.pinimg.com/1200x/7b/f5/40/7bf540faf2929b90d1822de362b10980.jpg",
        notes: "Lavender, Orange Blossom, Musk",
        description: "A bold floral-amber with crisp lavender and luminous orange blossom balanced by warm musk—strong and feminine.",
        badge: "Popular"
    },
    {
        id: 38,
        name: "Creed Green Irish Tweed",
        category: "unisex",
        price: 350000,
        stock: 8,
        type: "Eau de Parfum",
        class: "Luxury",
        image: "https://i.pinimg.com/1200x/74/3a/3a/743a3a4d6b8835070f2d098a6bc09782.jpg",
        notes: "Lemon Verbena, Iris, Sandalwood",
        description: "A refined fougère evoking the Irish countryside—crisp lemon-verbena and luxurious iris over a warm sandalwood base.",
        badge: "Exclusive"
    },
    {
        id: 39,
        name: "Valentino Uomo",
        category: "men",
        price: 65000,
        stock: 20,
        type: "Eau de Toilette",
        class: "Premium",
        image: "https://i.pinimg.com/1200x/44/a0/2f/44a02fad41869e3cc3ff15df9423589b.jpg",
        notes: "Gianduja, Hazelnut, Leather",
        description: "A refined, slightly sweet-woody composition featuring gianduja and hazelnut over warm leather—Italian elegance.",
        badge: "New"
    }
];

// Helper to return products (localStorage override if present)
function getProductsList() {
    const stored = localStorage.getItem('perfumeProducts');
    if (stored) {
        try {
            return JSON.parse(stored);
        } catch (e) {
            console.error('Invalid perfumeProducts in localStorage', e);
        }
    }
    return shopProducts;
}

// Re-render when products change in other tabs/windows
window.addEventListener('storage', function(e) {
    if (e.key === 'perfumeProducts') {
        displayAllProducts();
        updateProductCount();
    }
});

// Initialize shop page
document.addEventListener('DOMContentLoaded', function() {
    displayAllProducts();
    setupShopFilters();
    updateProductCount();
});

// Display all products
function displayAllProducts(productsToShow = getProductsList()) {
    const productsContainer = document.getElementById('allProducts');
    if (!productsContainer) return;
    
    if (productsToShow.length === 0) {
        productsContainer.innerHTML = '<div class="no-products"><p>No products found matching your criteria.</p></div>';
        return;
    }
    
    productsContainer.innerHTML = productsToShow.map(product => `
        <div class="product-card" data-category="${product.category}" data-type="${product.type}" data-class="${product.class}" data-price="${product.price}">
            <div class="product-image">
                <img src="${product.image}" alt="${product.name}">
                ${product.badge ? `<span class="product-badge">${product.badge}</span>` : ''}
            </div>
            <div class="product-info">
                <h3>${product.name}</h3>
                <p class="product-category">${product.category.charAt(0).toUpperCase() + product.category.slice(1)}'s ${product.type}</p>
                <p class="product-notes">${product.notes}</p>
                <p class="product-price">₦${product.price.toLocaleString()}</p>
                <div class="product-actions">
                    <button class="btn btn-primary" onclick="addToCart(${product.id})">
                        <i class="fas fa-shopping-cart"></i> Add to Cart
                    </button>
                    <button class="btn btn-secondary" onclick="viewProductDetails(${product.id})">
                        <i class="fas fa-eye"></i> View
                    </button>
                </div>
            </div>
        </div>
    `).join('');
}

// Setup shop filters
function setupShopFilters() {
    const categoryFilter = document.getElementById('categoryFilter');
    const typeFilter = document.getElementById('typeFilter');
    const classFilter = document.getElementById('classFilter');
    const priceFilter = document.getElementById('priceFilter');
    const sortFilter = document.getElementById('sortFilter');
    const searchInput = document.getElementById('searchInput');
    
    const filters = [categoryFilter, typeFilter, classFilter, priceFilter, sortFilter];
    
    filters.forEach(filter => {
        if (filter) {
            filter.addEventListener('change', applyFilters);
        }
    });
    
    if (searchInput) {
        searchInput.addEventListener('input', applyFilters);
    }
}

// Apply filters
function applyFilters() {
    const categoryFilter = document.getElementById('categoryFilter')?.value || 'all';
    const typeFilter = document.getElementById('typeFilter')?.value || 'all';
    const classFilter = document.getElementById('classFilter')?.value || 'all';
    const priceFilter = document.getElementById('priceFilter')?.value || 'all';
    const sortFilter = document.getElementById('sortFilter')?.value || 'default';
    const searchInput = document.getElementById('searchInput')?.value.toLowerCase() || '';
    
    let filteredProducts = getProductsList().filter(product => {
        // Category filter
        if (categoryFilter !== 'all' && product.category !== categoryFilter) {
            return false;
        }
        
        // Type filter
        if (typeFilter !== 'all' && product.type !== typeFilter) {
            return false;
        }
        
        // Class filter
        if (classFilter !== 'all' && product.class !== classFilter) {
            return false;
        }
        
        // Price filter
        if (priceFilter !== 'all') {
            const [min, max] = priceFilter.split('-').map(p => parseInt(p));
            if (max) {
                if (product.price < min || product.price > max) return false;
            } else {
                if (product.price < min) return false;
            }
        }
        
        // Search filter
        if (searchInput) {
            const searchTerms = searchInput.split(' ');
            const matchesSearch = searchTerms.every(term => 
                product.name.toLowerCase().includes(term) ||
                product.notes.toLowerCase().includes(term) ||
                product.category.toLowerCase().includes(term) ||
                product.description.toLowerCase().includes(term)
            );
            if (!matchesSearch) return false;
        }
        
        return true;
    });
    
    // Apply sorting
    switch (sortFilter) {
        case 'price-low':
            filteredProducts.sort((a, b) => a.price - b.price);
            break;
        case 'price-high':
            filteredProducts.sort((a, b) => b.price - a.price);
            break;
        case 'name':
            filteredProducts.sort((a, b) => a.name.localeCompare(b.name));
            break;
        default:
            // Keep original order
            break;
    }
    
    displayAllProducts(filteredProducts);
    updateFilterResults(filteredProducts.length);
}

// Update filter results text
function updateFilterResults(count) {
    const resultsText = document.getElementById('filterResultsText');
    if (resultsText) {
        resultsText.textContent = `Showing ${count} perfume${count !== 1 ? 's' : ''}`;
    }
}

// Update product count
function updateProductCount() {
    const resultsText = document.getElementById('filterResultsText');
    if (resultsText) {
        resultsText.textContent = `Showing all ${getProductsList().length} perfumes`;
    }
}

// View product details
function viewProductDetails(productId) {
    const product = getProductsList().find(p => p.id === productId);
    if (!product) return;
    
    // Create modal for product details
    const modal = document.createElement('div');
    modal.className = 'modal';
    modal.style.display = 'block';
    modal.innerHTML = `
        <div class="modal-content product-detail-modal">
            <span class="close-modal">&times;</span>
            <div class="product-detail">
                <div class="product-detail-image">
                    <img src="${product.image}" alt="${product.name}">
                    ${product.badge ? `<span class="product-badge">${product.badge}</span>` : ''}
                </div>
                <div class="product-detail-info">
                    <h2>${product.name}</h2>
                    <p class="product-detail-category">${product.category.charAt(0).toUpperCase() + product.category.slice(1)}'s ${product.type}</p>
                    <p class="product-detail-class">${product.class}</p>
                    <p class="product-detail-price">₦${product.price.toLocaleString()}</p>
                    <div class="product-detail-description">
                        <h4>Description</h4>
                        <p>${product.description}</p>
                    </div>
                    <div class="product-detail-notes">
                        <h4>Notes</h4>
                        <p>${product.notes}</p>
                    </div>
                    <div class="product-detail-stock">
                        <p><strong>Stock:</strong> ${product.stock} units available</p>
                    </div>
                    <div class="product-detail-actions">
                        <button class="btn btn-primary btn-large" onclick="addToCart(${product.id})">
                            <i class="fas fa-shopping-cart"></i> Add to Cart
                        </button>
                        <button class="btn btn-secondary btn-large" onclick="closeProductModal()">
                            <i class="fas fa-arrow-left"></i> Continue Shopping
                        </button>
                    </div>
                </div>
            </div>
        </div>
    `;
    
    document.body.appendChild(modal);
    
    // Close modal handlers
    const closeBtn = modal.querySelector('.close-modal');
    closeBtn.addEventListener('click', () => closeProductModal(modal));
    
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            closeProductModal(modal);
        }
    });
}

// Close product modal
function closeProductModal(modal) {
    if (!modal) {
        modal = document.querySelector('.modal');
    }
    if (modal) {
        modal.remove();
    }
}

// Add to cart function (uses main.js function if available)
function addToCart(productId) {
    const product = shopProducts.find(p => p.id === productId);
    if (!product) return;
    
    // Use main.js addToCart if available, otherwise create simple cart
    if (typeof window.addToCart === 'function') {
        window.addToCart(productId);
    } else {
        // Simple cart implementation
        let cart = JSON.parse(localStorage.getItem('perfumeCart') || '[]');
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
        
        localStorage.setItem('perfumeCart', JSON.stringify(cart));
        showMessage(`${product.name} added to cart!`, 'success');
        
        // Update cart count if element exists
        const cartCount = document.getElementById('cartCount');
        if (cartCount) {
            const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
            cartCount.textContent = totalItems;
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

// Add CSS for shop page
const shopStyles = document.createElement('style');
shopStyles.textContent = `
    .shop-section {
        padding: 60px 20px;
        background: var(--light-gray);
    }
    
    .shop-controls {
        display: flex;
        flex-wrap: wrap;
        gap: 15px;
        margin-bottom: 30px;
        padding: 20px;
        background: white;
        border-radius: 10px;
        box-shadow: var(--shadow);
    }
    
    .filter-group {
        display: flex;
        flex-direction: column;
        min-width: 150px;
    }
    
    .filter-group label {
        font-weight: 600;
        margin-bottom: 5px;
        color: var(--dark-color);
    }
    
    .filter-group select {
        padding: 8px 12px;
        border: 1px solid var(--border-color);
        border-radius: 5px;
        background: white;
        font-size: 0.9rem;
    }
    
    .search-box {
        position: relative;
        flex: 1;
        min-width: 200px;
        max-width: 300px;
    }
    
    .search-box input {
        width: 100%;
        padding: 8px 12px 8px 35px;
        border: 1px solid var(--border-color);
        border-radius: 5px;
        font-size: 0.9rem;
    }
    
    .search-box i {
        position: absolute;
        left: 12px;
        top: 50%;
        transform: translateY(-50%);
        color: var(--gray);
    }
    
    .filter-results {
        margin-bottom: 20px;
        text-align: center;
    }
    
    .filter-results p {
        color: var(--gray);
        font-size: 0.9rem;
    }
    
    .products-grid {
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
        gap: 30px;
    }
    
    .product-card {
        background: white;
        border-radius: 10px;
        overflow: hidden;
        box-shadow: var(--shadow);
        transition: transform 0.3s, box-shadow 0.3s;
    }
    
    .product-card:hover {
        transform: translateY(-5px);
        box-shadow: var(--shadow-lg);
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
        transition: transform 0.3s;
    }
    
    .product-card:hover .product-image img {
        transform: scale(1.05);
    }
    
    .product-badge {
        position: absolute;
        top: 10px;
        right: 10px;
        background: var(--secondary-color);
        color: var(--dark-color);
        padding: 5px 10px;
        border-radius: 20px;
        font-size: 0.7rem;
        font-weight: bold;
        text-transform: uppercase;
    }
    
    .product-info {
        padding: 20px;
    }
    
    .product-info h3 {
        margin-bottom: 8px;
        color: var(--dark-color);
        font-size: 1.1rem;
    }
    
    .product-category {
        color: var(--gray);
        font-size: 0.8rem;
        margin-bottom: 5px;
    }
    
    .product-notes {
        color: var(--gray);
        font-size: 0.85rem;
        margin-bottom: 10px;
        font-style: italic;
    }
    
    .product-price {
        font-size: 1.3rem;
        font-weight: bold;
        color: var(--primary-color);
        margin-bottom: 15px;
    }
    
    .product-actions {
        display: flex;
        gap: 10px;
    }
    
    .product-actions .btn {
        flex: 1;
        padding: 8px 12px;
        font-size: 0.85rem;
        text-align: center;
    }
    
    .no-products {
        grid-column: 1 / -1;
        text-align: center;
        padding: 60px 20px;
        background: white;
        border-radius: 10px;
        box-shadow: var(--shadow);
    }
    
    .no-products p {
        color: var(--gray);
        font-size: 1.1rem;
    }
    
    .product-detail-modal {
        max-width: 900px;
        max-height: 90vh;
        overflow-y: auto;
    }
    
    .product-detail {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 30px;
    }
    
    .product-detail-image {
        position: relative;
        height: 400px;
        border-radius: 10px;
        overflow: hidden;
    }
    
    .product-detail-image img {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
    
    .product-detail-info h2 {
        margin-bottom: 10px;
        color: var(--dark-color);
    }
    
    .product-detail-category {
        color: var(--gray);
        margin-bottom: 5px;
    }
    
    .product-detail-class {
        color: var(--primary-color);
        font-weight: 600;
        margin-bottom: 15px;
    }
    
    .product-detail-price {
        font-size: 1.5rem;
        font-weight: bold;
        color: var(--primary-color);
        margin-bottom: 20px;
    }
    
    .product-detail-description,
    .product-detail-notes,
    .product-detail-stock {
        margin-bottom: 20px;
    }
    
    .product-detail-description h4,
    .product-detail-notes h4 {
        margin-bottom: 8px;
        color: var(--dark-color);
    }
    
    .product-detail-actions {
        display: flex;
        gap: 15px;
        margin-top: 30px;
    }
    
    .btn-large {
        padding: 12px 25px;
        font-size: 1rem;
    }
    
    @media (max-width: 768px) {
        .shop-controls {
            flex-direction: column;
        }
        
        .search-box {
            max-width: 100%;
        }
        
        .product-detail {
            grid-template-columns: 1fr;
        }
        
        .product-detail-image {
            height: 300px;
        }
        
        .product-actions {
            flex-direction: column;
        }
        
        .product-detail-actions {
            flex-direction: column;
        }
    }
    
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
    
    .page-header {
        background: linear-gradient(135deg, var(--primary-color) 0%, var(--accent-color) 100%);
        color: var(--white);
        padding: 80px 20px;
        text-align: center;
        position: relative;
        overflow: hidden;
    }
    
    .hero-perfume-decoration {
        position: absolute;
        width: 200px;
        height: 300px;
        opacity: 0.3;
        animation: float 6s ease-in-out infinite;
    }
    
    .header-perfume-image {
        width: 100%;
        height: 100%;
        object-fit: cover;
        border-radius: 15px;
    }
    
    @keyframes float {
        0%, 100% {
            transform: translateY(0) translateX(0);
        }
        50% {
            transform: translateY(-10px) translateX(5px);
        }
    }
`;
document.head.appendChild(shopStyles);
