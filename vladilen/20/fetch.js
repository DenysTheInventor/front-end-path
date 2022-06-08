// fetch(url) -> promise

const TODOS_URL = 'https://jsonplaceholder.typicode.com/todos/'

// const result = fetch(TODOS_URL, {
//     method: 'GET'
// })

// console.log('Resolve: ', result)

// декодируем данные в формате json .json()

// оператор throw вызывает ошибку раньше catch и передает ее туда

// result
//     .then((response) => {
//         if (!response.ok) {
//             throw new Error('ОШИБКА ЗАПРОСА') 
//         }
//         return response.json()
//     })
//     .then((todos) => {
//         console.log(todos)
//     })
//     .catch((error) => {
//         console.log(error)
//     })

const toggleLoader = () => {
    const loaderHTML = document.querySelector('#loader')
    const isHidden = loaderHTML.hasAttribute('hidden')

    if (isHidden) {
        loaderHTML.removeAttribute('hidden')
    }
    else {
        loaderHTML.setAttribute('hidden', '')
    }
}

const createToDoEl = (text) => {
    const toDoEl = document.createElement('li')
    const toDoElAnchor = document.createElement('a')
          toDoElAnchor.href = '#'
          toDoElAnchor.textContent = text
    
    toDoEl.append(toDoElAnchor)

    return toDoEl
}

const dataContainer = document.querySelector('#data-container')

const getAllToDos = () => {
    toggleLoader()
    const result = fetch(TODOS_URL, {
        method: 'GET'
    })
    
    console.log('Resolve: ', result)

    result
        .then((response) => {
            if (!response.ok) {
                throw new Error('ОШИБКА ЗАПРОСА') 
            }
            return response.json()
        })
        .then((todos) => {
            todos.forEach(element => {
                const toDoHTML = createToDoEl(element.title)
                dataContainer.append(toDoHTML)
            });
        })
        .catch((error) => {
            console.log(error)
        })
        .finally(() => {
            toggleLoader()
        })
}

getAllToDos()