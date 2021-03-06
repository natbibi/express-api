const filmsData = require('../data');

class Film {
    constructor(data) {
        this.id = data.id;
        this.name = data.name;
        this.director = data.director;
        this.genre = data.genre || 'blockbuster'
    }

    static get all() {
        const films = filmsData.map((film) => new Film(film));
        return films;
    }

    static findById(id) {
        try {
            const filmData = filmsData.filter((film) => film.id === id)[0];
            const film = new Film(filmData);
            return film;
        } catch (err) {
            throw new Error('We don\'t have that film');
        }
    }

    static create(film) {
        const newFilmId = filmsData.length + 1;
        const newFilm = new Film({ id: newFilmId, ...film });
        filmsData.push(newFilm);
        return newFilm;
    }

    destroy() {
        const film = filmsData.filter((film) => film.id === this.id)[0];
        filmsData.splice(filmsData.indexOf(film), 1);  
    }
}

module.exports = Film;