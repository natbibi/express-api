const express = require('express');
const router = express.Router();

const Film = require('../models/film');

router.get('/', (req, res) => {
    const filmsData = Film.all;
    res.send(filmsData);
});

// router.get('/:id', (req, res) => {
//     const filmID = parseInt(req.params.id)
//     const selectedFilm = Film.findById(filmID);
//     res.send(selectedFilm);
// });

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
    
});

router.delete('/:id', (req, res) => {

});

module.exports = router;