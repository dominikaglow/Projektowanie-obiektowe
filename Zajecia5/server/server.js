const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
const PORT = 3001;

const products = [
    { id: 1, name: 'product 1', price: 100.50 },
    { id: 2, name: 'product 2', price: 200.34 },
    { id: 3, name: 'product 3', price: 300 }
];

app.use(cors());
app.use(bodyParser.json());

app.get('/', (req, res) => {
    res.send('Server is running');
});

app.get('/products', (req, res) => {
    res.json(products);
});

app.post('/payments', (req, res) => {
    const data = req.body;
    console.log("Received payment data: ");
    console.log(data);
    res.status(200).send("Payment received");
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});