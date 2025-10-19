document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("loginForm");
  const username = document.getElementById("login-username");
  const password = document.getElementById("login-password");
  const pwToggle = document.getElementById("loginPwToggle");

  const defaultUser = {
    username: "admin",
    password: "123456"
  };

  pwToggle.addEventListener("click", function (e) {
    e.preventDefault();
    password.type = password.type === "password" ? "text" : "password";
  });

  form.addEventListener("submit", function (e) {
    e.preventDefault();
    if (username.value === defaultUser.username && password.value === defaultUser.password) {
      alert("Giriş uğurludur! Sayta yönləndirilirsiniz...");
      window.location.href = "home";
    } else {
      alert("İstifadəçi adı və ya parol səhvdir!");
    }
  });
});
