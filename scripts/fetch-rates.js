const fetch = require('node-fetch');
const fs = require('fs').promises;

async function fetchMortgageRates() {
  const API_KEY = process.env.NASDAQ_API_KEY;
  
  // Validate API key is present
  if (!API_KEY) {
    console.error('Error: NASDAQ_API_KEY is not set in environment variables');
    process.exit(1);
  }
  
  console.log('API Key present:', API_KEY ? 'Yes' : 'No');
  
  const datasets = [
    { code: 'FMAC/30US', term: '30-year' },
    { code: 'FMAC/15US', term: '15-year' },
  ];

  try {
    const rates = await Promise.all(
      datasets.map(async ({ code, term }) => {
        const url = `https://data.nasdaq.com/api/v3/datasets/${code}.json?api_key=${API_KEY}&rows=1`;
        console.log(`Fetching ${code} from ${url.replace(API_KEY, 'HIDDEN')}`);
        
        let response;
        try {
          response = await fetch(url);
          console.log(`Response status for ${code}: ${response.status} ${response.statusText}`);
        } catch (fetchError) {
          console.error(`Network error fetching ${code}:`, fetchError.message);
          return null;
        }
        
        if (!response.ok) {
          console.error(`Failed to fetch ${code}: ${response.status} ${response.statusText}`);
          // Try to get error details from response body
          try {
            const errorBody = await response.text();
            console.error(`Error response body for ${code}:`, errorBody);
          } catch (e) {
            console.error('Could not read error response body');
          }
          return null;
        }
        
        let data;
        try {
          data = await response.json();
          console.log(`Response structure for ${code}:`, 
            JSON.stringify({
              hasDataset: !!data.dataset,
              hasData: !!(data.dataset && data.dataset.data),
              dataLength: (data.dataset && data.dataset.data) ? data.dataset.data.length : 0
            }));
        } catch (jsonError) {
          console.error(`JSON parse error for ${code}:`, jsonError.message);
          return null;
        }
        
        // Validate response structure
        if (!data.dataset || !data.dataset.data || !data.dataset.data[0]) {
          console.error(`Invalid response format for ${code}: missing dataset or data`);
          return null;
        }
        
        // Get the rate from the first data point
        const latestRate = parseFloat(data.dataset.data[0][1]);
        
        // Validate the rate
        if (isNaN(latestRate)) {
          console.error(`Invalid rate for ${code}: ${data.dataset.data[0][1]} is not a number`);
          return null;
        }
        
        console.log(`Fetched ${term} rate: ${latestRate}%`);
        return { term, rate: latestRate };
      })
    );

    // Filter out any null entries (invalid rates)
    const validRates = rates.filter(rate => rate !== null);
    
    if (validRates.length === 0) {
      throw new Error('No valid rates found. All API requests failed or returned invalid data.');
    }
    
    // Log the rates we're about to write
    console.log('Writing rates to rates.json:', JSON.stringify(validRates, null, 2));
    
    await fs.writeFile('rates.json', JSON.stringify(validRates, null, 2));
    console.log('Rates updated successfully!');
    
    // Return success
    return validRates;
  } catch (error) {
    console.error('Error fetching rates:', error.message);
    console.error('Stack trace:', error.stack);
    
    // Try to write fallback rates if we can't get real ones
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
