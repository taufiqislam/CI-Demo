import express from 'express';

// Initialize an Express application
const app = express();

// Predefined numbers
const num1 = 5;
const num2 = 10;

// Function to sum two numbers
export const sum = (a, b) => a + b;

// Define a route to return the sum of the two numbers
app.get('/', (req, res) => {
  const result = sum(num1, num2);

  res.send(`The sum of ${num1} and ${num2} is: ${result}`);
});

// Define a route to calculate the sum of numbers passed as query parameters
app.get('/sum', (req, res) => {
  const a = parseFloat(req.query.a);
  const b = parseFloat(req.query.b);

  if (isNaN(a) || isNaN(b)) {
    return res.status(400).send('Please provide two valid numbers.');
  }
  const result = sum(a, b);

  res.send(`The sum of ${a} and ${b} is: ${result}`);
});

// Start the server on port 3000
const PORT = process.env.PORT || 8000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
