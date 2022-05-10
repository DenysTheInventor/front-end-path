// task9.1

const peopleWaiting = ['Кристина', 'Олег', 'Кирилл', 'Мария', 'Светлана', 'Артем', 'Глеб'];

const giveParcel = (arr) => {
    let receiverName = arr.shift()
    let lineLength = arr.length
    return `${receiverName} получил(а) посылку. В очереди осталось ${lineLength} человек.` 
}

const leaveQueueWithoutParcel = (arr) => {
    if (arr.length === 0) {
        return `В очереди никого нет.`
    }

    let notReceivedPerson = arr.pop()
    return `${notReceivedPerson} не получил посылку и покинул очередь.`
}

console.log(giveParcel(peopleWaiting)) 
console.log(giveParcel(peopleWaiting)) 
console.log(giveParcel(peopleWaiting)) 
console.log(leaveQueueWithoutParcel(peopleWaiting)) 
console.log(leaveQueueWithoutParcel(peopleWaiting))
console.log(leaveQueueWithoutParcel(peopleWaiting))
console.log(leaveQueueWithoutParcel(peopleWaiting))
console.log(leaveQueueWithoutParcel(peopleWaiting))


// task9.2

const getSumOfSequence = (num) => {
    let numArray = []
    let sum = 0

    for (let i = 1; i <= num; i++) {
        numArray.push(i)
    }
    sum = numArray[0] + numArray[numArray.length-1]

    return sum
}

console.log(getSumOfSequence(5))


// task9.3

const coffees = ['Latte', 'Cappuccino', 'Americano']

const coffeeName = prompt('Поиск кофе по названию:').toLowerCase()

const findCoffee = (name, coffeeArr = coffees) => {
    if (!name) {
        return 'Пожалуйста, введите название для поиска.'
    }

    const changedCoffees = coffeeArr.map((coffee) => {
        return coffee.toLowerCase()
    })

    const coffeeIndex = changedCoffees.findIndex((coffeeToFind) => {
        return coffeeToFind === name
    })

    if (coffeeIndex >= 0) {
        return `Держите ваш любимый кофе ${coffeeArr[coffeeIndex]}. Он ${coffeeIndex + 1}-й по популярности в нашей кофейне.`
    }
    else {
        return 'К сожалению, такого вида кофе нет в наличии'
    }
}

console.log(findCoffee(coffeeName, coffees))


// task9.4

const coffeesToSell = ['Latte', 'Cappuccino', 'Americano']
const prices = [1.5, 1, 2]

const updatedPrices = prices.map((price) => {
    return price + 0.5
})

coffeesToSell.forEach((name, index) => {
    console.log(`Кофе ${name} сейчас стоит ${updatedPrices[index]} евро`)
})


// task9.5

let clientsEstimations = []

const askClientToGiveEstimation = () => {
    const mark = Number(prompt('Как вы оцениваете нашу кофейню от 1 до 10?'))

    mark >=1 && mark <= 10 ? clientsEstimations.push(mark) : console.log('Введите нужную оценку')
}

for (let i = 0; i < 5; i++) {
    askClientToGiveEstimation()
}

const goodEstimations = clientsEstimations.filter((mark) => {
    return mark > 5
})
const notGoodEstimations = clientsEstimations.filter((mark) => {
    return mark <= 5
})

console.log(`Всего положительных оценок: ${goodEstimations.length}; Всего отрицательных оценок: 
${notGoodEstimations.length}`)


// task9.6

const numbers = [10, 4, 100, -5, 54, 2]

let sum = 0
for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i] ** 3
}

console.log('Sum using for: ', sum)

sum = 0
for (num of numbers) {
    sum += num ** 3
}

console.log('Sum using for of: ', sum)

sum = 0
numbers.forEach((num) => {
    sum += num ** 3
})

console.log('Sum using forEach: ', sum)

sum = 0
sum = numbers.reduce((acc, current) => {
    return acc + current ** 3
}, 0)
console.log('Sum using reduce: ', sum)