const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send('Hello, Azure App Service!');
});

app.get('/hi', (req, res) => {
  res.send('Hello from IamNeo');
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
