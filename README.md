<!-- README.md for EduAttend Project -->

 EduAttend – Institutional Attendance Tracker (Frontend Only)

**EduAttend** is a frontend-only mock web application designed for educational institutions to manage student attendance. It features role-based access for Admin and Faculty, localStorage-based mock authentication, and interactive dashboards.

---

 🚀 Features

 🔐 Authentication
- Login & Registration forms with validation
- Role-based redirects (Admin vs Faculty)
- LocalStorage-based user data simulation

 📊 Dashboard Interface
- Responsive layout with sidebar, header, and stat cards
- Displays total students, present today, and other metrics
- Dynamic UI updates based on user role

 🧑‍🎓 Student Management (Admin)
- View student list (loaded from localStorage or JSON)
- Add/Edit/Delete student entries with validation
- Pagination for easy navigation

 📅 Attendance Tracking (Faculty)
- Faculty sees only their assigned class
- Mark attendance using checkboxes
- Auto timestamp on submit
- Store attendance in browser (simulate backend)

---

 🧱 Tech Stack
- HTML5
- CSS3 (with animations/glassmorphism/neon optional)
- JavaScript (Vanilla)
- LocalStorage (for mock data persistence)

---

 📁 Folder Structure
```
EduAttend/
├── index.html
├── login.html
├── register.html
├── dashboard.html
├── students.html
├── attendance.html
├── css/
│   └── style.css
├── js/
│   ├── auth.js
│   ├── dashboard.js
│   ├── students.js
│   ├── attendance.js
│   └── utils.js
└── assets/
    └── (optional images/icons)
```

---

 📝 Getting Started
1. Clone or download the project folder.
2. Open `login.html` in your browser to begin.
3. Register a new user and login based on role.
4. Admin can manage students; Faculty can mark attendance.

---

 ⚠️ Disclaimer
This is a **mock-only** project. There’s no real backend or API. All data is stored and simulated using the browser’s localStorage.

---

 🙌 Credits
Developed by: Sheik (Frontend Developer – 2025)
