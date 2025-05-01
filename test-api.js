// Simple test script to check if the Nasdaq Data Link API is working
const apiKey = 'GiDm4nHttVk7WKFzx7A8'; // Your API key

// Test both 30-year and 15-year mortgage rates
async function testAPI() {
    console.log('Testing Nasdaq Data Link API for mortgage rates...');
    
    try {
        // Test 30-year rate
        console.log('Testing 30-year mortgage rate...');
        const response30 = await fetch(`https://data.nasdaq.com/api/v3/datasets/FMAC/30US/data.json?api_key=${apiKey}&limit=1`);
        
        if (!response30.ok) {
            throw new Error(`API returned status ${response30.status} for 30-year rate`);
        }
        
        const data30 = await response30.json();
        console.log('30-year rate API response:', data30);
        
        if (data30 && data30.dataset_data && data30.dataset_data.data && data30.dataset_data.data.length > 0) {
            const rate = data30.dataset_data.data[0][1];
            const date = data30.dataset_data.data[0][0];
            console.log(`✅ 30-year rate: ${rate}% as of ${date}`);
        } else {
            console.log('❌ Invalid data structure for 30-year rate');
        }
        
        // Test 15-year rate
        console.log('\nTesting 15-year mortgage rate...');
        const response15 = await fetch(`https://data.nasdaq.com/api/v3/datasets/FMAC/15US/data.json?api_key=${apiKey}&limit=1`);
        
        if (!response15.ok) {
            throw new Error(`API returned status ${response15.status} for 15-year rate`);
        }
        
        const data15 = await response15.json();
        console.log('15-year rate API response:', data15);
        
        if (data15 && data15.dataset_data && data15.dataset_data.data && data15.dataset_data.data.length > 0) {
            const rate = data15.dataset_data.data[0][1];
            const date = data15.dataset_data.data[0][0];
            console.log(`✅ 15-year rate: ${rate}% as of ${date}`);
        } else {
            console.log('❌ Invalid data structure for 15-year rate');
        }
        
        console.log('\n✅ API test completed successfully!');
    } catch (error) {
        console.error('❌ API test failed:', error);
    }
}

// Run the test
testAPI();
