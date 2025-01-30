const express = require('express');
const app = express();
const PORT = process.env.PORT || 4000;

app.get('/', (req, res) => {
    res.send('Backend is running');
});

app.listen(PORT, '0.0.0.0',() => {
    console.log(`Server is running on port ${PORT}`);
});
