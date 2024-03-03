const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const PORT = process.env.PORT || 3000;

let targetDate = null;

// Middleware
app.use(bodyParser.json());

// Endpoint to store the target date
app.post('/target-date', (req, res) => {
    const { newTargetDate } = req.body;
    targetDate = new Date(newTargetDate);
    res.json({ success: true });
});

// Endpoint to retrieve the target date
app.get('/target-date', (req, res) => {
    res.json({ targetDate });
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
