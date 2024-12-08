require('dotenv').config();
const express = require('express');
const ngrok = require('ngrok');

const app = express();
const PORT = process.env.NGROK_PORT || 4000;

// Middleware to parse JSON
app.use(express.json());

// Sample route to handle incoming requests
app.post('/api/webhook', (req, res) => {
  console.log('Incoming API call:', req.body);
  res.status(200).send({ message: 'Received!' });
});

// Route to fetch ngrok URL
app.get('/api/test', (req, res) => {
  // Extract query parameters
  const queryParams = req.query;

  // Log the query parameters to the console
  console.log('Received Query Parameters:', queryParams);

  // Send a response
  res.status(200).json({
    message: 'Query parameters received successfully!',
    queryParams: queryParams,
  });

  // Emit the data to the frontend via WebSocket
  if (io) {
    io.emit('newRequest', {
      method: 'GET',
      endpoint: req.url,
      queryParams: queryParams,
      timestamp: new Date().toISOString(),
    });
  }
});


// Start the server and ngrok tunnel
app.listen(PORT, async () => {
  console.log(`Server running on http://localhost:${PORT}`);

  if (!process.env.NGROK_URL) {
    try {
      const url = await ngrok.connect(PORT);
      console.log(`ngrok tunnel established at ${url}`);
      process.env.NGROK_URL = url;
    } catch (error) {
      console.error('Error starting ngrok:', error);
    }
  }
});
