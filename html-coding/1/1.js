const FILMS_URL = 'https://swapi.dev/api/films'
const dataContainer = document.querySelector('.data-container')

dataContainer.addEventListener('click', (e) => {
    const { target } = e

    if(target.classList.contains('item-title')) {
        const FILM = target.closest('.data-container__item')
        const relatedCharacters = FILM.querySelector('.related-characters')

        if(relatedCharacters) {
            console.log('Films have been already fetched')
            relatedCharacters.classList.toggle('hide')
        }
        else {
            const FILM_URL = target.nextElementSibling.href
            getRelatedCharacters(FILM_URL, FILM)
        }
    }
})

const toggleLoader = () => {
    const loader = document.querySelector('#loader')
    const isHidden = loader.hasAttribute('hidden')

    isHidden ? loader.removeAttribute('hidden') : loader.setAttribute('hidden', '')
}

const createNewFilm = (film) => {
    const newElement = document.createElement('li')
          newElement.classList.add('data-container__item')
          newElement.insertAdjacentHTML('afterbegin', `
            <span class="item-title">${film.title}</span>
            <a href="${film.url}">Link to movie</a>
            <span class="release-date">${film.release_date}</span>
          `)  
    
    return newElement 
}

const createCharacter = (name) => {
    const newElement = document.createElement('li')
          newElement.classList.add('related-character')
          newElement.insertAdjacentHTML('afterbegin', `
            <span class="character-name">${name}</span>
          `)  
    
    return newElement 
}

const appendCharactersInList = (characters, film) => {
    const container = document.createElement('ul')
          container.classList.add('related-characters')
    
    characters.forEach((person) => {
        const newCharacter = createCharacter(person.name)
        container.append(newCharacter)
    })

    film.append(container)
}

const fetchNames = async (urls, film) => {
    try {
        const resolve = await Promise.all(urls)
        const result = resolve.map(url => url.json())
        const persons = await Promise.all(result)

        appendCharactersInList(persons, film)
    } catch(error) {
        console.log(error)
    }
}

const getFilms = async () => {
    try { 
        toggleLoader()
        const resolve = await fetch(FILMS_URL)

        if(!resolve.ok) {
            throw new Error('Problems with fetching films data')
        }

        const result = await resolve.json()
        const films = result['results']

        films.forEach(film => {
            const newFilm = createNewFilm(film)
            dataContainer.append(newFilm)
        })
    } catch(error) {
        console.log(error)
    } finally {
        toggleLoader()
    }
}

const getRelatedCharacters = async (url, film) => {
    try {
        const resolve = await fetch(url)

        if(!resolve.ok) {
            throw new Error('Problems with fetching characters data')
        }

        const result = await resolve.json()
        const characters = result['characters']
        const fetchURLS = characters.map((url) => fetch(url))
        fetchNames(fetchURLS, film)
    } catch(error) {
        console.error(error)
    }
}

getFilms()