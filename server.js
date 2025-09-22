const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

// Remove all middleware for maximum speed
app.disable('x-powered-by');

// Ultra-fast iterative GCD (no recursion)
function gcd(a, b) {
    let temp;
    while (b !== 0) {
        temp = b;
        b = a % b;
        a = temp;
    }
    return a;
}

// Fast LCM
function lcm(a, b) {
    return (a * b) / gcd(a, b);
}

// Required endpoint - optimized
app.get('/amirhamzabadal2477_gmail_com', (req, res) => {
    // Set headers first for speed
    res.setHeader('Content-Type', 'text/plain');
    
    // Fast parameter parsing
    const x = parseInt(req.query.x, 10);
    const y = parseInt(req.query.y, 10);
    
    // Quick validation
    if (!Number.isInteger(x) || !Number.isInteger(y) || x < 1 || y < 1) {
        return res.send('NaN');
    }
    
    // Calculate and send
    try {
        const result = lcm(x, y);
        res.send(result.toString());
    } catch (error) {
        res.send('NaN');
    }
});

// No root endpoint to avoid confusion
app.use((req, res) => {
    res.setHeader('Content-Type', 'text/plain');
    res.send('Use /amirhamzabadal2477_gmail_com?x=number&y=number');
});

app.listen(PORT, '0.0.0.0', () => {
    console.log('Server optimized and running on port', PORT);
});
