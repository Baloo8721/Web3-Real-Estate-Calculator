const fetch = require('node-fetch');
const fs = require('fs').promises;

async function fetchMortgageRates() {
  const API_KEY = process.env.NASDAQ_API_KEY;
  const datasets = [
    { code: 'FMAC/30US', term: '30-year' },
    { code: 'FMAC/15US', term: '15-year' },
  ];

  try {
    const rates = await Promise.all(
      datasets.map(async ({ code, term }) => {
        const url = `https://data.nasdaq.com/api/v3/datasets/${code}.json?api_key=${API_KEY}&rows=1`;
        console.log(`Fetching rates from ${code}...`);
        
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error(`Failed to fetch ${code}: ${response.statusText}`);
        }
        
        const data = await response.json();
        const latestRate = parseFloat(data.dataset.data[0][1]);
        
        // Validate the rate
        if (isNaN(latestRate)) {
          console.warn(`Invalid rate for ${code}`);
          return null;
        }
        
        console.log(`${term} rate: ${latestRate}`);
        return { term, rate: latestRate };
      })
    );

    // Filter out any null entries (invalid rates)
    const validRates = rates.filter(rate => rate !== null);
    
    if (validRates.length === 0) {
      throw new Error('No valid rates found');
    }
    
    await fs.writeFile('rates.json', JSON.stringify(validRates, null, 2));
    console.log('Rates updated successfully:', validRates);
  } catch (error) {
    console.error('Error fetching rates:', error);
    process.exit(1);
  }
}

fetchMortgageRates();
