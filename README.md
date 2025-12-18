# TARICENTS - Premium Perfume E-Commerce Website

A professional, fully-functional e-commerce website for TARICENTS perfume business located in Biogbolo, Yenagoa, Bayelsa State, Nigeria.

## Features

- **35 Premium Perfumes** - Complete catalog with prices in Nigerian Naira
- **Shopping Cart** - Add, remove, and manage products
- **Paystack Payment Integration** - Secure payment processing for Nigerian customers
- **Delivery Address Collection** - Customers provide delivery details during checkout
- **Responsive Design** - Works perfectly on desktop, tablet, and mobile devices
- **Product Filtering** - Filter by category (Men, Women, Unisex), search, and sort
- **Multiple Pages** - Home, Shop, About, and Contact pages
- **Professional UI** - Modern design with smooth animations and transitions

## Pages

1. **Home (index.html)** - Hero section, features, and featured products
2. **Shop (shop.html)** - Full product catalog with filtering and search
3. **About (about.html)** - Business information and values
4. **Contact (contact.html)** - Contact form and business details

## Setup Instructions

### 1. Paystack Integration

To enable payment processing, you need to set up Paystack:

1. Create a free account at [Paystack](https://paystack.com)
2. Get your Public Key from the Paystack Dashboard
3. Open `main.js` and replace the placeholder:
   ```javascript
   const PAYSTACK_PUBLIC_KEY = 'pk_test_YOUR_PAYSTACK_PUBLIC_KEY_HERE';
   ```
   Replace with your actual key:
   ```javascript
   const PAYSTACK_PUBLIC_KEY = 'pk_test_your_actual_key_here';
   ```

### 2. Running the Website

Simply open `index.html` in a web browser. No server required for basic functionality.

For a better development experience, use a local server:

**Option 1: Using Python**
```bash
python -m http.server 8000
```
Then visit: http://localhost:8000

**Option 2: Using Node.js (http-server)**
```bash
npx http-server
```

**Option 3: Using VS Code Live Server**
- Install "Live Server" extension
- Right-click on `index.html`
- Select "Open with Live Server"

## Product Catalog

The website includes 35 premium perfumes:
- **Men's Fragrances**: 15 products (₦28,000 - ₦85,000)
- **Women's Fragrances**: 16 products (₦35,000 - ₦52,000)
- **Unisex Fragrances**: 4 products (₦28,000 - ₦72,000)

## Payment Flow

1. Customer adds products to cart
2. Proceeds to checkout
3. Fills in delivery information:
   - Full Name
   - Email Address
   - Phone Number
   - Delivery Address (in Yenagoa/Bayelsa)
   - Landmark (optional)
4. Reviews order summary with ₦1,500 delivery fee
5. Pays securely via Paystack
6. Receives confirmation with order details

## Customization

### Update Business Contact Information

Edit the contact details in all HTML files:
- Phone: Search for `+234 XXX XXX XXXX` and replace with actual number
- Email: `info@taricents.com` and `support@taricents.com`

### Modify Products

Edit `products.js` to:
- Add/remove products
- Update prices
- Change product images
- Modify categories

### Change Delivery Fee

In `main.js`, update:
```javascript
const DELIVERY_FEE = 1500; // Change to your preferred amount
```

### Update Colors/Branding

Edit CSS variables in `style.css`:
```css
:root {
    --primary-color: #8B4513;
    --secondary-color: #D4AF37;
    --accent-color: #C19A6B;
    /* Modify these to match your brand */
}
```

## File Structure

```
perfume-sites/
├── index.html          # Homepage
├── shop.html           # Product catalog page
├── about.html          # About us page
├── contact.html        # Contact page
├── style.css           # All styling
├── main.js             # Cart, checkout, and payment logic
├── products.js         # Product data (35 perfumes)
└── README.md           # This file
```

## Browser Compatibility

- Chrome (recommended)
- Firefox
- Safari
- Edge
- Mobile browsers (iOS Safari, Chrome Mobile)

## Technologies Used

- **HTML5** - Structure
- **CSS3** - Styling with CSS Grid and Flexbox
- **JavaScript (ES6+)** - Functionality
- **Font Awesome** - Icons
- **Paystack API** - Payment processing
- **LocalStorage** - Cart persistence

## Business Information

**TARICENTS**
- Location: Biogbolo, Yenagoa, Bayelsa State, Nigeria
- Delivery: 1-3 business days within Yenagoa/Bayelsa
- Delivery Fee: ₦1,500

## Support

For technical support or business inquiries:
- Email: info@taricents.com
- Phone: [Add your phone number]

## License

© 2024 TARICENTS. All rights reserved.

---

**Note**: This is a fully functional e-commerce website. Remember to:
1. Add your Paystack Public Key before going live
2. Test payments in test mode before using live keys
3. Update all contact information with actual details
4. Consider adding a backend for order management (optional)
