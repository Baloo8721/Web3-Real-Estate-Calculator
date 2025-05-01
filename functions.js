// This file contains functions that need to be defined early
// Function to update the interest rate based on loan term
function updateInterestRateForTerm(loanTerm) {
    // Get the interest rate dropdown and input field
    const ratePresetSelect = document.getElementById('buyer-rate-preset');
    const rateInput = document.getElementById('buyer-rate');
    
    if (!ratePresetSelect || !rateInput) return; // Guard against null references
    
    // Set the correct rate based on the loan term (using our updated fallback rates)
    const newRate = loanTerm === 15 ? 6.10 : 6.81;
    console.log(`Updating interest rate for ${loanTerm}-year term to ${newRate}%`);
    
    // BRUTE FORCE APPROACH: Completely rebuild the dropdown
    // This ensures the visual display updates immediately
    
    // 1. Save the current selection
    const currentValue = ratePresetSelect.value;
    
    // 2. Create a new select element with the same ID and attributes
    const newSelect = document.createElement('select');
    newSelect.id = 'buyer-rate-preset';
    newSelect.setAttribute('aria-label', 'Interest Rate Preset');
    
    // 3. Add all options, updating the market rate option with the correct rate
    const options = [
        { value: 'market', text: `Current Market Rate (${newRate}%)` },
        { value: '3', text: '3.0%' },
        { value: '3.5', text: '3.5%' },
        { value: '4', text: '4.0%' },
        { value: '4.5', text: '4.5%' },
        { value: '5', text: '5.0%' },
        { value: '5.5', text: '5.5%' },
        { value: '6', text: '6.0%' },
        { value: '6.5', text: '6.5%' },
        { value: '7', text: '7.0%' },
        { value: 'custom', text: 'Custom' }
    ];
    
    options.forEach(opt => {
        const option = document.createElement('option');
        option.value = opt.value;
        option.textContent = opt.text;
        if (opt.value === 'custom') {
            option.setAttribute('data-lang', 'custom_rate');
        }
        newSelect.appendChild(option);
    });
    
    // 4. Set the same selection as before
    newSelect.value = currentValue;
    
    // 5. Add the same event listener
    if (typeof handleRatePresetChange === 'function') {
        newSelect.addEventListener('change', handleRatePresetChange);
    }
    
    // 6. Replace the old select with the new one
    const parent = ratePresetSelect.parentNode;
    parent.replaceChild(newSelect, ratePresetSelect);
    
    // 7. If market rate was selected, update the rate input field
    if (currentValue === 'market') {
        rateInput.value = newRate.toFixed(2);
    }
    
    // 8. Update the market rate option text to show the actual rate
    if (typeof updateMarketRateOption === 'function') {
        updateMarketRateOption(null, loanTerm);
    }
}
