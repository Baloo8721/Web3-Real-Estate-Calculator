// JavaScript for crypto popup functionality
document.addEventListener('DOMContentLoaded', function() {
  // Close popup when clicking the close button
  document.getElementById('close-crypto').addEventListener('click', function() {
    const overlay = document.getElementById('crypto-overlay');
    overlay.style.opacity = '0';
    setTimeout(function() {
      overlay.style.display = 'none';
    }, 300);
  });
  
  // Close popup when clicking outside the popup
  document.getElementById('crypto-overlay').addEventListener('click', function(e) {
    if (e.target === this) {
      this.style.opacity = '0';
      setTimeout(() => {
        this.style.display = 'none';
      }, 300);
    }
  });
});
