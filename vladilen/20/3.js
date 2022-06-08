const PHOTOS_URL = 'https://jsonplaceholder.typicode.com/photos'
const dataContainer = document.querySelector('#data-container')

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

const createImageElement = (src, title) => {
    const item = document.createElement('li')
          item.classList.add('photo-item')
          item.insertAdjacentHTML('afterbegin', `
            <img class="photo-item__image" src="${src}">
            <h3 class="photo-item__title">
                ${title}
            </h3>
          `)

    return item
}

const getFastestLoadedPhoto = (ids) => {
    showLoader()
    const requests = ids.map(id => fetch(`${PHOTOS_URL}/${id}`))

    Promise.race(requests)
        .then((resolve) => {
            return resolve.json()
        })
        .then((json) => {
            const loadedImage = createImageElement(json.url, json.title)
            dataContainer.append(loadedImage)
        })
        .catch((error) => {
            console.error(error)
        })
        .finally(() => {
            showLoader()
        })
}

getFastestLoadedPhoto([60, 12, 55])