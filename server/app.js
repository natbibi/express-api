const express = require('express')
const app = express()
const bodyParser = require('body-parser')

app.use(bodyParser.json());

app.get('/', (req, res) => {
    res.status(200).send('Welcome to films.org!')
})

const filmRoutes = require('./controllers/films');
app.use('/films', filmRoutes);

app.post('/', (req, res) => {
    res.status(405).send('Not allowd!');
});

module.exports = app;