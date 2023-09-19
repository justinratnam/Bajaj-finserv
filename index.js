const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.json());


app.post('/bfhl', (req, res) => {
  const data = req.body.data;
  const response = {
    is_success: true,
    user_id: "john_doe_17091999",
    email: "john@xyz.com",
    roll_number: "ABCD123",
    numbers: data.filter(item => typeof item === 'number'),
    alphabets: data.filter(item => typeof item === 'string' && item.match(/^[a-zA-Z]$/)),
    highest_alphabet: data.filter(item => typeof item === 'string' && item.match(/^[a-zA-Z]$/)).sort().pop(),
  };
  res.json(response);
});


app.get('/bfhl', (req, res) => {
  res.status(200).json({ operation_code: 1 });
});


app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
