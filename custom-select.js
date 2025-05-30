// Custom Select Class
class CustomSelect {
  constructor(select) {
    this.select = select;
    this.isMultiple = select.multiple;
    this.placeholder = select.getAttribute('data-placeholder') || select.getAttribute('aria-label') || 'Select';
    // Find the associated label text to use as placeholder
    const labelElement = document.querySelector(`label[for="${select.id}"]`);
    if (labelElement) {
      this.placeholder = labelElement.textContent;
    }
    
    // Store this instance in a global array for later access
    if (!window.customSelects) {
      window.customSelects = [];
    }
    window.customSelects.push(this);
    
    this.options = Array.from(select.options).map(option => ({
      value: option.value,
      text: option.textContent,
      icon: this.getIconForOption(option.value, option.getAttribute('data-icon')),
      selected: option.selected
    }));
    
    // Track if this is the first time showing the dropdown
    this.firstSelection = true;
    
    // Create custom button
    this.button = document.createElement('button');
    this.button.className = 'custom-select-button';
    this.button.type = 'button';
    this.button.setAttribute('data-for', select.id);
    
    // Create selected value container
    const selectedValue = document.createElement('span');
    selectedValue.className = 'selected-value';
    
    // Create selected text element
    const selectedText = document.createElement('span');
    selectedText.className = 'selected-text';
    selectedText.textContent = this.placeholder;
    
    // Create dropdown arrow
    const arrow = document.createElement('span');
    arrow.className = 'dropdown-arrow';
    arrow.textContent = '▼';
    
    // Assemble button
    selectedValue.appendChild(selectedText);
    this.button.appendChild(selectedValue);
    this.button.appendChild(arrow);
    
    // Insert button after select
    select.parentNode.insertBefore(this.button, select.nextSibling);
    select.style.display = 'none'; // Hide original select
    
    // Find and hide the associated label
    const label = document.querySelector(`label[for="${select.id}"]`);
    if (label) {
      label.style.display = 'none';
    }
    
    // Add click event to button
    this.button.addEventListener('click', () => this.open());
    
    // Initial button update
    this.updateButton();
    
    // Track open state
    this.isOpen = false;
  }
  
  // Get appropriate icon for option based on its value
  getIconForOption(value, defaultIcon) {
    // Loan type icons
    const loanTypeIcons = {
      'conventional': '🏠',
      'fha': '🏛️',
      'va': '🎖️',
      'usda': '🌾',
      'arm': '📊'
    };
    
    // Loan term icons
    const loanTermIcons = {
      '30': '3️⃣0️⃣',
      '20': '2️⃣0️⃣',
      '15': '1️⃣5️⃣',
      '10': '1️⃣0️⃣',
      'custom': '⚙️'
    };
    
    // Try to find an icon based on the value
    return defaultIcon || loanTypeIcons[value] || loanTermIcons[value] || '📋';
  }
  
  updateButton() {
    const selectedValue = this.button.querySelector('.selected-value');
    const selectedText = this.button.querySelector('.selected-text');
    
    if (this.isMultiple) {
      // For multiple select
      const selected = this.options.filter(option => option.selected);
      
      if (selected.length === 0) {
        // No selections
        selectedValue.innerHTML = '';
        const text = document.createElement('span');
        text.className = 'selected-text';
        text.textContent = this.placeholder;
        selectedValue.appendChild(text);
      } else {
        // Show tags for each selection
        selectedValue.innerHTML = '';
        selected.forEach(option => {
          const tag = document.createElement('span');
          tag.className = 'selected-tag';
          tag.innerHTML = `
            <span class="tag-icon">${option.icon}</span>
            <span>${option.text}</span>
            <span class="tag-remove" data-value="${option.value}">×</span>
          `;
          selectedValue.appendChild(tag);
          
          // Add click handler to remove tag
          const removeBtn = tag.querySelector('.tag-remove');
          removeBtn.addEventListener('click', (e) => {
            e.stopPropagation(); // Prevent opening the dropdown
            const value = removeBtn.getAttribute('data-value');
            const option = this.options.find(opt => opt.value === value);
            if (option) {
              option.selected = false;
              // Update actual select element
              Array.from(this.select.options).forEach(opt => {
                if (opt.value === value) opt.selected = false;
              });
              this.updateButton();
              
              // Trigger change event
              const event = new Event('change', { bubbles: true });
              this.select.dispatchEvent(event);
            }
          });
        });
        this.firstSelection = false;
      }
    } else {
      // For single select
      const selected = this.options.find(option => option.selected);
      
      // If this is the first time showing the dropdown or no option is selected, show the placeholder
      if (this.firstSelection) {
        selectedText.textContent = this.placeholder;
      } else if (selected) {
        selectedText.textContent = selected.text;
      } else {
        selectedText.textContent = this.placeholder;
      }
    }
  }
  
  open() {
    // Create overlay if it doesn't exist
    let overlay = document.getElementById('selectOverlay');
    if (!overlay) {
      overlay = document.createElement('div');
      overlay.id = 'selectOverlay';
      overlay.className = 'select-overlay';
      document.body.appendChild(overlay);
    }
    
    // Clear previous content
    overlay.innerHTML = '';
    
    // Create container
    const container = document.createElement('div');
    container.className = 'select-container';
    
    // Create header
    const header = document.createElement('div');
    header.className = 'select-header';
    
    const title = document.createElement('h3');
    title.id = 'selectTitle';
    title.textContent = this.placeholder;
    
    header.appendChild(title);
    container.appendChild(header);
    
    // Create subtitle if multiple
    if (this.isMultiple) {
      const subtitle = document.createElement('div');
      subtitle.id = 'selectSubtitle';
      subtitle.className = 'select-subtitle';
      subtitle.textContent = 'Select all that apply';
      subtitle.style.display = 'block';
      container.appendChild(subtitle);
    }
    
    // Create options container
    const optionsContainer = document.createElement('div');
    optionsContainer.id = 'selectOptions';
    optionsContainer.className = 'options-container';
    
    // Add options
    this.options.forEach(option => {
      const optionEl = document.createElement('div');
      optionEl.className = 'option-item';
      if (option.selected) optionEl.classList.add('selected');
      optionEl.setAttribute('data-value', option.value);
      
      const iconEl = document.createElement('div');
      iconEl.className = 'option-icon';
      iconEl.textContent = option.icon;
      
      const labelEl = document.createElement('div');
      labelEl.className = 'option-label';
      labelEl.textContent = option.text;
      
      optionEl.appendChild(iconEl);
      optionEl.appendChild(labelEl);
      
      // Add click handler
      optionEl.addEventListener('click', () => {
        // Set firstSelection to false when an option is selected
        this.firstSelection = false;
        
        if (this.isMultiple) {
          // Toggle selection for multiple select
          const index = this.options.findIndex(opt => opt.value === option.value);
          this.options[index].selected = !this.options[index].selected;
          optionEl.classList.toggle('selected', this.options[index].selected);
          
          // Update actual select element
          Array.from(this.select.options).forEach(opt => {
            if (opt.value === option.value) {
              opt.selected = this.options[index].selected;
            }
          });
          
          this.updateButton();
        } else {
          // For single select, select one option and close
          this.options.forEach(opt => opt.selected = (opt.value === option.value));
          
          // Update actual select element
          Array.from(this.select.options).forEach(opt => {
            opt.selected = (opt.value === option.value);
          });
          
          this.updateButton();
          this.close();
        }
        
        // Trigger change event
        const event = new Event('change', { bubbles: true });
        this.select.dispatchEvent(event);
      });
      
      optionsContainer.appendChild(optionEl);
    });
    
    container.appendChild(optionsContainer);
    
    // Add actions (Done button)
    const actions = document.createElement('div');
    actions.className = 'select-actions';
    
    const doneBtn = document.createElement('button');
    doneBtn.className = 'select-done';
    doneBtn.textContent = 'Done';
    doneBtn.addEventListener('click', () => this.close());
    
    actions.appendChild(doneBtn);
    container.appendChild(actions);
    
    // Add container to overlay
    overlay.appendChild(container);
    
    // Show overlay
    setTimeout(() => {
      overlay.classList.add('active');
      this.button.classList.add('active');
    }, 10);
    
    // Store reference to active select
    document.activeSelect = this;
    this.isOpen = true;
    
    // Close when clicking outside
    overlay.addEventListener('click', (e) => {
      if (e.target === overlay) {
        this.close();
      }
    });
  }
  
  close() {
    const overlay = document.getElementById('selectOverlay');
    if (overlay) {
      overlay.classList.remove('active');
      setTimeout(() => {
        if (!document.activeSelect || !document.activeSelect.isOpen) {
          overlay.innerHTML = '';
        }
      }, 200);
    }
    this.button.classList.remove('active');
    this.isOpen = false;
    document.activeSelect = null;
  }
}

// Initialize custom selects when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
  // Initialize for loan type and loan term selects
  const loanTypeSelect = document.getElementById('buyer-loan-type');
  const loanTermSelect = document.getElementById('buyer-term-preset');
  
  if (loanTypeSelect) new CustomSelect(loanTypeSelect);
  if (loanTermSelect) new CustomSelect(loanTermSelect);
  
  // Add overlay element to the body if it doesn't exist
  if (!document.getElementById('selectOverlay')) {
    const overlay = document.createElement('div');
    overlay.id = 'selectOverlay';
    overlay.className = 'select-overlay';
    document.body.appendChild(overlay);
  }
  
  // Make sure the affordability toggle functionality works
  const affordabilityToggle = document.getElementById('affordability-toggle');
  const affordabilityFields = document.getElementById('affordability-fields');
  
  if (affordabilityToggle && affordabilityFields) {
    // Function to toggle affordability fields visibility
    function toggleAffordabilityFields() {
      if (affordabilityToggle.checked) {
        affordabilityFields.classList.add('active');
      } else {
        affordabilityFields.classList.remove('active');
      }
    }
    
    // Add event listener to checkbox
    affordabilityToggle.addEventListener('change', toggleAffordabilityFields);
    
    // Set initial state based on checkbox
    toggleAffordabilityFields();
  }
});
