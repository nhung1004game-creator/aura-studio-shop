const products = [
  // --- NHÓM THỜI TRANG ---
  {
    id: 1,
    name: "Áo Blazer Linen Dáng Rộng",
    price: 850000,
    category: "ao",
    badge: "Thời trang",
    optionLabel: "Kích cỡ",
    options: ["Size S", "Size M", "Size L"],
    description: "Chất liệu Linen tưng cao cấp thoáng mát, đứng phom tự nhiên. Thiết kế độn vai nhẹ mang lại vẻ ngoài thanh lịch, dễ dàng phối cùng quần tây hoặc chân váy lụa.",
    image: "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: 2,
    name: "Đầm Lụa Cổ Đổ Thanh Lịch",
    price: 720000,
    category: "dam",
    badge: "Thời trang",
    optionLabel: "Kích cỡ",
    options: ["Size S", "Size M", "Size L"],
    description: "Đầm lụa Satin có độ bóng nhẹ tự nhiên, bề mặt mềm mịn ôm rủ theo đường cong cơ thể. Phù hợp cho các buổi tiệc tối, sự kiện nghệ thuật hoặc hẹn hò.",
    image: "https://images.unsplash.com/photo-1595777457583-95e059d581b8?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: 3,
    name: "Áo Sơ Mi Oxford Trắng",
    price: 450000,
    category: "ao",
    badge: "Thời trang",
    optionLabel: "Kích cỡ",
    options: ["Size S", "Size M", "Size L"],
    description: "100% Cotton Oxford dệt dày dặn, ít nhăn và thấm hút mồ hôi vượt trội. Đường may tỉ mỉ với phom dáng Relaxed Fit hiện đại, phù hợp mặc đi làm lẫn dạo phố.",
    image: "https://images.unsplash.com/photo-1598033129183-c4f50c736f10?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: 4,
    name: "Quần Tây Ống Suông Cạp Cao",
    price: 590000,
    category: "quan",
    badge: "Thời trang",
    optionLabel: "Kích cỡ",
    options: ["Size S", "Size M", "Size L"],
    description: "Thiết kế cạp cao kèm ly xếp tinh tế giúp tôn dáng và kéo dài đôi chân. Chất vải Tuytsi co giãn nhẹ, không xù lông và giữ nếp ly thẳng đẹp suốt ngày dài.",
    image: "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?auto=format&fit=crop&w=600&q=80"
  },

  // --- NHÓM ẤN PHẨM ---
  {
    id: 5,
    name: "AURA Lookbook Thu Đông (Số 04)",
    price: 180000,
    category: "tap-chi",
    badge: "Ấn phẩm",
    optionLabel: "Phiên bản",
    options: ["Bản tiêu chuẩn", "Bản giới hạn"],
    description: "Ấn phẩm dày 120 trang in màu trên giấy mỹ thuật Munken nhập khẩu. Tổng hợp các bộ ảnh thời trang tối giản và bài phỏng vấn độc quyền cùng các giám đốc sáng tạo.",
    image: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: 6,
    name: "Artbook: Minimalist Fashion",
    price: 420000,
    category: "tap-chi",
    badge: "Ấn phẩm",
    optionLabel: "Loại bìa",
    options: ["Bìa mềm", "Bìa cứng"],
    description: "Sách ảnh nghệ thuật khổ lớn (24x32 cm) lưu giữ hơn 200 tác phẩm nhiếp ảnh thời trang đương đại. Lý tưởng để làm nguồn cảm hứng thiết kế hoặc trưng bày bàn trà.",
    image: "https://images.unsplash.com/photo-1512820790803-83ca734da794?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: 7,
    name: "Poster Nghệ Thuật Trừu Tượng",
    price: 220000,
    category: "poster",
    badge: "Ấn phẩm",
    optionLabel: "Quy cách",
    options: ["Khổ A3 (Giấy mỹ thuật)", "Khổ A2 (Giấy mỹ thuật)", "Khổ A3 + Khung gỗ"],
    description: "Tranh in công nghệ Giclée sắc nét trên nền giấy Fine Art định lượng 250gsm bền màu trên 20 năm. Đóng gói kèm ống giấy cứng chống gãy gập khi vận chuyển.",
    image: "https://images.unsplash.com/photo-1579783902614-a3fb3927b675?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: 8,
    name: "Sổ Tay Planner Bìa Vải Linen",
    price: 150000,
    category: "so-tay",
    badge: "Ấn phẩm",
    optionLabel: "Kích thước",
    options: ["Khổ A5 (Trơn)", "Khổ A5 (Kẻ chấm)", "Khổ B5 (Trơn)"],
    description: "Sổ tay khâu gáy mở phẳng 180 độ, bìa bọc vải Linen tự nhiên chống bám bẩn. Ruột giấy kem 100gsm dày dặn, chống thấm mực sang trang sau khi viết bút máy.",
    image: "https://images.unsplash.com/photo-1531346878377-a5be20888e57?auto=format&fit=crop&w=600&q=80"
  }
];

let cart = JSON.parse(localStorage.getItem("aura_concept_cart")) || [];
let currentCategory = "all";
let searchKeyword = "";

const productListEl = document.getElementById("product-list");
const cartCountEl = document.getElementById("cart-count");
const cartItemsEl = document.getElementById("cart-items");
const cartTotalEl = document.getElementById("cart-total");
const cartModal = document.getElementById("cart-modal");
const productModal = document.getElementById("product-modal");
const productModalBody = document.getElementById("product-modal-body");
const filterButtons = document.querySelectorAll(".filter-btn");
const searchInput = document.getElementById("search-input");

function formatCurrency(amount) {
  return amount.toLocaleString("vi-VN") + " ₫";
}

function saveCartToStorage() {
  localStorage.setItem("aura_concept_cart", JSON.stringify(cart));
}

function removeVietnameseTones(str) {
  return str
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/đ/g, "d")
    .replace(/Đ/g, "D")
    .toLowerCase();
}

// 1. Hiển thị danh sách sản phẩm (Bấm vào ảnh hoặc tên sẽ mở Modal chi tiết)
function renderProducts() {
  const normalizedKeyword = removeVietnameseTones(searchKeyword.trim());

  const filtered = products.filter(product => {
    const matchCategory = currentCategory === "all" || product.category === currentCategory;
    const matchName = removeVietnameseTones(product.name).includes(normalizedKeyword);
    return matchCategory && matchName;
  });

  if (filtered.length === 0) {
    productListEl.innerHTML = `
      <p class="no-result">Không tìm thấy sản phẩm nào phù hợp với từ khóa "${searchKeyword}".</p>
    `;
    return;
  }

  productListEl.innerHTML = filtered.map(product => `
    <div class="product-card">
      <span class="product-badge">${product.badge}</span>
      <div class="product-img-wrapper" onclick="openProductModal(${product.id})">
        <img src="${product.image}" alt="${product.name}" class="product-img">
      </div>
      <div class="product-info">
        <div>
          <h3 class="product-name" onclick="openProductModal(${product.id})">${product.name}</h3>
          <p class="product-price">${formatCurrency(product.price)}</p>
        </div>
        <div>
          <div class="option-row">
            <label for="opt-${product.id}">${product.optionLabel}:</label>
            <select id="opt-${product.id}" class="option-select">
              ${product.options.map(opt => `<option value="${opt}">${opt}</option>`).join("")}
            </select>
          </div>
          <button class="add-to-cart" onclick="addToCart(${product.id}, 'opt-${product.id}')">
            Thêm vào giỏ
          </button>
        </div>
      </div>
    </div>
  `).join("");
}

// 2. Mở cửa sổ xem chi tiết sản phẩm
function openProductModal(productId) {
  const product = products.find(p => p.id === productId);
  if (!product) return;

  productModalBody.innerHTML = `
    <img src="${product.image}" alt="${product.name}" class="modal-img">
    <div class="modal-details">
      <span class="modal-badge">${product.badge}</span>
      <h2 class="modal-title">${product.name}</h2>
      <p class="modal-price">${formatCurrency(product.price)}</p>
      <p class="modal-desc">${product.description}</p>
      
      <div class="modal-option-row">
        <label for="modal-opt-${product.id}"><strong>${product.optionLabel}:</strong></label>
        <select id="modal-opt-${product.id}" class="option-select">
          ${product.options.map(opt => `<option value="${opt}">${opt}</option>`).join("")}
        </select>
      </div>

      <button class="checkout-btn" onclick="addToCart(${product.id}, 'modal-opt-${product.id}', true)">
        Thêm Vào Giỏ Hàng
      </button>
    </div>
  `;

  productModal.classList.add("active");
}

// Đóng cửa sổ chi tiết sản phẩm
document.getElementById("close-product-modal").addEventListener("click", () => {
  productModal.classList.remove("active");
});

productModal.addEventListener("click", (e) => {
  if (e.target === productModal) {
    productModal.classList.remove("active");
  }
});

// 3. Thêm sản phẩm vào giỏ (Hỗ trợ thêm từ thẻ ngoài hoặc từ trong Modal)
function addToCart(productId, selectElementId, closeModalAfter = false) {
  const product = products.find(p => p.id === productId);
  const selectEl = document.getElementById(selectElementId);
  const selectedOption = selectEl ? selectEl.value : product.options[0];

  const existingItem = cart.find(
    item => item.id === productId && item.option === selectedOption
  );

  if (existingItem) {
    existingItem.quantity += 1;
  } else {
    cart.push({
      id: product.id,
      name: product.name,
      price: product.price,
      option: selectedOption,
      quantity: 1
    });
  }

  saveCartToStorage();
  updateCartUI();

  if (closeModalAfter) {
    productModal.classList.remove("active");
    cartModal.classList.add("active");
  }
}

// 4. Tăng / Giảm số lượng sản phẩm trong giỏ hàng
function changeQuantity(index, delta) {
  cart[index].quantity += delta;

  // Nếu số lượng giảm về 0 thì tự động xóa khỏi giỏ
  if (cart[index].quantity <= 0) {
    cart.splice(index, 1);
  }

  saveCartToStorage();
  updateCartUI();
}

function removeFromCart(index) {
  cart.splice(index, 1);
  saveCartToStorage();
  updateCartUI();
}

// 5. Cập nhật giao diện giỏ hàng kèm nút +/-
function updateCartUI() {
  const totalCount = cart.reduce((sum, item) => sum + item.quantity, 0);
  const totalPrice = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  cartCountEl.textContent = totalCount;
  cartTotalEl.textContent = formatCurrency(totalPrice);

  if (cart.length === 0) {
    cartItemsEl.innerHTML = '<p class="empty-msg">Chưa có sản phẩm nào trong giỏ.</p>';
    return;
  }

  cartItemsEl.innerHTML = cart.map((item, index) => `
    <div class="cart-item">
      <div>
        <h4>${item.name}</h4>
        <div class="cart-item-meta">
          ${item.option} | ${formatCurrency(item.price)}
        </div>
      </div>
      <div class="cart-item-actions">
        <div class="qty-controls">
          <button class="qty-btn" onclick="changeQuantity(${index}, -1)">-</button>
          <span class="qty-number">${item.quantity}</span>
          <button class="qty-btn" onclick="changeQuantity(${index}, 1)">+</button>
        </div>
        <button class="remove-btn" onclick="removeFromCart(${index})">Xóa</button>
      </div>
    </div>
  `).join("");
}

// Tìm kiếm & Bộ lọc
searchInput.addEventListener("input", (e) => {
  searchKeyword = e.target.value;
  renderProducts();
});

filterButtons.forEach(btn => {
  btn.addEventListener("click", () => {
    filterButtons.forEach(b => b.classList.remove("active"));
    btn.classList.add("active");
    currentCategory = btn.getAttribute("data-category");
    renderProducts();
  });
});

// Đóng / Mở giỏ hàng và Thanh toán
document.getElementById("open-cart-btn").addEventListener("click", () => {
  cartModal.classList.add("active");
});

document.getElementById("close-cart-btn").addEventListener("click", () => {
  cartModal.classList.remove("active");
});

document.getElementById("checkout-btn").addEventListener("click", async () => {
  if (cart.length === 0) {
    alert("Giỏ hàng của bạn đang trống!");
    return;
  }

  const name = document.getElementById("cust-name").value.trim();
  const phone = document.getElementById("cust-phone").value.trim();
  const address = document.getElementById("cust-address").value.trim();

  if (!name || !phone || !address) {
    alert("Vui lòng điền đầy đủ Họ tên, Số điện thoại và Địa chỉ nhận hàng!");
    return;
  }

  const phoneRegex = /^[0-9]{9,11}$/;
  if (!phoneRegex.test(phone)) {
    alert("Số điện thoại không hợp lệ! Vui lòng chỉ nhập từ 9 đến 11 chữ số.");
    return;
  }

  const checkoutBtn = document.getElementById("checkout-btn");
  checkoutBtn.textContent = "Đang xử lý đơn hàng...";
  checkoutBtn.disabled = true;

  // Gộp danh sách sản phẩm trong giỏ thành chuỗi văn bản dễ đọc
  const orderItemsText = cart
    .map(item => `- ${item.name} (${item.option}) x ${item.quantity}: ${formatCurrency(item.price * item.quantity)}`)
    .join("\n");

  const totalPrice = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  // THAY ĐỊA CHỈ GMAIL CỦA BẠN VÀO DÒNG DƯỚI ĐÂY
  const YOUR_EMAIL = "email_cua_ban@gmail.com";

  try {
    const response = await fetch(`https://formsubmit.co/ajax/${YOUR_EMAIL}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify({
        _subject: `Đơn hàng mới từ ${name} - AURA STUDIO`,
        "Khách hàng": name,
        "Số điện thoại": phone,
        "Địa chỉ giao hàng": address,
        "Chi tiết sản phẩm": orderItemsText,
        "Tổng thanh toán": formatCurrency(totalPrice)
      })
    });

    if (response.ok) {
      alert("ĐẶT HÀNG THÀNH CÔNG! Đơn hàng đã được gửi tới hệ thống AURA STUDIO.");
      cart = [];
      saveCartToStorage();
      updateCartUI();
      document.getElementById("cust-name").value = "";
      document.getElementById("cust-phone").value = "";
      document.getElementById("cust-address").value = "";
      cartModal.classList.remove("active");
    } else {
      alert("Có lỗi xảy ra khi gửi đơn hàng. Vui lòng thử lại!");
    }
  } catch (error) {
    alert("Không thể kết nối mạng. Vui lòng kiểm tra kết nối Internet!");
  } finally {
    checkoutBtn.textContent = "Xác Nhận Đặt Hàng";
    checkoutBtn.disabled = false;
  }
});

// Khởi chạy ban đầu
renderProducts();
updateCartUI();