const form = document.getElementById("registerForm");
const msg = document.getElementById("message");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value;
  const pass = document.getElementById("password").value;
  const agree = document.getElementById("agree").checked;

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const passRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/;

  if (!emailRegex.test(email)) {
    msg.textContent = "Email không hợp lệ!";
    return;
  }

  if (!passRegex.test(pass)) {
    msg.textContent = "Mật khẩu chưa đủ mạnh!";
    return;
  }

  if (!agree) {
    msg.textContent = "Bạn phải đồng ý điều khoản!";
    return;
  }

  localStorage.setItem("user", JSON.stringify({ name, email }));
  msg.textContent = "Đăng ký thành công!";
});
