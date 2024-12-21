// Simulated user data (replace with actual API data in a real application)
const userData = {
    name: "Vignesh",
    enrolledCourses: 5,
    completedCourses: 2,
    upcomingDeadlines: 3,
  };
  
  // Populate dashboard with user data
  document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("userName").textContent = userData.name;
    document.getElementById("enrolledCourses").textContent = userData.enrolledCourses;
    document.getElementById("completedCourses").textContent = userData.completedCourses;
    document.getElementById("upcomingDeadlines").textContent = userData.upcomingDeadlines;
  
    // Logout button functionality
    const logoutButton = document.getElementById("logoutButton");
    logoutButton.addEventListener("click", () => {
      alert("You have been logged out!");
      window.location.href = "login.html";
    });
  });
  
  
  