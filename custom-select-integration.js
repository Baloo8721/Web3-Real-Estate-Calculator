// Integration between custom-select.js and the calculator logic
document.addEventListener('DOMContentLoaded', function() {
  // Wait a short time to ensure custom-select.js has initialized
  setTimeout(() => {
    // Get references to the original select elements
    const loanTypeSelect = document.getElementById('buyer-loan-type');
    const loanTermSelect = document.getElementById('buyer-term-preset');
    
    // Get references to the custom select buttons
    const loanTypeButton = document.querySelector('button[data-for="buyer-loan-type"]');
    const loanTermButton = document.querySelector('button[data-for="buyer-term-preset"]');
    
    // Function to synchronize custom select options with the underlying select element
    window.syncCustomSelectWithOriginal = function(selectId) {
      const select = document.getElementById(selectId);
      if (!select) return;
      
      // Find the corresponding custom select instance
      const customSelects = window.customSelects || [];
      const customSelect = customSelects.find(cs => cs.select.id === selectId);
      
      if (customSelect) {
        // Update the options in the custom select to match the original select
        customSelect.options.forEach(option => {
          const originalOption = Array.from(select.options).find(opt => opt.value === option.value);
          if (originalOption) {
            option.selected = originalOption.selected;
          }
        });
        
        // Update the button display
        customSelect.updateButton();
      }
    };
    
    // Add event listeners to the original select elements
    if (loanTypeSelect) {
      loanTypeSelect.addEventListener('change', function() {
        // Force reset the _hasBeenEdited flag to ensure PMI updates with loan type changes
        const pmiRateInput = document.getElementById('buyer-pmi-rate');
        if (pmiRateInput) pmiRateInput._hasBeenEdited = false;
        
        // Update down payment based on loan type
        updateDownPaymentBasedOnLoanType(this.value);
        
        // Update PMI based on the new loan type and down payment
        updatePmiBasedOnLoanTypeAndTerm();
      });
    }
    
    if (loanTermSelect) {
      loanTermSelect.addEventListener('change', function() {
        // Force reset the _hasBeenEdited flag to ensure PMI updates with loan term changes
        const pmiRateInput = document.getElementById('buyer-pmi-rate');
        if (pmiRateInput) pmiRateInput._hasBeenEdited = false;
        
        const loanTypeSelect = document.getElementById('buyer-loan-type');
        
        // If 7/1 ARM is selected, automatically update the loan type to ARM
        if (this.value === '7') {
          if (loanTypeSelect && loanTypeSelect.value !== 'arm') {
            updateLoanType('arm', 'Adjustable-Rate (ARM)');
          }
        } 
        // If standard fixed-rate term is selected (10, 15, 20, 30 years), revert to Conventional if currently ARM
        else if (['10', '15', '20', '30'].includes(this.value)) {
          // Only change to conventional if currently set to ARM
          if (loanTypeSelect && loanTypeSelect.value === 'arm') {
            updateLoanType('conventional', 'Conventional');
          }
        }
        
        // Helper function to update loan type and UI
        function updateLoanType(value, displayText) {
          // Update the original select element
          loanTypeSelect.value = value;
          
          // Update the options in the original select element
          Array.from(loanTypeSelect.options).forEach(option => {
            option.selected = (option.value === value);
          });
          
          // Update the custom select button text
          const loanTypeButton = document.querySelector('button[data-for="buyer-loan-type"]');
          if (loanTypeButton) {
            const selectedTextSpan = loanTypeButton.querySelector('.selected-text');
            if (selectedTextSpan) {
              selectedTextSpan.textContent = displayText;
            }
          }
          
          // Synchronize the custom select with the original select
          if (window.syncCustomSelectWithOriginal) {
            window.syncCustomSelectWithOriginal('buyer-loan-type');
          }
          
          // Also update any currently open dropdown
          const targetOption = document.querySelector(`.custom-select-options[data-for="buyer-loan-type"] .option-item[data-value="${value}"]`);
          if (targetOption) {
            // Remove selected class from all options
            const allOptions = document.querySelectorAll('.custom-select-options[data-for="buyer-loan-type"] .option-item');
            allOptions.forEach(option => {
              option.classList.remove('selected');
              // Reset the background color and border color
              option.style.backgroundColor = 'rgba(38, 198, 218, 0.1)';
              option.style.borderColor = 'rgba(38, 198, 218, 0.3)';
            });
            
            // Add selected class to target option
            targetOption.classList.add('selected');
            // Update the styling for the selected option
            targetOption.style.backgroundColor = 'rgba(38, 198, 218, 0.3)';
            targetOption.style.borderColor = 'rgba(38, 198, 218, 0.5)';
          }
          
          // Trigger the change event on the loan type select to update PMI and down payment
          const event = new Event('change', { bubbles: true });
          loanTypeSelect.dispatchEvent(event);
        }
        
        updatePmiBasedOnLoanTypeAndTerm();
      });
    }
    
    // Update closing costs when budget changes
    const budgetSlider = document.getElementById('budget');
    if (budgetSlider) {
      budgetSlider.addEventListener('input', updateClosingCosts);
    }
    
    // Update PMI rate when down payment changes
    const downPaymentSlider = document.getElementById('down-payment-slider');
    if (downPaymentSlider) {
      downPaymentSlider.addEventListener('input', function() {
        // Force reset the _hasBeenEdited flag to ensure PMI updates with down payment changes
        const pmiRateInput = document.getElementById('buyer-pmi-rate');
        if (pmiRateInput) pmiRateInput._hasBeenEdited = false;
        updatePmiBasedOnDownPayment();
      });
    }
    
    // Update PMI when down payment preset buttons are clicked
    const presetButtons = document.querySelectorAll('.down-payment-preset');
    presetButtons.forEach(button => {
      button.addEventListener('click', function() {
        // Force reset the _hasBeenEdited flag to ensure PMI updates with preset button clicks
        const pmiRateInput = document.getElementById('buyer-pmi-rate');
        if (pmiRateInput) pmiRateInput._hasBeenEdited = false;
        
        // Set the down payment slider value to match the preset button
        const downPaymentValue = parseFloat(this.getAttribute('data-value'));
        const downPaymentSlider = document.getElementById('down-payment-slider');
        if (downPaymentSlider) {
          downPaymentSlider.value = downPaymentValue;
          // Trigger the input event to update the UI
          const event = new Event('input', { bubbles: true });
          downPaymentSlider.dispatchEvent(event);
        }
        
        updatePmiBasedOnDownPayment();
      });
    });
    
    // Initialize closing costs based on current budget
    updateClosingCosts();
    
    // Initialize PMI based on current loan type, term, and down payment
    updatePmiBasedOnLoanTypeAndTerm();
  }, 100);
});

// Function to update closing costs based on budget
function updateClosingCosts() {
  const budget = parseFloat(document.getElementById('buyer-price').value) || 300000;
  const closingCostsInput = document.getElementById('buyer-closing-costs');
  
  if (closingCostsInput && !closingCostsInput._hasBeenEdited) {
    // Default closing costs are typically 3% of home price
    const defaultClosingCosts = Math.round(budget * 0.03);
    closingCostsInput.value = defaultClosingCosts;
    
    // Add a one-time event listener to track if the user manually edits the field
    if (!closingCostsInput._listenerAdded) {
      closingCostsInput.addEventListener('input', function() {
        this._hasBeenEdited = true;
      });
      closingCostsInput._listenerAdded = true;
    }
  }
}

// Function to update PMI based on loan type, term, and down payment percentage
function updatePmiBasedOnLoanTypeAndTerm() {
  const downPaymentPercent = parseFloat(document.getElementById('down-payment-slider').value) || 3.5;
  const pmiRateInput = document.getElementById('buyer-pmi-rate');
  const loanTypeSelect = document.getElementById('buyer-loan-type');
  const loanTermSelect = document.getElementById('buyer-term-preset');
  
  // Add a one-time event listener to track if the user manually edits the PMI field
  if (pmiRateInput && !pmiRateInput._listenerAdded) {
    pmiRateInput.addEventListener('input', function() {
      this._hasBeenEdited = true;
    });
    pmiRateInput._listenerAdded = true;
  }
  
  if (pmiRateInput && loanTypeSelect && loanTermSelect && !pmiRateInput._hasBeenEdited) {
    const loanType = loanTypeSelect.value;
    const loanTerm = loanTermSelect.value;
    
    // Always set PMI to 0 for 20% or more down payment, regardless of loan type (except USDA)
    if (downPaymentPercent >= 20 && loanType !== 'usda') {
      pmiRateInput.value = '0';
      return;
    }
    
    // Set PMI based on loan type, term, and down payment
    if (loanType === 'va') {
      // VA loans don't have PMI regardless of term or down payment
      pmiRateInput.value = '0';
    } else if (loanType === 'usda') {
      // USDA has fixed annual fee of 0.35% regardless of term or down payment
      pmiRateInput.value = '0.35';
    } else if (loanType === 'fha') {
      // FHA has annual MIP that varies by term and down payment
      if (loanTerm === '15' || parseInt(loanTerm) <= 15) {
        // 15-year or shorter term FHA loans have lower MIP
        if (downPaymentPercent >= 10) {
          pmiRateInput.value = '0.45'; // 11 years for 15-year term with ≥10% down
        } else {
          pmiRateInput.value = '0.70'; // Life of loan for 15-year term with <10% down
        }
      } else {
        // 30-year or longer term FHA loans have higher MIP
        if (downPaymentPercent >= 10) {
          pmiRateInput.value = '0.55'; // 11 years for 30-year term with ≥10% down
        } else {
          pmiRateInput.value = '0.85'; // Life of loan for 30-year term with <10% down
        }
      }
    } else if (loanType === 'arm') {
      // ARM loans typically have similar PMI to conventional but slightly higher
      if (downPaymentPercent >= 15) {
        pmiRateInput.value = '0.35';
      } else if (downPaymentPercent >= 10) {
        pmiRateInput.value = '0.45';
      } else if (downPaymentPercent >= 5) {
        pmiRateInput.value = '0.55';
      } else {
        pmiRateInput.value = '0.65';
      }
    } else {
      // Conventional loans
      // PMI varies by term and down payment for conventional loans
      if (loanTerm === '15' || parseInt(loanTerm) <= 15) {
        // 15-year or shorter term conventional loans have lower PMI
        if (downPaymentPercent >= 15) {
          pmiRateInput.value = '0.25';
        } else if (downPaymentPercent >= 10) {
          pmiRateInput.value = '0.35';
        } else if (downPaymentPercent >= 5) {
          pmiRateInput.value = '0.45';
        } else {
          pmiRateInput.value = '0.55';
        }
      } else {
        // 30-year or longer term conventional loans have higher PMI
        if (downPaymentPercent >= 15) {
          pmiRateInput.value = '0.3';
        } else if (downPaymentPercent >= 10) {
          pmiRateInput.value = '0.4';
        } else if (downPaymentPercent >= 5) {
          pmiRateInput.value = '0.5';
        } else {
          pmiRateInput.value = '0.6';
        }
      }
    }
    
    // Add a one-time event listener to track if the user manually edits the field
    if (!pmiRateInput._listenerAdded) {
      pmiRateInput.addEventListener('input', function() {
        this._hasBeenEdited = true;
      });
      pmiRateInput._listenerAdded = true;
    }
  }
}

// Function to update PMI based on down payment percentage
// This is now a wrapper that calls the more comprehensive function
function updatePmiBasedOnDownPayment() {
  updatePmiBasedOnLoanTypeAndTerm();
}

// Function to update down payment based on loan type
function updateDownPaymentBasedOnLoanType(loanType) {
  const downPaymentSlider = document.getElementById('down-payment-slider');
  const downPaymentOutput = document.getElementById('down-payment-output');
  const downPaymentAmountSpan = document.getElementById('down-payment-amount');
  const downPaymentPresetButtons = document.querySelectorAll('.down-payment-preset');
  
  if (!downPaymentSlider) return;
  
  // Set minimum down payment based on loan type
  let minDownPayment;
  
  switch(loanType) {
    case 'fha':
      minDownPayment = 3.5; // FHA minimum
      break;
    case 'va':
      minDownPayment = 0; // VA can be 0% down
      break;
    case 'usda':
      minDownPayment = 0; // USDA can be 0% down
      break;
    case 'conventional':
      minDownPayment = 3; // Conventional can go as low as 3% with some programs
      break;
    case 'arm':
      minDownPayment = 5; // ARMs often require higher down payments
      break;
    default:
      minDownPayment = 3;
  }
  
  // Get current down payment percentage
  const currentDownPayment = parseFloat(downPaymentSlider.value);
  
  // Only update if current down payment is less than the minimum for the selected loan type
  if (currentDownPayment < minDownPayment) {
    // Update the slider value to the minimum required for this loan type
    downPaymentSlider.value = minDownPayment;
    
    // Call the existing visualization function directly
    // This function is defined in budgetCalculator.js
    if (window.updateDownPaymentVisualization) {
      window.updateDownPaymentVisualization(minDownPayment);
    } else {
      // Fallback if the function isn't directly accessible
      // This will update the output text and amount
      if (downPaymentOutput) {
        const homePrice = parseInt(document.getElementById('buyer-price').value) || 300000;
        const downPaymentAmount = Math.round(homePrice * (minDownPayment / 100));
        
        // Format the percentage for display
        let formattedPercent;
        if (Math.abs(minDownPayment - 3.5) < 0.05) {
          formattedPercent = '3.5%';
        } else {
          const roundedPercent = Math.round(minDownPayment * 10) / 10;
          formattedPercent = roundedPercent % 1 === 0 ? `${Math.round(roundedPercent)}%` : `${roundedPercent}%`;
        }
        
        // Format the amount with commas
        const formattedAmount = new Intl.NumberFormat('en-US').format(downPaymentAmount);
        
        // Update the display elements
        downPaymentOutput.textContent = formattedPercent;
        if (downPaymentAmountSpan) downPaymentAmountSpan.textContent = formattedAmount;
        
        // Update hidden form fields
        document.getElementById('buyer-down').value = downPaymentAmount;
        document.getElementById('buyer-down-percent').value = minDownPayment;
        
        // Update the slider gradient
        const percentage = (minDownPayment / 90) * 100;
        downPaymentSlider.style.background = `linear-gradient(90deg, #26c6da 0%, #64b5f6 ${percentage/2}%, #ab47bc 100%)`;
      }
    }
    
    // Update the active state of the preset buttons
    downPaymentPresetButtons.forEach(button => {
      const buttonValue = parseFloat(button.getAttribute('data-value'));
      if (buttonValue === minDownPayment) {
        button.classList.add('active');
        button.style.backgroundColor = 'rgba(38, 198, 218, 0.3)';
        button.style.borderColor = 'rgba(38, 198, 218, 0.5)';
      } else {
        button.classList.remove('active');
        button.style.backgroundColor = 'rgba(38, 198, 218, 0.1)';
        button.style.borderColor = 'rgba(38, 198, 218, 0.3)';
      }
    });
  }
}
