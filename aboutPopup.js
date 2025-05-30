document.addEventListener('DOMContentLoaded', function() {
  // Close about popup when clicking the close button
  document.getElementById('close-about').addEventListener('click', function() {
    const overlay = document.getElementById('about-overlay');
    overlay.style.opacity = '0';
    setTimeout(function() {
      overlay.style.display = 'none';
    }, 300);
  });
  
  // Close about popup when clicking outside the popup
  document.getElementById('about-overlay').addEventListener('click', function(e) {
    if (e.target === this) {
      this.style.opacity = '0';
      setTimeout(() => {
        this.style.display = 'none';
      }, 300);
    }
  });
  
  // Prevent closing when clicking inside the popup
  document.querySelector('.about-popup').addEventListener('click', function(e) {
    e.stopPropagation();
  });
});

// Function to open the about popup
function openAboutPopup() {
  const overlay = document.getElementById('about-overlay');
  overlay.style.display = 'flex';
  setTimeout(function() {
    overlay.style.opacity = '1';
  }, 10);
}
