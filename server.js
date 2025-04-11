const cron = require('node-cron');
const axios = require('axios');
const connectDB = require('./db/db.js');
const CryptoPrice = require('./schemas/cryptoPriceSchema.js');

const storeDataDB = async () => {
  console.log('Running daily task at 12:00 PM');

  await connectDB();

  try {
    const response = await axios.get(
      'https://api.coingecko.com/api/v3/simple/price?ids=bitcoin,ethereum,solana,ripple,cardano&vs_currencies=usd'
    );

    const dataForDB = new CryptoPrice({
      timestamp: new Date(),
      prices: {
        bitcoin: response.data.bitcoin.usd,
        ethereum: response.data.ethereum.usd,
        solana: response.data.solana.usd,
        ripple: response.data.ripple.usd,
        cardano: response.data.cardano.usd
      }
    });

    await dataForDB.save();

    console.log('Data saved to DB:', dataForDB);
  } catch (error) {
    console.error('Error fetching or saving crypto data:', error.message);
  }
};

cron.schedule('0 12 * * *', storeDataDB);