// Function to update budget visualization
function updateBudgetVisualization(value, skipPaymentUpdate = false) {
  // Format the budget value with commas
  const formattedValue = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0
  }).format(value);
  
  // Update the budget output
  document.getElementById('budget-output').textContent = formattedValue;
  
  // Update the hidden input for form submission
  document.getElementById('buyer-price').value = value;
  
  // Update the slider gradient based on the current value
  const percentage = ((value - 100000) / (3000000 - 100000)) * 100;
  const slider = document.getElementById('budget');
  slider.style.background = `linear-gradient(90deg, #26c6da 0%, #64b5f6 ${percentage/2}%, #ab47bc 100%)`;
  
  // Update BTC amount (assuming 1 BTC = $105,500 - update this rate as needed)
  const btcRate = 105500; // Current BTC rate in USD
  const btcAmount = value / btcRate;
  const formattedBtc = btcAmount.toFixed(2);
  document.getElementById('btc-amount').textContent = `₿${formattedBtc}`;
  
  // Update down payment amount based on the new home price
  // Only if the down payment elements exist and we're not in a skip cycle
  if (document.getElementById('down-payment-slider') && !skipPaymentUpdate) {
    const downPaymentPercent = parseFloat(document.getElementById('down-payment-slider').value);
    updateDownPaymentVisualization(downPaymentPercent, true); // Skip budget update to avoid circular updates
  }
  
  // Only update payment if not skipped (to prevent circular updates)
  if (!skipPaymentUpdate) {
    // Calculate monthly payment
    const downPaymentPercent = 0.05; // 5% down payment
    const loanAmount = value * (1 - downPaymentPercent);
    const interestRate = 0.07; // 7% interest rate
    const loanTermYears = 30;
    
    // Calculate principal and interest
    const monthlyInterestRate = interestRate / 12;
    const numberOfPayments = loanTermYears * 12;
    const principalAndInterest = loanAmount * (monthlyInterestRate * Math.pow(1 + monthlyInterestRate, numberOfPayments)) / (Math.pow(1 + monthlyInterestRate, numberOfPayments) - 1);
    
    // Calculate property tax (0.82% annually)
    const annualPropertyTaxRate = 0.0082;
    const monthlyPropertyTax = (value * annualPropertyTaxRate) / 12;
    
    // Calculate PMI (1% of loan amount annually)
    const annualPmiRate = 0.01;
    const monthlyPmi = (loanAmount * annualPmiRate) / 12;
    
    // Calculate insurance (scaled based on home value)
    const baseInsurance = 2325; // Annual insurance for a $300k home
    const baseHomeValue = 300000;
    const annualInsurance = baseInsurance * (value / baseHomeValue);
    const monthlyInsurance = annualInsurance / 12;
    
    // Calculate total monthly payment
    const totalMonthlyPayment = principalAndInterest + monthlyPropertyTax + monthlyPmi + monthlyInsurance;
    
    // Update monthly payment display
    const formattedPayment = new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0
    }).format(totalMonthlyPayment);
    document.getElementById('monthly-payment').textContent = formattedPayment;
    
    // Update satoshi amount (monthly payment in sats)
    const satsPerBtc = 100000000; // 100 million sats per BTC
    const paymentInBtc = totalMonthlyPayment / btcRate;
    const paymentInSats = paymentInBtc * satsPerBtc;
    const formattedSats = (paymentInSats / 1000000).toFixed(2); // Display in millions
    document.getElementById('sats-amount').textContent = `₿${formattedSats}M sats`;
    
    // Update payment breakdown details
    document.getElementById('principal-interest').textContent = new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0
    }).format(principalAndInterest);
    
    document.getElementById('property-tax').textContent = new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0
    }).format(monthlyPropertyTax);
    
    document.getElementById('pmi').textContent = new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0
    }).format(monthlyPmi);
    
    document.getElementById('insurance').textContent = new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0
    }).format(monthlyInsurance);
  }
}

// Function to calculate home price from monthly payment
function calculateHomePriceFromMonthlyPayment(desiredMonthlyPayment) {
  // Constants
  const downPaymentPercent = 0.05;
  const interestRate = 0.07;
  const loanTermYears = 30;
  const annualPropertyTaxRate = 0.0082;
  const annualPmiRate = 0.01;
  const baseInsurance = 2325;
  const baseHomeValue = 300000;
  
  // Initial guess for home price
  let homePrice = 300000;
  let previousHomePrice = 0;
  let iterations = 0;
  const maxIterations = 20;
  const tolerance = 1;
  
  // Iterative approach to find the home price
  while (Math.abs(homePrice - previousHomePrice) > tolerance && iterations < maxIterations) {
    previousHomePrice = homePrice;
    
    // Calculate loan amount
    const loanAmount = homePrice * (1 - downPaymentPercent);
    
    // Calculate principal and interest
    const monthlyInterestRate = interestRate / 12;
    const numberOfPayments = loanTermYears * 12;
    const principalAndInterest = loanAmount * (monthlyInterestRate * Math.pow(1 + monthlyInterestRate, numberOfPayments)) / (Math.pow(1 + monthlyInterestRate, numberOfPayments) - 1);
    
    // Calculate property tax
    const monthlyPropertyTax = (homePrice * annualPropertyTaxRate) / 12;
    
    // Calculate PMI
    const monthlyPmi = (loanAmount * annualPmiRate) / 12;
    
    // Calculate insurance
    const annualInsurance = baseInsurance * (homePrice / baseHomeValue);
    const monthlyInsurance = annualInsurance / 12;
    
    // Calculate total monthly payment
    const calculatedMonthlyPayment = principalAndInterest + monthlyPropertyTax + monthlyPmi + monthlyInsurance;
    
    // Adjust home price based on difference between calculated and desired payment
    homePrice = homePrice * (desiredMonthlyPayment / calculatedMonthlyPayment);
    
    iterations++;
  }
  
  // Ensure home price is within valid range
  homePrice = Math.max(100000, Math.min(3000000, homePrice));
  
  return Math.round(homePrice);
}

// Make monthly payment editable
function makePaymentEditable() {
  const monthlyPayment = document.getElementById('monthly-payment');
  const typeHint = document.getElementById('type-hint');
  
  // Create input element
  const input = document.createElement('input');
  input.type = 'text';
  input.value = monthlyPayment.textContent.replace(/[^0-9]/g, '');
  input.style.fontSize = '20px';
  input.style.fontWeight = '600';
  input.style.color = '#26c6da';
  input.style.background = 'transparent';
  input.style.border = 'none';
  input.style.borderBottom = '1px solid #26c6da';
  input.style.width = '100px';
  input.style.textAlign = 'center';
  input.style.outline = 'none';
  
  // Replace the monthly payment with the input
  monthlyPayment.textContent = '';
  monthlyPayment.appendChild(input);
  
  // Show the edit hint
  typeHint.style.opacity = '1';
  
  // Focus the input
  input.focus();
  
  // Handle input blur
  input.addEventListener('blur', function() {
    applyPaymentInput(this);
  });
  
  // Handle Enter key
  input.addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
      applyPaymentInput(this);
    }
  });
  
  function applyPaymentInput(inputElement) {
    let value = inputElement.value.replace(/[^0-9]/g, '');
    
    // Ensure value is at least 100
    if (value === '' || parseInt(value) < 100) {
      value = '100';
    }
    
    // Format the value
    const formattedValue = new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0
    }).format(value);
    
    // Calculate the home price based on the monthly payment
    const homePrice = calculateHomePriceFromMonthlyPayment(parseInt(value));
    
    // Update the budget slider and visualization
    document.getElementById('budget').value = homePrice;
    updateBudgetVisualization(homePrice, true); // Skip payment update to avoid circular updates
    
    // Update the monthly payment display
    monthlyPayment.textContent = formattedValue;
    
    // Hide the edit hint
    typeHint.style.opacity = '0.7';
  }
}

// Enable direct budget input when clicking on the budget output
function enableDirectBudgetInput() {
  const budgetOutput = document.getElementById('budget-output');
  const budgetDirectInput = document.getElementById('budget-direct-input');
  
  // Hide the output and show the input
  budgetOutput.style.display = 'none';
  budgetDirectInput.style.display = 'inline-block';
  
  // Set the input value (remove currency formatting)
  budgetDirectInput.value = budgetOutput.textContent.replace(/[^0-9]/g, '');
  
  // Focus the input
  budgetDirectInput.focus();
}

// Handle Enter key in the direct budget input
function handleBudgetInputKeydown(event) {
  if (event.key === 'Enter') {
    applyDirectBudgetInput();
  }
}

// Apply the direct budget input value
function applyDirectBudgetInput() {
  const budgetOutput = document.getElementById('budget-output');
  const budgetDirectInput = document.getElementById('budget-direct-input');
  const budgetSlider = document.getElementById('budget');
  
  // Get the input value
  let value = budgetDirectInput.value.replace(/[^0-9]/g, '');
  
  // Ensure value is within range
  if (value === '' || parseInt(value) < 100000) {
    value = '100000';
  } else if (parseInt(value) > 3000000) {
    value = '3000000';
  }
  
  // Update the slider value
  budgetSlider.value = value;
  
  // Update the visualization
  updateBudgetVisualization(parseInt(value));
  
  // Hide the input and show the output
  budgetDirectInput.style.display = 'none';
  budgetOutput.style.display = 'inline-block';
}

// Make BTC amount editable
function makeBtcEditable() {
  const btcAmount = document.getElementById('btc-amount');
  const btcDirectInput = document.getElementById('btc-direct-input');
  
  // Hide the display and show the input
  btcAmount.style.opacity = '0';
  btcDirectInput.style.display = 'inline-block';
  
  // Set the input value (remove currency formatting)
  btcDirectInput.value = btcAmount.textContent.replace('₿', '');
  
  // Focus the input
  btcDirectInput.focus();
}

// Apply BTC direct input
function applyBtcDirectInput() {
  const btcAmount = document.getElementById('btc-amount');
  const btcDirectInput = document.getElementById('btc-direct-input');
  const budgetSlider = document.getElementById('budget');
  
  // Get the input value
  let value = btcDirectInput.value.replace(/[^0-9.]/g, '');
  
  // Ensure value is valid
  if (value === '' || isNaN(parseFloat(value))) {
    value = '0.01';
  }
  
  // Calculate USD equivalent (assuming 1 BTC = $105,500)
  const btcRate = 105500;
  const usdValue = parseFloat(value) * btcRate;
  
  // Ensure USD value is within range
  const clampedUsdValue = Math.max(100000, Math.min(3000000, usdValue));
  
  // Update the slider value
  budgetSlider.value = clampedUsdValue;
  
  // Update the visualization
  updateBudgetVisualization(clampedUsdValue);
  
  // Hide the input and show the display
  btcDirectInput.style.display = 'none';
  btcAmount.style.opacity = '1';
}

// Make Satoshi amount editable
function makeSatsEditable() {
  const satsAmount = document.getElementById('sats-amount');
  const satsDirectInput = document.getElementById('sats-direct-input');
  
  // Hide the display and show the input
  satsAmount.style.opacity = '0';
  satsDirectInput.style.display = 'inline-block';
  
  // Set the input value (remove formatting)
  satsDirectInput.value = satsAmount.textContent.replace('₿', '').replace('M sats', '');
  
  // Focus the input
  satsDirectInput.focus();
}

// Apply Satoshi direct input
function applySatsDirectInput() {
  const satsAmount = document.getElementById('sats-amount');
  const satsDirectInput = document.getElementById('sats-direct-input');
  const monthlyPayment = document.getElementById('monthly-payment');
  
  // Get the input value
  let value = satsDirectInput.value.replace(/[^0-9.]/g, '');
  
  // Ensure value is valid
  if (value === '' || isNaN(parseFloat(value))) {
    value = '0.1';
  }
  
  // Calculate USD equivalent (assuming 1 BTC = $105,500 and 1 BTC = 100M sats)
  const btcRate = 105500;
  const satsPerBtc = 100000000;
  const satsInMillions = parseFloat(value);
  const sats = satsInMillions * 1000000;
  const btcValue = sats / satsPerBtc;
  const usdValue = btcValue * btcRate;
  
  // Update the monthly payment
  monthlyPayment.textContent = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0
  }).format(usdValue);
  
  // Calculate the home price based on the monthly payment
  const homePrice = calculateHomePriceFromMonthlyPayment(usdValue);
  
  // Update the budget slider and visualization
  document.getElementById('budget').value = homePrice;
  updateBudgetVisualization(homePrice, true);
  
  // Hide the input and show the display
  satsDirectInput.style.display = 'none';
  satsAmount.style.opacity = '1';
}

// Toggle payment details visibility
function togglePaymentDetails() {
  const paymentDetails = document.getElementById('payment-details');
  const detailsArrow = document.getElementById('details-arrow');
  const showDetailsButton = document.getElementById('show-details');
  
  if (paymentDetails.style.display === 'none') {
    paymentDetails.style.display = 'block';
    detailsArrow.textContent = '▲';
    showDetailsButton.textContent = 'Hide details ';
    showDetailsButton.appendChild(detailsArrow);
  } else {
    paymentDetails.style.display = 'none';
    detailsArrow.textContent = '▼';
    showDetailsButton.textContent = 'Show details ';
    showDetailsButton.appendChild(detailsArrow);
  }
}

// Function to update down payment visualization
function updateDownPaymentVisualization(percentValue, skipBudgetUpdate = false) {
  // Get the current home price
  const homePrice = parseInt(document.getElementById('buyer-price').value);
  
  // Calculate the down payment amount
  const downPaymentPercent = parseFloat(percentValue);
  const downPaymentAmount = Math.round(homePrice * (downPaymentPercent / 100));
  
  // Format the percentage - handle special case for 3.5% to ensure it displays correctly
  let formattedPercent;
  if (Math.abs(downPaymentPercent - 3.5) < 0.05) {
    formattedPercent = '3.5%';
  } else {
    // For other values, round to 1 decimal place if needed
    const roundedPercent = Math.round(downPaymentPercent * 10) / 10;
    formattedPercent = roundedPercent % 1 === 0 ? `${Math.round(roundedPercent)}%` : `${roundedPercent}%`;
  }
  
  // Format the amount with commas
  const formattedAmount = new Intl.NumberFormat('en-US').format(downPaymentAmount);
  
  // Update the down payment output
  document.getElementById('down-payment-output').textContent = formattedPercent;
  document.getElementById('down-payment-amount').textContent = formattedAmount;
  
  // Update the hidden inputs for form submission
  document.getElementById('buyer-down').value = downPaymentAmount;
  document.getElementById('buyer-down-percent').value = downPaymentPercent;
  
  // Update the slider gradient based on the current value
  const percentage = (downPaymentPercent / 90) * 100;
  const slider = document.getElementById('down-payment-slider');
  slider.style.background = `linear-gradient(90deg, #26c6da 0%, #64b5f6 ${percentage/2}%, #ab47bc 100%)`;
  
  // Update the preset buttons
  updateDownPaymentPresetButtons(downPaymentPercent);
  
  // If not skipping budget update, update the payment estimate
  if (!skipBudgetUpdate && document.getElementById('budget')) {
    updateBudgetVisualization(document.getElementById('budget').value);
  }
}

// Function to update the down payment preset buttons
function updateDownPaymentPresetButtons(currentPercent) {
  const presetButtons = document.querySelectorAll('.down-payment-preset');
  
  presetButtons.forEach(button => {
    const buttonValue = parseFloat(button.getAttribute('data-value'));
    
    // Reset all buttons to default style
    button.style.backgroundColor = 'rgba(38, 198, 218, 0.1)';
    button.style.borderColor = 'rgba(38, 198, 218, 0.3)';
    button.classList.remove('active');
    
    // Highlight the active button - special handling for 3.5%
    if (buttonValue === 3.5 && Math.abs(currentPercent - 3.5) < 0.05) {
      button.style.backgroundColor = 'rgba(38, 198, 218, 0.3)';
      button.style.borderColor = 'rgba(38, 198, 218, 0.5)';
      button.classList.add('active');
    } else if (Math.abs(buttonValue - currentPercent) < 0.1) {
      button.style.backgroundColor = 'rgba(38, 198, 218, 0.3)';
      button.style.borderColor = 'rgba(38, 198, 218, 0.5)';
      button.classList.add('active');
    }
  });
}

// Enable direct down payment input when clicking on the output
function enableDirectDownPaymentInput() {
  const downPaymentOutput = document.getElementById('down-payment-output');
  const downPaymentDirectInput = document.getElementById('down-payment-direct-input');
  
  // Hide the output and show the input
  downPaymentOutput.style.display = 'none';
  downPaymentDirectInput.style.display = 'inline-block';
  
  // Set the input value (remove % sign)
  downPaymentDirectInput.value = downPaymentOutput.textContent.replace('%', '');
  
  // Focus the input
  downPaymentDirectInput.focus();
}

// Handle Enter key in the direct down payment input
function handleDownPaymentInputKeydown(event) {
  if (event.key === 'Enter') {
    applyDirectDownPaymentInput();
  }
}

// Apply the direct down payment input value
function applyDirectDownPaymentInput() {
  const downPaymentOutput = document.getElementById('down-payment-output');
  const downPaymentDirectInput = document.getElementById('down-payment-direct-input');
  const downPaymentSlider = document.getElementById('down-payment-slider');
  
  // Get the input value
  let value = downPaymentDirectInput.value.replace(/[^0-9.]/g, '');
  
  // Ensure value is within range
  if (value === '' || parseFloat(value) < 0) {
    value = '0';
  } else if (parseFloat(value) > 90) {
    value = '90';
  }
  
  // Update the slider value
  downPaymentSlider.value = value;
  
  // Update the visualization
  updateDownPaymentVisualization(parseFloat(value));
  
  // Hide the input and show the output
  downPaymentDirectInput.style.display = 'none';
  downPaymentOutput.style.display = 'inline-block';
}

// Initialize the calculator
document.addEventListener('DOMContentLoaded', function() {
  // Set up event listeners
  document.getElementById('monthly-payment').addEventListener('click', makePaymentEditable);
  
  // Set up down payment preset buttons
  const presetButtons = document.querySelectorAll('.down-payment-preset');
  presetButtons.forEach(button => {
    button.addEventListener('click', function() {
      const value = this.getAttribute('data-value');
      // Set the exact value to the slider
      const slider = document.getElementById('down-payment-slider');
      slider.value = value;
      
      // Force the exact value for 3.5% to ensure it's displayed correctly
      if (value === '3.5') {
        updateDownPaymentVisualization(3.5);
      } else {
        updateDownPaymentVisualization(parseFloat(value));
      }
    });
  });
  
  // Initialize the budget visualization
  updateBudgetVisualization(document.getElementById('budget').value);
  
  // Initialize the down payment visualization
  updateDownPaymentVisualization(document.getElementById('down-payment-slider').value);
});
