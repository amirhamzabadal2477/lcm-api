const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

// Remove ALL middleware and bloat for maximum speed
app.disable('x-powered-by');
app.disable('etag'); // Remove ETag generation

// Ultra-fast GCD (minimal operations, no recursion)
function gcd(a, b) {
    while (b !== 0) {
        const t = b;
        b = a % b;
        a = t;
    }
    return a;
}

// Single endpoint only - no root handler
app.get('/amirhamzabadal2477_gmail_com', (req, res) => {
    // Set header immediately
    res.setHeader('Content-Type', 'text/plain');
    
    // Fastest parameter parsing and validation
    const x = parseInt(req.query.x);
    const y = parseInt(req.query.y);
    
    // Bitwise check for integers > 0 (fastest method)
    if (!(x > 0 && y > 0 && x === (x | 0) && y === (y | 0))) {
        return res.send('NaN');
    }
    
    // Calculate and send in one operation
    const result = (x * y) / gcd(x, y);
    res.send(result.toString());
});

// No 404 handler - let it return default 404 for other paths

app.listen(PORT, '0.0.0.0', () => {
    console.log('Ultra-optimized server running on port', PORT);
});
