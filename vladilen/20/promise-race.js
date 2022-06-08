// Promise.race(
//     new Promise(),
//     new Promise(),
//     new Promise()
// )

// Promise.race - возвращает самый быстровыполнившийся промис - независми от статуса ( rejected или fullfilled)

const promise1 = new Promise((resolve) => {
    setTimeout(() => {
        resolve('promise1')
    }, 500)
})

const promise2 = new Promise((resolve) => {
    setTimeout(() => {
        resolve('promise2')
    }, 100)
})

const promise3 = new Promise((resolve) => {
    setTimeout(() => {
        resolve('promise3')
    }, 2000)
})

Promise.race([promise1, promise2, promise3])
    .then((result) => {
        console.log('Result: ', result)
    })
    .catch((error) => {
        console.log('Error: ', error)
    })