const express = require('express');
const router = express.Router();

const Film = require('../models/film');

router.get('/', (req, res) => {
    const filmsData = Film.all;
    res.send(filmsData);
});

router.get('/secret', (req, res) => {
    res.send('hello again');
});

router.get('/:id', (req, res) => {
    try {
        const filmID = parseInt(req.params.id)
        const selectedFilm = Film.findById(filmID);
        res.send(selectedFilm);
    } catch (err) {
        console.log(err);
        res.status(404).send(err);
    }
});

router.post('/', (req, res) => {
    const data = req.body;
    const newFilm = Film.create(data);
    res.status(201).send(newFilm);
});

router.delete('/:id', (req, res) => {
    const filmID = parseInt(req.params.id)
    const filmToDestroy = Film.findById(filmID);
    filmToDestroy.destroy()
    res.status(204).send();
});

module.exports = router;