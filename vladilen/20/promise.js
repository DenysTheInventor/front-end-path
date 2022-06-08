// setTimeout(() => {
//     console.log('setTimeout')
// }, 3000)

// console.log(developer)

// setInterval(() => {
//     console.log('setInterval')
// }, 1000)

// pending - ожидание
// fullfilled - удачное выполнение
// rejected - выполнение с ошибкой

const developer = {
    name: 'Denys',
    isDev: true
}

const promise = new Promise((resolve, reject) => {
    if (developer.isDev) {
        setTimeout(() => {
            resolve(`${developer.name} является разработчиком`)
        }, 3000)
    }
    else {
        reject(`${developer.name} не является разработчиком`)
    }
}) 

console.log(promise)

// then, catch, finally

promise
    .then((success) => {
        console.log('Success message: ', success)
    })
    .catch((error) => {
        console.log('Error message: ', error)
    })
    .finally(() => {
        console.log('Finally')
    })