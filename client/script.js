const formSubmit = document.querySelector("#sub-btn-1")
formSubmit.addEventListener("click", filmGenerator)

function filmGenerator(e) {
    e.preventDefault();
    console.log(e)
    fetch('http://localhost:3000/films')
        .then(res => res.json())
        .then(addFilmToPage)
        .catch(err => console.warn('OH NO, something went wrong!', err))
}

function addFilmToPage(filmData) {
    console.log(filmData)
    const showFilm = document.body.querySelector('div')
    showFilm.innerText = filmData[randomIndex()].name

    function randomIndex() {
        return Math.floor(Math.random() * filmData.length)
    }
}


// on 'add film' submit, post data to database
const formSubmit = document.querySelector("#sub-btn")
formSubmit.addEventListener("click", filmGenerator)