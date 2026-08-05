// ===== Product data =====
const products = [
  {name:"Wireless Over-Ear Headphones", cat:"Electronics", img:"https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400&h=300&fit=crop", now:1999, old:3499, off:"43% off", rating:4.3, reviews:"2.1k", badge:"Bestseller"},
  {name:"Running Sneakers, Unisex", cat:"Fashion", img:"https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400&h=300&fit=crop", now:2499, old:4999, off:"50% off", rating:4.5, reviews:"890", badge:"Sale", saleBadge:true},
  {name:"Smart Fitness Watch", cat:"Electronics", img:"https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400&h=300&fit=crop", now:899, old:1599, off:"44% off", rating:4.1, reviews:"3.4k", badge:"Deal"},
  {name:"Ceramic Coffee Mug Set", cat:"Home & Kitchen", img:"https://images.unsplash.com/photo-1517256064527-09c73fc73e38?w=400&h=300&fit=crop", now:449, old:799, off:"44% off", rating:4.6, reviews:"512", badge:"Top rated"},
  {name:"Leather Backpack", cat:"Fashion", img:"https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=400&h=300&fit=crop", now:1799, old:2999, off:"40% off", rating:4.4, reviews:"1.2k", badge:"Trending"},
  {name:"Bluetooth Speaker", cat:"Electronics", img:"https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=400&h=300&fit=crop", now:1299, old:2199, off:"41% off", rating:4.2, reviews:"1.8k", badge:"Sale", saleBadge:true},
  {name:"Skincare Gift Set", cat:"Beauty", img:"https://images.unsplash.com/photo-1556228720-195a672e8a03?w=400&h=300&fit=crop", now:699, old:1099, off:"36% off", rating:4.7, reviews:"640", badge:"New"},
  {name:"Yoga Mat, Non-slip", cat:"Sports", img:"https://images.unsplash.com/photo-1601925260368-ae2f83cf8b7f?w=400&h=300&fit=crop", now:599, old:999, off:"40% off", rating:4.3, reviews:"420", badge:"Deal"}
];

// ===== Fallback gradient placeholder (used if a product image fails to load) =====
function placeholder(seed, w, h){
  const colors = [['#F5A623','#FF6B5B'],['#0B3D3A','#1FA37E'],['#FF6B5B','#0F4F49'],['#1FA37E','#F5A623']];
  const c = colors[seed % colors.length];
  return `data:image/svg+xml;utf8,` + encodeURIComponent(`<svg xmlns='http://www.w3.org/2000/svg' width='${w}' height='${h}'><defs><linearGradient id='g' x1='0' y1='0' x2='1' y2='1'><stop offset='0' stop-color='${c[0]}'/><stop offset='1' stop-color='${c[1]}'/></linearGradient></defs><rect width='100%' height='100%' fill='url(#g)'/></svg>`);
}

// ===== Render product grid =====
const grid = document.getElementById('prodGrid');
grid.innerHTML = products.map((p, i) => `
  <div class="prod-card">
    <div class="prod-thumb">
      <span class="badge ${p.saleBadge ? 'sale' : ''}">${p.badge}</span>
      <div class="wish"><svg viewBox="0 0 24 24"><path d="M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.6l-1-1a5.5 5.5 0 1 0-7.8 7.8l1 1L12 21l7.8-7.6 1-1a5.5 5.5 0 0 0 0-7.8z"/></svg></div>
      <img src="${p.img}" alt="${p.name}" loading="lazy" onerror="this.onerror=null;this.src='${placeholder(i,400,300)}'">
    </div>
    <div class="prod-info">
      <div class="prod-cat">${p.cat}</div>
      <div class="prod-name">${p.name}</div>
      <div class="stars">★★★★☆ <span>${p.rating} (${p.reviews})</span></div>
      <div class="price-row">
        <span class="price-now">₹${p.now.toLocaleString('en-IN')}</span>
        <span class="price-old">₹${p.old.toLocaleString('en-IN')}</span>
        <span class="price-off">${p.off}</span>
      </div>
      <button class="add-btn">Add to cart</button>
    </div>
  </div>
`).join('');

// ===== Cart interaction =====
let cartCount = 3;
grid.addEventListener('click', (e) => {
  if (e.target.classList.contains('add-btn')) {
    cartCount++;
    document.getElementById('cartCount').textContent = cartCount;
    e.target.textContent = 'Added ✓';
    e.target.style.background = 'var(--mint)';
    setTimeout(() => {
      e.target.textContent = 'Add to cart';
      e.target.style.background = '';
    }, 1200);
  }
});

