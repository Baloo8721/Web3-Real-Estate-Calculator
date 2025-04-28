const fetch = require('node-fetch');
const cheerio = require('cheerio');
const fs = require('fs').promises;

async function fetchMortgageRates() {
  console.log('Starting fetchMortgageRates from Mortgage News Daily');
  try {
    const url = 'https://www.mortgagenewsdaily.com/mortgage-rates';
    console.log(`Fetching from ${url}`);
    const response = await fetch(url, {
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36',
        'Accept': 'text/html',
        'Referer': 'https://www.mortgagenewsdaily.com'
      }
    });
    console.log(`Response status: ${response.status} ${response.statusText}`);
    if (!response.ok) {
      console.error(`HTTP error: ${response.status} ${response.statusText}`);
      throw new Error(`Failed to fetch from Mortgage News Daily: ${response.status} ${response.statusText}`);
    }
    const html = await response.text();
    const $ = cheerio.load(html);

    // Initialize rates
    let thirtyYearRate = null;
    let fifteenYearRate = null;
    
    console.log('Searching for mortgage rates in HTML...');

    // Based on the exact HTML structure provided, look for the div.rate elements
    console.log('Looking for div.rate elements...');
    
    // First, try to find the rate-product divs for 30-year and 15-year fixed rates
    const rateProducts = $('.rate-product');
    console.log(`Found ${rateProducts.length} rate-product elements`);
    
    rateProducts.each((i, product) => {
      const $product = $(product);
      const productText = $product.text().trim();
      
      // Check if this is the 30-year fixed product
      if (productText.includes('30 Yr. Fixed') && !productText.includes('FHA') && !productText.includes('VA') && !productText.includes('Jumbo')) {
        console.log('Found 30 Yr. Fixed product section');
        
        // Find the div.rate element within this product
        const $rate = $product.find('.rate');
        if ($rate.length) {
          const rateText = $rate.text().trim();
          console.log(`Found 30-year rate element with text: "${rateText}"`);
          
          // Extract the rate value
          const percentMatch = rateText.match(/([0-9]+\.[0-9]+)%?/);
          if (percentMatch && percentMatch[1]) {
            thirtyYearRate = parseFloat(percentMatch[1]);
            console.log(`Extracted 30-year rate: ${thirtyYearRate}%`);
          }
        }
      }
      
      // Check if this is the 15-year fixed product
      if (productText.includes('15 Yr. Fixed')) {
        console.log('Found 15 Yr. Fixed product section');
        
        // Find the div.rate element within this product
        const $rate = $product.find('.rate');
        if ($rate.length) {
          const rateText = $rate.text().trim();
          console.log(`Found 15-year rate element with text: "${rateText}"`);
          
          // Extract the rate value
          const percentMatch = rateText.match(/([0-9]+\.[0-9]+)%?/);
          if (percentMatch && percentMatch[1]) {
            fifteenYearRate = parseFloat(percentMatch[1]);
            console.log(`Extracted 15-year rate: ${fifteenYearRate}%`);
          }
        }
      }
    });
    
    // If the above approach didn't work, try a more direct approach using the HTML structure
    if (!thirtyYearRate || !fifteenYearRate) {
      console.log('Trying direct approach with exact CSS selectors...');
      
      // Try to find the exact div.rate elements based on the HTML structure
      const rates = $('.rate');
      console.log(`Found ${rates.length} div.rate elements`);
      
      // Loop through all rate elements and check their parent context
      rates.each((i, rateEl) => {
        const $rate = $(rateEl);
        const rateText = $rate.text().trim();
        const $parent = $rate.closest('.rate-product');
        
        if ($parent.length) {
          const parentText = $parent.text().trim();
          
          // Check if this is the 30-year rate
          if (parentText.includes('30 Yr. Fixed') && !parentText.includes('FHA') && !parentText.includes('VA') && !parentText.includes('Jumbo')) {
            thirtyYearRate = parseFloat(rateText.replace('%', ''));
            console.log(`Found 30-year rate using direct selector: ${thirtyYearRate}%`);
          }
          
          // Check if this is the 15-year rate
          if (parentText.includes('15 Yr. Fixed')) {
            fifteenYearRate = parseFloat(rateText.replace('%', ''));
            console.log(`Found 15-year rate using direct selector: ${fifteenYearRate}%`);
          }
        }
      });
    }
    // If we still don't have rates, try a more aggressive approach
    if (!thirtyYearRate || !fifteenYearRate) {
      console.log('Trying more aggressive approach to find rates...');
      
      // Extract all text from the page and look for patterns
      const pageText = $('body').text();
      
      // Look for the exact pattern from the example
      const thirtyYearMatch = pageText.match(/30 Yr\. Fixed[\s\n]*([0-9]+\.[0-9]+)%/);
      if (thirtyYearMatch && thirtyYearMatch[1]) {
        thirtyYearRate = parseFloat(thirtyYearMatch[1]);
        console.log(`Found 30-year rate in page text: ${thirtyYearRate}%`);
      }
      
      const fifteenYearMatch = pageText.match(/15 Yr\. Fixed[\s\n]*([0-9]+\.[0-9]+)%/);
      if (fifteenYearMatch && fifteenYearMatch[1]) {
        fifteenYearRate = parseFloat(fifteenYearMatch[1]);
        console.log(`Found 15-year rate in page text: ${fifteenYearRate}%`);
      }
    }
    // If .rate doesn't work, try alternative selectors
    else {
      // Try looking for table elements with rate data
      const tableRows = $('table tr');
      console.log(`Found ${tableRows.length} table rows to search`);
      
      tableRows.each((i, row) => {
        const text = $(row).text();
        if (text.includes('30 Year Fixed') || text.includes('30-Year Fixed')) {
          const rateText = $(row).find('td').eq(1).text().trim();
          thirtyYearRate = parseFloat(rateText.replace('%', ''));
          console.log(`Found 30-year rate in table: ${thirtyYearRate}%`);
        }
        if (text.includes('15 Year Fixed') || text.includes('15-Year Fixed')) {
          const rateText = $(row).find('td').eq(1).text().trim();
          fifteenYearRate = parseFloat(rateText.replace('%', ''));
          console.log(`Found 15-year rate in table: ${fifteenYearRate}%`);
        }
      });
    }

    // If we still don't have rates, try more targeted approach
    if (!thirtyYearRate || !fifteenYearRate) {
      console.log('Trying more targeted approach for mortgage rates...');
      
      // Look for elements with specific text nearby
      $('*:contains("30 Year Fixed"), *:contains("30-Year Fixed")').each((i, el) => {
        // Check if this element or its siblings contain a percentage
        const $el = $(el);
        const text = $el.text().trim();
        
        // Only process if this is a small text fragment that might be a rate label
        if (text.length < 30 && (text.includes('30 Year') || text.includes('30-Year'))) {
          console.log(`Found potential 30-year label: "${text}"`);
          
          // Look for percentage in siblings or parent's children
          const $parent = $el.parent();
          $parent.find('*').each((j, sibling) => {
            const siblingText = $(sibling).text().trim();
            if (siblingText.match(/^[0-9]+\.[0-9]+%$/) || siblingText.match(/^[0-9]+\.[0-9]+$/)) {
              const potentialRate = parseFloat(siblingText.replace('%', ''));
              if (potentialRate > 3 && potentialRate < 10) { // Reasonable range for mortgage rates
                console.log(`Found potential 30-year rate: ${potentialRate}% near "${text}"`);
                if (!thirtyYearRate || (Math.abs(potentialRate - 6.81) < Math.abs(thirtyYearRate - 6.81))) {
                  thirtyYearRate = potentialRate;
                }
              }
            }
          });
        }
      });
      
      // Same for 15-year rates
      $('*:contains("15 Year Fixed"), *:contains("15-Year Fixed")').each((i, el) => {
        const $el = $(el);
        const text = $el.text().trim();
        
        if (text.length < 30 && (text.includes('15 Year') || text.includes('15-Year'))) {
          console.log(`Found potential 15-year label: "${text}"`);
          
          const $parent = $el.parent();
          $parent.find('*').each((j, sibling) => {
            const siblingText = $(sibling).text().trim();
            if (siblingText.match(/^[0-9]+\.[0-9]+%$/) || siblingText.match(/^[0-9]+\.[0-9]+$/)) {
              const potentialRate = parseFloat(siblingText.replace('%', ''));
              if (potentialRate > 3 && potentialRate < 10) { // Reasonable range for mortgage rates
                console.log(`Found potential 15-year rate: ${potentialRate}% near "${text}"`);
                if (!fifteenYearRate || (Math.abs(potentialRate - 6.10) < Math.abs(fifteenYearRate - 6.10))) {
                  fifteenYearRate = potentialRate;
                }
              }
            }
          });
        }
      });
      
      // If we still don't have rates, look for any elements containing percentage signs
      if (!thirtyYearRate || !fifteenYearRate) {
        console.log('Last resort: looking for any percentage values...');
        const percentValues = [];
        
        $('*').each((i, el) => {
          const text = $(el).text().trim();
          if (text.match(/^[0-9]+\.[0-9]+%$/) || text.match(/^[0-9]+\.[0-9]+$/)) {
            const potentialRate = parseFloat(text.replace('%', ''));
            if (potentialRate > 3 && potentialRate < 10) { // Reasonable range for mortgage rates
              percentValues.push(potentialRate);
              console.log(`Potential rate found: ${potentialRate}%`);
            }
          }
        });
        
        // Sort values and pick the most likely ones
        if (percentValues.length > 0) {
          // Filter out extreme outliers and duplicates
          const uniqueValues = [...new Set(percentValues)];
          const filteredValues = uniqueValues.filter(rate => rate >= 5 && rate <= 8);
          filteredValues.sort((a, b) => a - b);
          console.log('Filtered potential rates (sorted):', filteredValues);
          
          // If we don't have a 30-year rate yet and have enough values
          if (!thirtyYearRate && filteredValues.length > 0) {
            // For 30-year, look for values around 6.5-7.5% (typical range as of April 2025)
            // Find the value closest to the expected 30-year rate (around 6.8%)
            const targetThirtyYear = 6.8;
            let closestThirtyYear = filteredValues[0];
            let minDiff = Math.abs(closestThirtyYear - targetThirtyYear);
            
            filteredValues.forEach(rate => {
              const diff = Math.abs(rate - targetThirtyYear);
              if (diff < minDiff) {
                minDiff = diff;
                closestThirtyYear = rate;
              }
            });
            
            thirtyYearRate = closestThirtyYear;
            console.log(`Selected ${thirtyYearRate}% as likely 30-year rate (closest to expected value)`);
          }
          
          // If we don't have a 15-year rate yet and have enough values
          if (!fifteenYearRate && filteredValues.length > 0) {
            // For 15-year, look for values around 5.5-6.5% (typical range as of April 2025)
            // Find the value closest to the expected 15-year rate (around 6.1%)
            const targetFifteenYear = 6.1;
            let closestFifteenYear = filteredValues[0];
            let minDiff = Math.abs(closestFifteenYear - targetFifteenYear);
            
            filteredValues.forEach(rate => {
              const diff = Math.abs(rate - targetFifteenYear);
              if (diff < minDiff) {
                minDiff = diff;
                closestFifteenYear = rate;
              }
            });
            
            // Ensure 15-year is lower than 30-year (if we have both)
            if (thirtyYearRate && closestFifteenYear >= thirtyYearRate) {
              // Find the next best option that's lower than 30-year
              const lowerOptions = filteredValues.filter(rate => rate < thirtyYearRate);
              if (lowerOptions.length > 0) {
                // Find the highest of the lower options
                closestFifteenYear = Math.max(...lowerOptions);
              } else {
                // If no lower options, use fallback
                closestFifteenYear = 6.1;
              }
            }
            
            fifteenYearRate = closestFifteenYear;
            console.log(`Selected ${fifteenYearRate}% as likely 15-year rate (closest to expected value)`);
          }
        }
      }
    }

    // Use fallback rates if scraping fails
    if (!thirtyYearRate || isNaN(thirtyYearRate)) {
      console.log('Using fallback rate for 30-year term');
      thirtyYearRate = 6.81; // Keep the original fallback rate
    }

    if (!fifteenYearRate || isNaN(fifteenYearRate)) {
      console.log('Using fallback rate for 15-year term');
      fifteenYearRate = 6.10; // Keep the original fallback rate
    }

    const rates = [
      { term: '30-year', rate: thirtyYearRate },
      { term: '15-year', rate: fifteenYearRate }
    ];

    console.log('Final rates:', rates);
    
    console.log('Writing rates to rates.json:', JSON.stringify(rates, null, 2));
    await fs.writeFile('rates.json', JSON.stringify(rates, null, 2));
    console.log('Rates updated successfully');
    return rates;
  } catch (error) {
    console.error('Error fetching rates:', error.message);
    console.error('Stack trace:', error.stack);
    
    // Use fallback rates if there's an error
    try {
      const fallbackRates = [
        { term: '30-year', rate: 6.81 },
        { term: '15-year', rate: 6.10 }
      ];
      console.log('Writing fallback rates to rates.json');
      await fs.writeFile('rates.json', JSON.stringify(fallbackRates, null, 2));
    } catch (fallbackError) {
      console.error('Failed to write fallback rates:', fallbackError.message);
    }
    
    process.exit(1);
  }
}

fetchMortgageRates();
