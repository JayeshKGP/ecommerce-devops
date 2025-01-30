const express = require('express');
require('dotenv').config();
const fs = require('fs');
const { MongoClient } = require('mongodb');
const app = express();
const PORT = process.env.PORT || 4000;
const mongoURL = process.env.MONGO_URL || 'mongodb://localhost:27017';
const tlsCertPath = "./global-bundle.pem";
const client = new MongoClient(mongoURL, { useNewUrlParser: true, useUnifiedTopology: true,
    retryWrites: false,
    tls: true,
    authMechanism: 'SCRAM-SHA-1',
 });

let collection;
console.log(mongoURL);
client.connect()
    .then(() => {
        console.log('MongoDB connected');
        const db = client.db('user_db');
        collection = db.collection('user_info');
    })
    .catch(err => console.error('MongoDB connection error:', err));

app.get('/', async (req, res) => {
    try {
        const user = await collection.findOne({});
        res.send(user);
    } catch (err) {
        console.error('Error fetching user:', err);
        res.status(500).send('Error fetching user');
    }
});

app.listen(PORT, '0.0.0.0',() => {
    console.log(`Server is running on port ${PORT}`);
});
