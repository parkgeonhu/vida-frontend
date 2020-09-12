const express = require('express');

const app = express();

app.use(express.json());

app.get('/api/test', (req, res) => {
    res.status(200).json({
        success: true
    });
});

app.get('/api/search', (req, res) => {
    res.status(200).json({
        tag : "신촌맛집",
        date : "2020-07-21",
        uploads : {
            user_A : 3,
            user_B : 2,
            user_C : 3,
            user_D : 2,
            user_E : 3,
            user_F : 10,
            user_G : 3,
            user_H : 2,
            user_I : 3,
            user_J : 2,
        }
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