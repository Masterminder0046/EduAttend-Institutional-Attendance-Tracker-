   let step = 0;
const steps = document.querySelectorAll(".form-step");
const regForm = document.getElementById("regForm");

function showStep() {
  steps.forEach((s, i) => {
    s.classList.remove("active", "flip-in", "flip-out");
    if (i === step) {
      s.classList.add("active", "flip-in");
      gsap.from(s, { opacity: 0, y: 50, duration: 0.5 });
    }
  });
}

function nextStep() {
  const current = steps[step];
  const inputs = current.querySelectorAll("input, select");
  let valid = true;

  inputs.forEach((input) => {
    if (!input.checkValidity()) valid = false;
  });

  if (!valid) {
    current.querySelector("input, select").reportValidity();
    return;
  }

  // Password confirm check (optional - use only before preview step)
  if (step === 6) {
    const pass = document.getElementById("password").value;
    const confirm = document.getElementById("confirmPassword").value;
    if (pass !== confirm) {
      alert("❌ Passwords do not match!");
      return;
    }
  }

  function showStep() {
  steps.forEach((s, i) => {
    s.classList.remove("active");
    if (i === step) {
      s.classList.add("active");
      gsap.fromTo(s, 
        { opacity: 0, scale: 0.95, rotateX: 10, y: 30 },
        { opacity: 1, scale: 1, rotateX: 0, y: 0, duration: 0.6, ease: "power2.out" }
      );
    }
  });
}

  setTimeout(() => {
    steps[step].classList.remove("flip-out");
    step++;
    showStep();
    if (step === steps.length - 1) fillPreview();
  }, 300);
}

function prevStep() {
  steps[step].classList.remove("active", "flip-in");
  steps[step].classList.add("flip-out");

  setTimeout(() => {
    steps[step].classList.remove("flip-out");
    step--;
    showStep();
  }, 300);
}

function fillPreview() {
  document.getElementById("p_name").textContent = document.getElementById("name").value;
  document.getElementById("p_regno").textContent = document.getElementById("regno").value;
  document.getElementById("p_email").textContent = document.getElementById("email").value;
  document.getElementById("p_phone").textContent = document.getElementById("phone").value;
  document.getElementById("p_dept").textContent = document.getElementById("dept").value;
  document.getElementById("p_year").textContent = document.getElementById("year").value;
  document.getElementById("p_gender").textContent = document.querySelector('input[name="gender"]:checked').value;
}

function togglePass(id, el) {
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

regForm.addEventListener("submit", function (e) {
  e.preventDefault();
  const data = {
    name: name.value,
    regno: regno.value,
    email: email.value,
    phone: phone.value,
    dept: dept.value,
    year: year.value,
    gender: document.querySelector('input[name="gender"]:checked').value,
    password: password.value
  };
  localStorage.setItem(data.email, JSON.stringify(data));
  alert("✅ Registered successfully!");
  regForm.reset();
  location.reload();
});
