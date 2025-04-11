const express = require('express');
const axios = require('axios');
const router = express.Router(); 

router.post('/', async (req, res) => {
    try {
        const response = await axios.get('https://api.coingecko.com/api/v3/simple/price?ids=bitcoin,ethereum,solana,ripple,cardano&vs_currencies=usd');
        console.log(response.data);
        res.json(response.data);
    } catch (error) {
        console.error('Error fetching data:', error);
        res.status(500).json({ error: 'Failed to fetch crypto prices' });
    }
});

module.exports = router;
