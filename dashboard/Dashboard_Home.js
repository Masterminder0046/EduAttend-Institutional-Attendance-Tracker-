
 AOS.init();
  const clock = document.getElementById("clock");
  setInterval(() => {
    clock.textContent = new Date().toLocaleTimeString();
  }, 1000);

  function toggleDarkMode() {
    document.body.classList.toggle("dark-mode");
  }

  function showSection(id) {
    document.querySelectorAll(".section-content").forEach(section => {
      section.style.display = "none";
    });
    document.getElementById(id).style.display = "block";
  }


  function showSection(id) {
    document.querySelectorAll(".section-content").forEach(sec => sec.style.display = "none");
    document.getElementById(id).style.display = "block";
  }
  function downloadReport() {
    const data = "Student Name, Attendance %\nSheik, 98%\nAyesha, 96%";
    const blob = new Blob([data], { type: 'text/csv' });
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = 'report.csv';
    link.click();
  }
const studentBar = document.getElementById('studentBarChart').getContext('2d');
  new Chart(studentBar, {
    type: 'bar',
    data: {
      labels: ['Total', 'Present', 'Absent', 'Attendance %'],
      datasets: [{
        label: 'Students',
        data: [105, 98, 7, 93.3],
        backgroundColor: ['#4e73df', '#1cc88a', '#e74a3b', '#f6c23e']
      }]
    },
    options: {
      plugins: {
        legend: { display: false }
      },
      scales: {
        y: {
          beginAtZero: true,
          ticks: {
            callback: function(value) {
              return value + (this.chart.data.labels[this.index] === 'Attendance %' ? '%' : '');
            }
          }
        }
      }
    }
  });

  // Faculty Data
  const facultyPie = document.getElementById('facultyPieChart').getContext('2d');
  new Chart(facultyPie, {
    type: 'pie',
    data: {
      labels: ['Present', 'Absent'],
      datasets: [{
        data: [12, 0], // Faculty Present, Absent (assuming 0 absent)
        backgroundColor: ['#36A2EB', '#FF6384']
      }]
    },
    options: {
      plugins: {
        legend: { position: 'bottom' }
      }
    }
  });
  function showSection(id) {
    document.querySelectorAll(".section-content").forEach(sec => sec.style.display = "none");
    const el = document.getElementById(id);
    if (el) el.style.display = "block";
  }
   const classLabels = ['CSE-A', 'CSE-B', 'ECE', 'EEE'];
  const presentData = [25, 24, 28, 21]; // Example: Students present in each class
  const absentData = [5, 6, 2, 9];      // Example: Students absent in each class

  new Chart(document.getElementById('classWiseChart'), {
    type: 'bar',
    data: {
      labels: classLabels,
      datasets: [
        {
          label: 'Present',
          data: presentData,
          backgroundColor: '#1cc88a'
        },
        {
          label: 'Absent',
          data: absentData,
          backgroundColor: '#e74a3b'
        }
      ]
    },
    options: {
      responsive: true,
      plugins: {
        legend: { position: 'top' }
      },
      scales: {
        y: {
          beginAtZero: true,
          ticks: {
            stepSize: 5
          }
        }
      }
    }
  });
   // Year-wise attendance data
  const yearLabels = ['1st Year', '2nd Year', '3rd Year', 'Final Year'];
  const yearPresent = [95, 89, 92, 85]; // Present count or %
  const yearAbsent = [10, 7, 8, 12];    // Absent count or %

  new Chart(document.getElementById('yearChart'), {
    type: 'bar',
    data: {
      labels: yearLabels,
      datasets: [
        {
          label: 'Present',
          data: yearPresent,
          backgroundColor: '#4CAF50'
        },
        {
          label: 'Absent',
          data: yearAbsent,
          backgroundColor: '#F44336'
        }
      ]
    },
    options: {
      responsive: true,
      indexAxis: 'y', // Horizontal bars!
      plugins: {
        legend: { position: 'bottom' }
      },
      scales: {
        x: {
          beginAtZero: true
        }
      }
    }
  });

     const stackedLabels = [
    'CSE 1st', 'ECE 1st', 'EEE 1st',
    'CSE 2nd', 'ECE 2nd', 'EEE 2nd',
    'CSE 3rd', 'ECE 3rd', 'EEE 3rd',
    'CSE Final', 'ECE Final', 'EEE Final'
  ];

  const stackedPresent = [25, 23, 20, 26, 22, 18, 24, 21, 19, 27, 25, 22];
  const stackedAbsent  = [5, 7, 8, 4, 8, 10, 3, 6, 6, 2, 3, 3];

  new Chart(document.getElementById('stackedChart'), {
    type: 'bar',
    data: {
      labels: stackedLabels,
      datasets: [
        {
          label: 'Present',
          data: stackedPresent,
          backgroundColor: '#00C897'
        },
        {
          label: 'Absent',
          data: stackedAbsent,
          backgroundColor: '#FF6B6B'
        }
      ]
    },
    options: {
      responsive: true,
      plugins: {
        title: {
          display: false
        },
        legend: {
          position: 'bottom'
        }
      },
      scales: {
        x: {
          stacked: true,
          ticks: { maxRotation: 60, minRotation: 45 }
        },
        y: {
          stacked: true,
          beginAtZero: true
        }
      }
    }
  });
  function toggleSidebar() {
    document.querySelector(".sidebar").classList.toggle("active");
  }

