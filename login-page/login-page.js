 const loginSection = document.getElementById("loginSection");
  const registerSection = document.getElementById("registerSection");
  const loginLoader = document.getElementById("loginLoader");

  function showRegister() {
    loginSection.classList.add("d-none");
    registerSection.classList.remove("d-none");
    document.getElementById("loginForm").reset();
    document.getElementById("loginError").textContent = "";
    loginLoader.style.display = "none";
  }

  function showLogin() {
    registerSection.classList.add("d-none");
    loginSection.classList.remove("d-none");
    document.getElementById("registerForm").reset();
    document.getElementById("registerError").textContent = "";
    loginLoader.style.display = "none";
  }

  function togglePassword(id, el) {
    const input = document.getElementById(id);
    const icon = el.querySelector("i");
    if (input.type === "password") {
      input.type = "text";
      icon.classList.replace("fa-eye", "fa-eye-slash");
    } else {
      input.type = "password";
      icon.classList.replace("fa-eye-slash", "fa-eye");
    }
  }

  function removeEmoji(input) {
    const emojiRegex = /[\p{Extended_Pictographic}]/gu;
    input.value = input.value.replace(emojiRegex, '');
  }

  function handlePaste(e, input) {
    e.preventDefault();
    const pasted = (e.clipboardData || window.clipboardData).getData("text");
    input.value += pasted.replace(/[\p{Extended_Pictographic}]/gu, '');
  }

  document.getElementById("registerForm").addEventListener("submit", function(e) {
    e.preventDefault();
    debugger;
    const name = document.getElementById("regName").value.trim();
  
    const email = document.getElementById("regEmail").value.trim();
    const password = document.getElementById("regPassword").value.trim();
    const confirm = document.getElementById("confirmPassword").value.trim();
    const role = document.getElementById("regRole").value;

    if (!name || !email || !password || !confirm || !role) {
      document.getElementById("registerError").textContent = "⚠️ Please fill all fields.";
      return;
    }

    if (password !== confirm) {
      document.getElementById("registerError").textContent = "❌ Passwords do not match.";
      return;
    }

    const userData = { name, email, password, role };
    localStorage.setItem(email, JSON.stringify(userData));
    alert("✅ Registered successfully!");
    showLogin();
  });

  document.getElementById("loginForm").addEventListener("submit", function(e) {
    e.preventDefault();
    const email = document.getElementById("loginEmail").value.trim();
    const password = document.getElementById("loginPassword").value.trim();
    document.getElementById("loginError").textContent = "";
    loginLoader.style.display = "block";

    const user = JSON.parse(localStorage.getItem(email));
    if (!user || user.password !== password) {
      document.getElementById("loginError").textContent = "❌ Invalid email or password.";
      loginLoader.style.display = "none";
      return;
    }

    setTimeout(() => {
      loginLoader.style.display = "none";
      localStorage.setItem("loggedInUser", email);
      if (user.role === "admin") window.location.href = "https://masterminder0046.github.io/EduAttend-Institutional-Attendance-Tracker-/dashboard/Dashboard-home.html";
      else if (user.role === "faculty") window.location.href = "attendance.html";
      else window.location.href = "form.html";
    }, 1500);
  });