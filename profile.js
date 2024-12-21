// Function to handle profile edit form submission
function updateProfile(event) {
    event.preventDefault(); // Prevent form submission
  
    // Get the values from the input fields
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
  
    // Simple validation for non-empty fields
    if (!name || !email || !phone) {
      alert("Please fill in all the fields.");
      return;
    }
  
    // Update the profile information dynamically (for demonstration)
    document.getElementById('display-name').textContent = name;
    document.getElementById('display-email').textContent = email;
    document.getElementById('display-phone').textContent = phone;
  
    // Provide a confirmation message
    alert("Profile updated successfully!");
  }
  
  // Function to enable editing mode
  function enableEdit() {
    document.getElementById('profile-info').style.display = 'none';
    document.getElementById('profile-edit-form').style.display = 'block';
  }
  
  // Function to cancel the edit and go back to the profile view
  function cancelEdit() {
    document.getElementById('profile-info').style.display = 'block';
    document.getElementById('profile-edit-form').style.display = 'none';
  }
  
  // Function to pre-fill the form with existing profile data
  function loadProfileData() {
    // Pre-fill with sample data (this can be dynamic if connected to a database)
    document.getElementById('name').value = 'vignesh';
    document.getElementById('email').value = 'vigneshvvigneshv25@gmail.com';
    document.getElementById('phone').value = '+123456677';
  }
  
  // Load the profile data when the page loads
  window.onload = function() {
    loadProfileData();
  };
  