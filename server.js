const express = require('express');
const path = require('path');

const app = express();

app.get('/', (req, res) => {
    res.status(200).sendFile(path.join(__dirname, 'index.html'));
});

app.listen(50451, () => {
    console.info('Running on port 50451');
});

app.use((err, req, res, next) => {
    switch (err.message) {
case 'NoCodeProvided':
    return res.status(400).send({
        status: 'ERROR',
        error: err.message,
    });
default:
    return res.status(500).send({
        status: 'ERROR',
        error: err.message,
    });
}
});

// Routes
app.use('/api/discord', require('./api/discord'));