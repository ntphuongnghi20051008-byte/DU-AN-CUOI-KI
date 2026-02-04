const products = [
  { name: "Laptop Dell", price: 1500 },
  { name: "Chuột Logitech", price: 25 },
  { name: "Bàn phím cơ", price: 80 },
  { name: "Tai nghe Sony", price: 120 },
  { name: "Màn hình Samsung", price: 300 }
];

const list = document.getElementById("productList");
const searchInput = document.getElementById("search");
const error = document.getElementById("error");

function renderProducts(data) {
  list.innerHTML = "";
  data.forEach(p => {
    list.innerHTML += `
      <div class="product">
        <h3>${p.name}</h3>
        <p>Giá: $${p.price}</p>
      </div>
    `;
  });
}

renderProducts(products);

searchInput.addEventListener("input", () => {
  const keyword = searchInput.value.trim().toLowerCase();
  const result = products.filter(p =>
    p.name.toLowerCase().includes(keyword)
  );

  if (result.length === 0) {
    error.textContent = "Không tìm thấy sản phẩm!";
    list.innerHTML = "";
  } else {
    error.textContent = "";
    renderProducts(result);
  }
});
