const products = [
  { id: 1, name: "Urban Runner", category: "shoes", price: 549, icon: "👟" },
  { id: 2, name: "Classic Sneaker", category: "shoes", price: 699, icon: "👟" },
  { id: 3, name: "Daily Backpack", category: "bags", price: 399, icon: "🎒" },
  { id: 4, name: "Leather Crossbody", category: "bags", price: 459, icon: "👜" },
  { id: 5, name: "Minimal Watch", category: "accessories", price: 799, icon: "⌚" },
  { id: 6, name: "Everyday Cap", category: "accessories", price: 149, icon: "🧢" }
];

let cart = JSON.parse(localStorage.getItem("novashop-cart")) || [];

const productGrid = document.getElementById("productGrid");
const searchInput = document.getElementById("searchInput");
const categoryFilter = document.getElementById("categoryFilter");
const cartSection = document.getElementById("cartSection");
const cartItems = document.getElementById("cartItems");
const cartCount = document.getElementById("cartCount");
const cartTotal = document.getElementById("cartTotal");
const checkoutSection = document.getElementById("checkoutSection");
const checkoutForm = document.getElementById("checkoutForm");
const orderMessage = document.getElementById("orderMessage");

function saveCart() {
  localStorage.setItem("novashop-cart", JSON.stringify(cart));
}

function renderProducts() {
  const search = searchInput.value.trim().toLowerCase();
  const category = categoryFilter.value;

  const filtered = products.filter((product) => {
    const matchesSearch = product.name.toLowerCase().includes(search);
    const matchesCategory = category === "all" || product.category === category;
    return matchesSearch && matchesCategory;
  });

  productGrid.innerHTML = filtered.length
    ? filtered.map((product) => `
      <article class="product-card">
        <div class="product-image">${product.icon}</div>
        <div class="product-content">
          <h3>${product.name}</h3>
          <p>${product.category[0].toUpperCase() + product.category.slice(1)} · Ready for checkout</p>
          <div class="product-meta">
            <span class="price">${product.price.toFixed(2)} DH</span>
            <button class="add-button" onclick="addToCart(${product.id})">Add to cart</button>
          </div>
        </div>
      </article>
    `).join("")
    : "<p>No products found.</p>";
}

function addToCart(productId) {
  const existing = cart.find((item) => item.id === productId);
  if (existing) {
    existing.quantity += 1;
  } else {
    cart.push({ id: productId, quantity: 1 });
  }
  saveCart();
  renderCart();
  cartSection.classList.remove("hidden");
}

function changeQuantity(productId, delta) {
  const item = cart.find((entry) => entry.id === productId);
  if (!item) return;
  item.quantity += delta;
  if (item.quantity <= 0) {
    cart = cart.filter((entry) => entry.id !== productId);
  }
  saveCart();
  renderCart();
}

function removeFromCart(productId) {
  cart = cart.filter((item) => item.id !== productId);
  saveCart();
  renderCart();
}

function renderCart() {
  const count = cart.reduce((sum, item) => sum + item.quantity, 0);
  const total = cart.reduce((sum, item) => {
    const product = products.find((entry) => entry.id === item.id);
    return sum + (product ? product.price * item.quantity : 0);
  }, 0);

  cartCount.textContent = count;
  cartTotal.textContent = total.toFixed(2);

  if (!cart.length) {
    cartItems.innerHTML = "<p>Your cart is empty.</p>";
    checkoutSection.classList.add("hidden");
    return;
  }

  cartItems.innerHTML = cart.map((item) => {
    const product = products.find((entry) => entry.id === item.id);
    const lineTotal = product.price * item.quantity;
    return `
      <div class="cart-item">
        <div>
          <strong>${product.name}</strong>
          <small>${product.price.toFixed(2)} DH each · ${lineTotal.toFixed(2)} DH</small>
        </div>
        <div class="qty">
          <button onclick="changeQuantity(${product.id}, -1)">−</button>
          <span>${item.quantity}</span>
          <button onclick="changeQuantity(${product.id}, 1)">+</button>
        </div>
        <button class="remove-button" onclick="removeFromCart(${product.id})">Remove</button>
      </div>
    `;
  }).join("");
}

document.getElementById("cartButton").addEventListener("click", () => {
  cartSection.classList.toggle("hidden");
  cartSection.scrollIntoView({ behavior: "smooth" });
});

document.getElementById("closeCart").addEventListener("click", () => {
  cartSection.classList.add("hidden");
});

document.getElementById("checkoutButton").addEventListener("click", () => {
  checkoutSection.classList.toggle("hidden");
  checkoutSection.scrollIntoView({ behavior: "smooth" });
});

checkoutForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const formData = new FormData(checkoutForm);
  const name = formData.get("name");
  orderMessage.textContent = `Thank you ${name}! Your demo order has been placed.`;
  cart = [];
  saveCart();
  renderCart();
  checkoutForm.reset();
});

searchInput.addEventListener("input", renderProducts);
categoryFilter.addEventListener("change", renderProducts);

renderProducts();
renderCart();
