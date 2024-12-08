const axios = require('axios');
require('dotenv').config();

const ngrokUrl = process.env.NGROK_URL;

const testRedirectCall = async () => {
  try {
    const response = await axios.get(`${ngrokUrl}/`, {
      params: {
        param1: 'value1',
        param2: 'value2',
      },
    });

    console.log('Response:', response.data);
  } catch (error) {
    console.error('Error:', error.message);
  }
};

testRedirectCall();
