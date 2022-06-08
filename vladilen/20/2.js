const USERS_URL = 'https://jsonplaceholder.typicode.com/users'
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

const createUserElement = (name) => {
    const item = document.createElement('li')
    const itemAnchor = document.createElement('a')
          itemAnchor.href = '#'
          itemAnchor.innerText = name
    
    item.append(itemAnchor)

    return item
}


const getUsersByIds = (ids) => {
    showLoader()
    const requests = ids.map(id => { fetch(`${USERS_URL}/${id}`) })
    console.log(requests)

    Promise.all(requests)
        .then((resolve) => {
            return Promise.all(resolve.map(item => item.json()))
        })
        .then((json) => {
            json.forEach((item) => {
                const newItem = createUserElement(item.name)
                dataContainer.append(newItem)
            })
        })
        .catch((error) => {
            console.error(error)
        }) 
        .finally(() => {
            showLoader()
        })
}

getUsersByIds([5, 6, 2, 1])