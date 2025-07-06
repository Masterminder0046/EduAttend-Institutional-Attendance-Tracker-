 const loginSection = document.getElementById('loginSection');
    const registerSection = document.getElementById('registerSection');
    const loginLoader = document.getElementById('loginLoader');

    function showRegister() {
      loginSection.classList.add('d-none');
      registerSection.classList.remove('d-none');
    }

    function showLogin() {
      registerSection.classList.add('d-none');
      loginSection.classList.remove('d-none');
    }

  function isValidEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

    document.getElementById("registerForm").addEventListener("submit", function (e) {
      e.preventDefault();
      const name = document.getElementById("regName").value.trim();
      const email = document.getElementById("regEmail").value.trim();
      const password = document.getElementById("regPassword").value.trim();
      const role = document.getElementById("regRole").value;

      if (!name || !email || !password || !role) {
        document.getElementById("registerError").textContent = "Please fill all fields.";
        return;
      }

      const userData = { name, email, password, role };
      localStorage.setItem(email, JSON.stringify(userData));
      alert("Registered successfully!");
      showLogin();
    });

    document.getElementById("loginForm").addEventListener("submit", function (e) {
      e.preventDefault();

      const email = document.getElementById("loginEmail").value.trim();
      const password = document.getElementById("loginPassword").value.trim();
      const errorBox = document.getElementById("loginError");

      errorBox.textContent = "";
      loginLoader.style.display = "block";

      if (!email || !isValidEmail(email)) {
        errorBox.textContent = "Enter a valid email.";
        loginLoader.style.display = "none";
        return;
      }

      if (password.length < 6) {
        errorBox.textContent = "Password must be at least 6 characters.";
        loginLoader.style.display = "none";
        return;
      }

      const user = JSON.parse(localStorage.getItem(email));
      if (!user || user.password !== password) {
        errorBox.textContent = "Invalid email or password.";
        loginLoader.style.display = "none";
        return;
      }

      localStorage.setItem("loggedInUser", email);

      setTimeout(() => {
        loginLoader.style.display = "none";
        switch (user.role) {
          case "admin":
            window.location.href = "dashboard.html";
            break;
          case "faculty":
            window.location.href = "attendance.html";
            break;
          case "student":
            window.location.href = "form.html";
            break;
          default:
            alert("Unknown role!");
        }
      }, 1500);
    });