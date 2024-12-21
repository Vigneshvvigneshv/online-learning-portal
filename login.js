// Function to validate login form
function validateLogin(event) {
    event.preventDefault(); // Prevent form submission
  
    // Get the username and password values
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
  
    // Simple validation for non-empty fields
    if (!username || !password) {
      alert("Please fill in both fields.");
      return;
    }
  
    // Check if the username and password match a sample account (you can replace this with backend logic)
    if (username === "john.doe@example.com" && password === "password123") {
      alert("Login successful!");
      window.location.href = "dashboard.html"; // Redirect to the dashboard page
    } else {
      alert("Invalid username or password.");
    }
  }
// Function to validate login form
function validateLogin(event) {
  event.preventDefault(); // Prevent form submission

  // Get the username and password values
  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;

  // Simple validation for non-empty fields
  if (!username || !password) {
    alert("Please fill in both fields.");
    return;
  }

  // Check if the username and password match a sample account (you can replace this with backend logic)
  if (username === "john.doe@example.com" && password === "password123") {
    alert("Login successful!");
    window.location.href = "dashboard.html"; // Redirect to the dashboard page
  } else {
    alert("Invalid username or password.");
  }
}
  function myFunction() {
    window.location.href="dashboard.html";  
  }
 
  
    