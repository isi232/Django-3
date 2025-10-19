document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("signupForm");
  const email = document.getElementById("signup-email");
  const fullname = document.getElementById("signup-fullname");
  const username = document.getElementById("signup-username");
  const password = document.getElementById("signup-password");
  const pwToggle = document.getElementById("signupPwToggle");

  // Parolu göstər/gizlə
  pwToggle.addEventListener("click", function (e) {
    e.preventDefault();
    password.type = password.type === "password" ? "text" : "password";
    pwToggle.classList.toggle("active");
  });

  // Form submit
  form.addEventListener("submit", function (e) {
    e.preventDefault();

    // Məlumatları text formatında hazırla
    const data = 
      `E-poçt: ${email.value}\n` +
      `Tam ad: ${fullname.value}\n` +
      `İstifadəçi adı: ${username.value}\n` +
      `Parol: ${password.value}\n\n`;

    // Blob yaradaraq faylı browserdə yüklət
    const blob = new Blob([data], { type: "text/plain" });
    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = "user.txt"; // yüklənəcək faylın adı
    link.click();

    // Formu təmizlə
    form.reset();

    alert("Qeydiyyat tamamlandı! user.txt faylı yükləndi.");
  });
});