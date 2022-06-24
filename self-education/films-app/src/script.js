import { filmsMock } from './filmsMock.js'

const ALL_FILMS = 'all_films'
const FAVOURITE_FILMS = 'favourite_fims'

// local storage initialisation

if (!fromStorage(ALL_FILMS) && !fromStorage(FAVOURITE_FILMS)) {
    toStorage(ALL_FILMS, filmsMock)
    toStorage(FAVOURITE_FILMS, [])
}

// render films list

const storagedFilms = fromStorage(ALL_FILMS)
renderFilmsList(storagedFilms, ALL_FILMS)

//functions

//LS functions
function toStorage(key, value) {
    localStorage.setItem(key, JSON.stringify(value))
}

function fromStorage(key) {
    return JSON.parse(localStorage.getItem(key))
}

//render films function
function renderFilmsList(filmsList, listType) {
    const favouriteListBTN = document.querySelector('.film-cards-container__favourite-films')
    favouriteListBTN.insertAdjacentHTML('afterend', `
        <div id="${listType}" class="film-cards-container"></div>
    `)

    const filmsContainer = document.querySelector('.film-cards-container')

    filmsList.forEach((film) => renderFilmsCard(film, filmsContainer))

    const likeBTNS = document.querySelectorAll('.film-card__button')
    likeBTNS.forEach((btn, index) =>
        btn.addEventListener('click', () => handleLikeBTNClick(filmsList, listType, index)) 
    )
}

function renderFilmsCard(film, targetContainer) {
    const { imgUrl, movieName, releaseYear, isFavourite } = film
    const btnImg = isFavourite ? 'favourite.png' : 'notFavourite.png'

    targetContainer.insertAdjacentHTML('beforeend', `
        <div class="film-card">
            <img src="${imgUrl}" alt="" class="film-card__poster">
            <div class="film-card__title">${movieName}</div>
            <div class="film-card__year">${releaseYear}</div>
            <button class="film-card__button">
                <img class="film-card__button-img" src="./assets/img/${btnImg}" alt="">
            </button>
        </div>
    `)
}

// handle click like btn
function handleLikeBTNClick(filmsList, listType, index) {
    filmsList[index].isFavourite = !filmsList[index].isFavourite

    const filmsListContainer = document.getElementById(listType)
    filmsListContainer.remove()
    renderFilmsList(filmsList, listType)
}