const express = require('express');
const app = express();
const port = 8080;

// Function to calculate GCD
function gcd(a, b) {
    if (b === 0) return a;
    return gcd(b, a % b);
}

// Function to calculate LCM
function lcm(a, b) {
    return (a * b) / gcd(a, b);
}

// LCM calculation function
function calculateLCM(x, y) {
    const numX = parseInt(x);
    const numY = parseInt(y);
    
    if (isNaN(numX) || isNaN(numY) || numX <= 0 || numY <= 0 || !Number.isInteger(numX) || !Number.isInteger(numY)) {
        return 'NaN';
    }
    
    return lcm(numX, numY).toString();
}

// ===== REQUIRED ENDPOINT FOR SUBMISSION =====
app.get('/amirhamzabadal2477_gmail_com/lcm', (req, res) => {
    const result = calculateLCM(req.query.x, req.query.y);
    res.setHeader('Content-Type', 'text/plain');
    res.send(result);
});

// ===== EXISTING ENDPOINTS =====
app.get('/', (req, res) => {
    res.setHeader('Content-Type', 'text/plain');
    res.send('LCM API is running. Use /amirhamzabadal2477_gmail_com/lcm?x=num&y=num');
});

app.get('/lcm', (req, res) => {
    const result = calculateLCM(req.query.x, req.query.y);
    res.setHeader('Content-Type', 'text/plain');
    res.send(result);
});

// Start server
app.listen(port, () => {
    console.log('🚀 Server started!');
    console.log('📍 Local: http://localhost:8080');
    console.log('📝 Submission endpoint: /amirhamzabadal2477_gmail_com/lcm?x=4&y=6');
});