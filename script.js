// Product data
const products = [
    {
        id: 1,
        name: 'Classic White Sneakers',
        price: 129.99,
        rating: 5,
        category: 'footwear',
        image: 'https://images.unsplash.com/photo-1549298916-b41d501d3772?auto=format&fit=crop&q=80&w=800'
    },
    {
        id: 2,
        name: 'Leather Watch',
        price: 199.99,
        rating: 4,
        category: 'accessories',
        image: 'https://images.unsplash.com/photo-1524592094714-0f0654e20314?auto=format&fit=crop&q=80&w=800'
    },
    {
        id: 3,
        name: 'Denim Jacket',
        price: 89.99,
        rating: 4,
        category: 'clothing',
        image: 'https://images.unsplash.com/photo-1576995853123-5a10305d93c0?auto=format&fit=crop&q=80&w=800'
    },
    {
        id: 4,
        name: 'Sunglasses',
        price: 79.99,
        rating: 5,
        category: 'accessories',
        image: 'https://images.unsplash.com/photo-1572635196237-14b3f281503f?auto=format&fit=crop&q=80&w=800'
    }
];

// Handle category card clicks
document.querySelectorAll('.category-card').forEach(card => {
    card.addEventListener('click', () => {
        const category = card.dataset.category;
        window.location.href = `clothes.html?category=${category}`;
    });
});

// Handle product card clicks
document.querySelectorAll('.product-card').forEach(card => {
    card.addEventListener('click', (e) => {
        if (!e.target.classList.contains('add-to-cart')) {
            const productId = card.dataset.id;
            window.location.href = `products.html?id=${productId}`;
        }
    });
});

// Handle add to cart buttons
document.querySelectorAll('.add-to-cart').forEach(button => {
    button.addEventListener('click', (e) => {
        e.stopPropagation();
        const productId = e.target.closest('.product-card').dataset.id;
        addToCart(productId);
    });
});
// Cart functionality
function addToCart(productId) {
    // Add your cart logic here
    console.log('Adding to cart:', productId);
    alert('Product added to cart!');
}

// Newsletter subscription
const newsletterForm = document.querySelector('.newsletter-form');
if (newsletterForm) {
    newsletterForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const email = newsletterForm.querySelector('input').value;
        // Add your newsletter subscription logic here
        console.log('Newsletter subscription:', email);
        alert('Thank you for subscribing to our newsletter!');
    });
}