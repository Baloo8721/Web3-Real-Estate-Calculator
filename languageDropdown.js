// Language dropdown functionality - Simple implementation
document.addEventListener('DOMContentLoaded', function() {
  const moreLanguages = document.querySelector('.more-languages');
  
  // Initialize language selector
  if (moreLanguages) {
    moreLanguages.addEventListener('click', function(e) {
      e.stopPropagation();
      const dropdown = this.querySelector('.language-dropdown');
      
      // Toggle the dropdown with proper display handling
      if (dropdown.style.display === 'none' || dropdown.style.display === '') {
        closeAllLanguageDropdowns(); // Close any other open dropdowns
        dropdown.style.display = 'block';
      } else {
        dropdown.style.display = 'none';
      }
    });
  }
  
  // Close dropdown when clicking outside
  document.addEventListener('click', function() {
    closeAllLanguageDropdowns();
  });
  
  // Prevent dropdown from closing when clicking inside it
  const dropdowns = document.querySelectorAll('.language-dropdown');
  dropdowns.forEach(dropdown => {
    dropdown.addEventListener('click', function(e) {
      e.stopPropagation();
    });
  });
});

// Function to close all language dropdowns
function closeAllLanguageDropdowns() {
  const dropdowns = document.querySelectorAll('.language-dropdown');
  dropdowns.forEach(dropdown => {
    dropdown.style.display = 'none';
  });
}

// Function to change language
function changeLanguage(lang) {
  console.log(`Changing language to: ${lang}`);
  
  // Here you would implement your language change logic
  // For example, loading different language files or updating text content
  
  // Close all dropdowns after language selection
  closeAllLanguageDropdowns();
}
