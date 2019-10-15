const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const PORT = 4000;
const HOST = '0.0.0.0';

const app = express();

app.use(bodyParser.json());

mongoose.connect('mongodb://mongo:27017/docker-node-mongo', {
    useNewUrlParser: true
})
.then(result => {
    console.log('MongoDB Conectado');
})
.catch(error => {
    console.log(error);
});

app.get('/', (req, res) => {
    res.send('Hello World 1234');
});

app.listen(PORT, HOST);