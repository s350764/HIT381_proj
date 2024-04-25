document.addEventListener("DOMContentLoaded", function() {
    const menuToggle = document.querySelector('.menu-toggle input');
    const menuItems = document.querySelectorAll('.menu a');

    menuItems.forEach(item => {
        item.addEventListener('click', () => {
            menuToggle.checked = false;
        });
    });
});

document.getElementById("loginForm").addEventListener("submit", function(event) {
  // Prevent the default form submission
  event.preventDefault();
  
  // Redirect to the desired page
  window.location.href = "home.html"; // Replace "dashboard.php" with your desired URL
});

