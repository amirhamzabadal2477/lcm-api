const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

// GCD function
function gcd(a, b) {
    return b === 0 ? a : gcd(b, a % b);
}

// LCM function
function lcm(a, b) {
    return (a * b) / gcd(a, b);
}

// Root endpoint
app.get('/', (req, res) => {
    res.setHeader('Content-Type', 'text/plain');
    res.send('LCM API Running');
});

// Required endpoint
app.get('/amirhamzabadal2477_gmail_com', (req, res) => {
    try {
        const x = parseInt(req.query.x);
        const y = parseInt(req.query.y);
        
        res.setHeader('Content-Type', 'text/plain');
        
        if (isNaN(x) || isNaN(y) || x < 1 || y < 1) {
            return res.send('NaN');
        }
        
        const result = lcm(x, y);
        res.send(result.toString());
    } catch (error) {
        res.send('NaN');
    }
});

// Start server
app.listen(PORT, '0.0.0.0', () => {
    console.log(`Server running on port ${PORT}`);
});
