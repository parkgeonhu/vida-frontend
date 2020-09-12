const express = require('express');

const app = express();

app.use(express.json());

app.get('/api/test', (req, res) => {
    res.status(200).json({
        success: true
    });
});

app.get('*', (req, res) => {
    res.status(404).json({
        success: false,
        message: 'page not found',
    });
});

app.listen(5000, () => {
    console.log('Server on port 5000');
});