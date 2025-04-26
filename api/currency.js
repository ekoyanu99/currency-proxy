const axios = require('axios');

module.exports = async function handler(req, res) {
  const apiKey = process.env.CURRENCY_API_KEY;
  const url = 'https://api.currencyapi.com/v3/latest';

  try {
    const response = await axios.get(url, {
      params: {
        apikey: apiKey,
        currencies: 'EUR,USD,CAD,IDR'
      }
    });
    res.status(200).json(response.data);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch currency data' });
  }
};
