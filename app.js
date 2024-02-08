// index.js
const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const PORT = 3000;

app.use(bodyParser.json());

let items = [];

// Create operation
app.post('/items', (req, res) => {
    const newItem = req.body;
    items.push(newItem);
    res.status(201).json(newItem);
});

// Read operation
app.get('/items', (req, res) => {
    res.json(items);
});

// Update operation
app.put('/items/:id', (req, res) => {
    const { id } = req.params;
    const updatedItem = req.body;
    items[id] = updatedItem;
    res.json(updatedItem);
});

// Delete operation
app.delete('/items/:id', (req, res) => {
    const { id } = req.params;
    items.splice(id, 1);
    res.sendStatus(204);
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
