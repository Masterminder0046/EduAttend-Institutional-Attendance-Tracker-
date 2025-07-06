// Sections
const loginSection = document.getElementById('loginSection');
const registerSection = document.getElementById('registerSection');
const loginLoader = document.getElementById('loginLoader');

// Show Register Form
function showRegister() {
  loginSection.classList.add('d-none');
  registerSection.classList.remove('d-none');
  document.getElementById("loginForm").reset();
  document.getElementById("loginError").textContent = "";
  if (loginLoader) loginLoader.style.display = "none";
}

// Show Login Form
function showLogin() {
  registerSection.classList.add('d-none');
  loginSection.classList.remove('d-none');
  document.getElementById("registerForm").reset();
  document.getElementById("registerError").textContent = "";
  if (loginLoader) loginLoader.style.display = "none";
}

// Email Validation
function isValidEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

// Toggle Password Visibility
function togglePassword(id, el) {
  const input = document.getElementById(id);
  const icon = el.querySelector('i');
  if (input.type === "password") {
    input.type = "text";
    icon.classList.replace("fa-eye", "fa-eye-slash");
  } else {
    input.type = "password";
    icon.classList.replace("fa-eye-slash", "fa-eye");
  }
}

document.getElementById("registerForm").addEventListener("submit", function (e) {
  e.preventDefault();
  const name = document.getElementById("regName").value.trim();
  const email = document.getElementById("loginEmail").value.trim();
  const password = document.getElementById("regPassword").value.trim();
  const confirmPassword = document.getElementById("confirmPassword").value.trim(); // ✅ Match here
  const role = document.getElementById("regRole").value;

  if (!name || !email || !password || !confirmPassword || !role) {
    document.getElementById("registerError").textContent = "⚠️ Please fill all fields.";
    return;
  }

  if (password !== confirmPassword) {
    document.getElementById("registerError").textContent = "❌ Passwords do not match.";
    return;
  }

  const userData = { name, email, password, role };
  localStorage.setItem(email, JSON.stringify(userData));
  alert("✅ Registered successfully!");
  showLogin();
});



// Handle Login Submit
document.getElementById("loginForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const email = document.getElementById("regEmail").value.trim();
  const password = document.getElementById("loginPassword").value.trim();
  const errorBox = document.getElementById("loginError");

  errorBox.textContent = "";
  loginLoader.style.display = "block";

  if (!email || !isValidEmail(email)) {
    errorBox.textContent = "⚠️ Enter a valid email.";
    loginLoader.style.display = "none";
    return;
  }

  if (password.length < 6) {
    errorBox.textContent = "⚠️ Password must be at least 6 characters.";
    loginLoader.style.display = "none";
    return;
  }

  const user = JSON.parse(localStorage.getItem(email));

  if (!user || user.password !== password) {
    errorBox.textContent = "❌ Invalid email or password.";
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
        alert("⚠️ Unknown user role.");
    }
  }, 1500);
});

// Optional: Initial user check
const loggedEmail = localStorage.getItem("loggedInUser");
if (loggedEmail) {
  const currentUser = JSON.parse(localStorage.getItem(loggedEmail));
  if (currentUser) {
    console.log("Welcome", currentUser.name, "| Role:", currentUser.role);
  }
}
