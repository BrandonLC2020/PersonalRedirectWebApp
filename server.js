// server.js
const express = require('express');
const app = express();

app.get('/redirect', (req, res) => {
  const queryParams = req.query;
  console.log('Query Parameters:', queryParams);

  // Respond with a success message
  res.status(200).json({ status: 'Redirect received', params: queryParams });
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
