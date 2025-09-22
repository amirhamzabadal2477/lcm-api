const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

// Remove all bloat for maximum speed
app.disable('x-powered-by');

// Ultra-fast GCD (minimal operations)
function gcd(a, b) {
    while (b) [a, b] = [b, a % b];
    return a;
}

app.get('/amirhamzabadal2477_gmail_com', (req, res) => {
    const x = +req.query.x, y = +req.query.y;
    
    // Ultra-fast validation
    if (!(x > 0 && y > 0 && x === (x | 0) && y === (y | 0))) {
        res.setHeader('Content-Type', 'text/plain');
        return res.send('NaN');
    }
    
    res.setHeader('Content-Type', 'text/plain');
    res.send(((x * y) / gcd(x, y)).toString());
});

app.listen(PORT, '0.0.0.0');
