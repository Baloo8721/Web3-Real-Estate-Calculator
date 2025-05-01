// Function to update the "Current Market Rate" option text with the actual rate
function updateMarketRateOption(rateData, loanTerm = 30) {
    const marketRateOption = document.querySelector('#buyer-rate-preset option[value="market"]');
    if (!marketRateOption) return;
    
    // Get the fallback rate for this term
    const fallbackRate = loanTerm === 15 ? 6.10 : 6.81;
    
    console.log(`updateMarketRateOption called with loanTerm: ${loanTerm}, rateData:`, rateData);
    
    // Initialize variables for rate and text
    let rate, displayRate, source, optionText;
    
    // Check if we have valid rate data
    if (rateData && typeof rateData === 'object' && 
        typeof rateData.rate === 'number' && !isNaN(rateData.rate) && 
        rateData.source === 'scraped') {
        
        // Use scraped rate
        rate = rateData.rate;
        displayRate = rateData.displayRate || (rate * 100);
        source = 'scraped';
        
        // Format the rate with 2 decimal places
        const rateValue = displayRate.toFixed(2);
        optionText = `Current Mortgage Rates (${rateValue}%)`;
        
        console.log(`Using scraped rate: ${rateValue}%`);
    } else {
        // Use fallback rate
        rate = loanTerm === 15 ? 0.0610 : 0.0681;
        displayRate = fallbackRate;
        source = 'fallback';
        
        optionText = `Average Mortgage Rates (${fallbackRate}%)`;
        console.log(`Using fallback rate: ${fallbackRate}%`);
    }
    
    // Update the option in the dropdown
    marketRateOption.textContent = optionText;
    
    // Update the selected option text if market rate is currently selected
    const ratePresetSelect = document.getElementById('buyer-rate-preset');
    if (ratePresetSelect && ratePresetSelect.value === 'market') {
        // Update what's visibly shown in the dropdown
        if (ratePresetSelect.selectedOptions && ratePresetSelect.selectedOptions[0]) {
            ratePresetSelect.selectedOptions[0].textContent = optionText;
        }
        
        // Update the rate input field
        const rateInput = document.getElementById('buyer-rate');
        if (rateInput) {
            rateInput.value = displayRate.toFixed(2);
        }
    }
    
    return { rate, source, displayRate };
}
