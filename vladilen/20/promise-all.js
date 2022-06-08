// Promise.all(
//     new Promise(),
//     new Promise(),
//     new Promise()
// )

// fullfilled - тогда когда все промисы внутри со статусом fullfilled
// rejected - когда хотя бы один промис внутри будет со статусом rejected

const TODOS_URL = 'https://jsonplaceholder.typicode.com/todos/'
const todosIds = [43, 10, 5, 100, 101]

const dataContainer = document.querySelector('#data-container')

const createToDoEl = (text) => {
    const toDoEl = document.createElement('li')
    const toDoElAnchor = document.createElement('a')
          toDoElAnchor.href = '#'
          toDoElAnchor.textContent = text
    
    toDoEl.append(toDoElAnchor)

    return toDoEl
}

const getTodosIds = (ids) => {
    const requests = ids.map((id) => fetch(`${TODOS_URL}/${id}`))
    Promise.all(requests)
        .then((responses) => {
            const dataResults = responses.map((response) => response.json())
            return Promise.all(dataResults)
        })
        .then((todos) => {
            todos.forEach((el) => {
                const todoEl = createToDoEl(el.title)
                dataContainer.append(todoEl)
            })
        })
        .catch((err) => {
            console.log(err)
        })
}

getTodosIds(todosIds)