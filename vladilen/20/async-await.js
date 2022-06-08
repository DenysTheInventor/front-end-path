// try catch finally растет вправо, если каждое последующее действие зависит от предыдущего

// const USERS_URL = 'https://jsonplaceholder.typicode.com/users'
// const TODOS_URL = 'https://jsonplaceholder.typicode.com/todos'

// fetch(USERS_URL)
//     .then((response) => {
//         return response.json()
//     }).then((users) => {
//         console.log(users)
//         const firstUserID = users[0]?.id
//         console.log(firstUserID)
//         fetch(`${TODOS_URL}?userId=${firstUserID}`)
//             .then((response) => {
//                 return response.json()
//             })
//             .then((todos) => {
//                 console.log(todos)
//             })
//             .catch((error) => {
//                 console.error(error)
//             })
//     }).catch((error) => {
//         console.error(error)
//     })


// async автоматически делает так, чтобы функция возвращала промис
// await прописывается внутри функции с async

// async & await позволяют коду не расти вправо и обрабатывать линейно

const USERS_URL = 'https://jsonplaceholder.typicode.com/users'
const TODOS_URL = 'https://jsonplaceholder.typicode.com/todos'

const getTodosWithUserData = async () => {
    try {
        const response = await fetch(USERS_URL)

        if(!response.ok) {
            throw new Error('Ошибка в получении данных о пользователе')
        }

        const users = await response.json()
        console.log(users)
        const firstUserID = users[0]?.id

        const todosResponse = await fetch(`${TODOS_URL}?userId=${firstUserID}`)

        if(!todosResponse.ok) {
            throw new Error('Ошибка в получении данных о пользователе')
        }

        const todos = await todosResponse.json()
        console.log(todos)
    } catch (error) {
        console.log(error)
    } finally {
        console.log('finally')
    }
}

const promise = getTodosWithUserData()
console.log(promise)

// try catch finally

