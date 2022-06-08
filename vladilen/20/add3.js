const ALBUMS_URL = 'https://jsonplaceholder.typicode.com/albums'
const dataContainer = document.querySelector('.data-container')

const showLoader = () => {
    const loader = document.querySelector('#loader')
    const isHidden = loader.hasAttribute('hidden')

    if (isHidden) {
        loader.removeAttribute('hidden')
    }
    else {
        loader.setAttribute('hidden', '')
    }
}

const showErrorMessage = () => {
    const errorMessage = document.createElement('span')
          errorMessage.innerText = 'Произошла ошибка в получении данных об альбомах...'
    
    dataContainer.append(errorMessage)
}

const createNewElement = (name) => {
    const item = document.createElement('li')
          item.innerText = name

    return item
}

const renderAlbums = async () => {
    try{
        showLoader()
        const response = await fetch(ALBUMS_URL)

        if(!response.ok) {
            throw new Error('Problems with fetching albums')
        }

        const albums = await response.json()
        albums.forEach(album => {
            const newAlbum = createNewElement(album.title)
            dataContainer.append(newAlbum)
        });
    } catch(error) {
        showErrorMessage()
        console.error(error)
    } finally {
        showLoader()
    }
}

renderAlbums()