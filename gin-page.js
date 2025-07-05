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
      const user = JSON.parse(localStorage.getItem(email));
      if (!user || user.password !== password) {
        document.getElementById("loginError").textContent = "Invalid email or password.";
        return;
      }
      loginLoader.style.display = "block";
      setTimeout(() => {
        localStorage.setItem("loggedInUser", email);
        window.location.href = user.role === "admin" ? "dashboard.html" : "attendance.html";
      }, 1500);
    });
