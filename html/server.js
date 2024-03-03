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

// Calculate target date 60 days from now
function calculateTargetDate() {
    const now = new Date();
    now.setDate(now.getDate() + 60);
    return now;
}

// Set the initial target date when the server starts
targetDate = calculateTargetDate();

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
