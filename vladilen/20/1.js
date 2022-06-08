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



const fetchNames = () => {
    const result = fetch(USERS_URL, {
        method: 'GET'
    })
    
    result
        .then((resolve) => {
            showLoader()

            if (!resolve.ok) {
                throw new Error(`Status: ${resolve.status}`)
            }
            return resolve.json()    
        })
        .then((json) => {
            console.log(json)
            json.forEach(element => {
                const newUser = createUserElement(element.name)
                dataContainer.append(newUser)
            })        
        })
        .catch((error) => {
            console.log(error)
        })
        .finally(() => {
            showLoader()
        })
}

fetchNames()