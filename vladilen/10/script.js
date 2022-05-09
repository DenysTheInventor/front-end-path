// task8.1

// Function declaration
function getName1(name) {
    return `Имя равно ${name}`
}

console.log(getName1('Denys'))

// Function expression
const getName2 = function(name) {
    return `Имя равно ${name}`
}

console.log(getName2('Vlad'))

// Arrow function
const getName3 = (name) => {
    return `Имя равно ${name}`
}

console.log(getName3('Kseniia'))


// task8.2

const getSumOfNumbers = (number, type = 'odd') => {
    let i = 0
    let sum = 0
    let counter = 2

    if (type === 'odd') {
        i = 1
    } else if (type === 'even') {
        i = 0
    } else {
        counter = 1
    }

    for (i; i <= number; i += counter) {
        sum += i
    }

    return sum
}

console.log(getSumOfNumbers(5, ''))
console.log(getSumOfNumbers(5))
console.log(getSumOfNumbers(5, 'odd'))
console.log(getSumOfNumbers(5, 'even'))


// task8.3

const getDivisorsCount = (number = 1) => {
    if (!Number.isInteger(number) || number <= 0) {
        return 'number должен быть целым числом и больше нуля!'
    }

    let counter = 0
    let dividers = ''
    for (let i = 1; i <= number; i++) {
        if (number%i == 0) {
            counter++
            dividers += `${i},`
        }    
    }
    return `Количество делителей: ${counter}. Делители - ${dividers.slice(0, dividers.length-1)}`
}

console.log(getDivisorsCount(0))
console.log(getDivisorsCount(8))