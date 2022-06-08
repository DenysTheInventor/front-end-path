// добавляется в коллстек в общем порядке
console.log('start')

// setTimeout добавляется в callback queue
setTimeout(() => {
    console.log('Привет, я в setTimeout')
}, 1000)

// То, что внутри промиса - синхронный код, а потому console.log('Я в промисе') будет в общем порядке
const promise = new Promise((resolve) => {
    console.log('Я в промисе')

    resolve('Возвращаю результат из промиса')
})

// setTimeout добавляется в callback queue
setTimeout(() => {
    console.log('Привет, я тоже в setTimeout, но подольше!')
}, 2000)

// то, что в then, catch, finally - идет в очередь микрозадач
promise
    .then((result) => {
        console.log(result)
    })

// добавляется в коллстек в общем порядке
console.log('end')

// Порядок ( в цикле ):
// Выполнение макрозадач - выполнение скрипта сверху вниз ( с 1 до последней строчки кода )
// Вызвать все, что есть в очереди микрозадач microtasks queue ( then, catch, finally )
// Вызвать все, что есть в callback queue