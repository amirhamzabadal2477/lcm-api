const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

// Fast GCD function
function gcd(a, b) {
    while (b !== 0) {
        const temp = b;
        b = a % b;
        a = temp;
    }
    return a;
}

// Fast LCM function
function lcm(a, b) {
    return (a * b) / gcd(a, b);
}

// Root endpoint
app.get('/', (req, res) => {
    res.setHeader('Content-Type', 'text/plain');
    res.send('LCM API is running. Use /amirhamzabadal2477_gmail_com?x=number&y=number');
});

// Required endpoint - email as path
app.get('/amirhamzabadal2477_gmail_com', (req, res) => {
    const x = parseInt(req.query.x);
    const y = parseInt(req.query.y);
    
    res.setHeader('Content-Type', 'text/plain');
    
    // Validate natural numbers
    if (isNaN(x) || isNaN(y) || x < 1 || y < 1 || !Number.isInteger(x) || !Number.isInteger(y)) {
        return res.send('NaN');
    }
    
    const result = lcm(x, y);
    res.send(result.toString());
});

// Start server
app.listen(PORT, '0.0.0.0', () => {
    console.log(`Server running on port ${PORT}`);
});

module.exports = app;
