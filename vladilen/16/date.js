const date = new Date()

console.log(date)

console.log(date.getFullYear(), date.getMonth(), date.getDate(), date.getDay())


const startPoint = Date.now()

for (let index = 0; index < 100000000; index++) {
    
}

const endPoint = Date.now()

const difference = endPoint - startPoint

console.log('Difference: ', difference, ' миллисекунд')