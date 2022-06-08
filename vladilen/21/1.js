const FIRST_TODO_URL = 'https://jsonplaceholder.typicode.com/todos/1'

const getTodo = (callback) => {
    fetch(FIRST_TODO_URL)
        .then((response) => {
            return response.json()
        })
        .then((result) => {
            callback(result)
        })
        .catch((error) => {
            console.error(error)
        })
}

getTodo((todoItem) => console.log(todoItem))