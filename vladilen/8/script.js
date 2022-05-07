// task1

const str = 'Джаваскрипт - лучший язык программирования!'
const vowelAlphabet = 'аеёиоуыэюя'
let count = 0

const lowerSTR = str.toLowerCase()

for (let i = 0; i < lowerSTR.length; i++) {
    for (let b = 0; b < vowelAlphabet.length; b++) {
        if (lowerSTR[i] === vowelAlphabet[b]) {
            count++
        }
    }
}

console.log(count) // 14


// task2

const basicStr = 'TqhEity'
let newStr = ''

for (i = 0; i < basicStr.length; i++) {
    newStr += `${basicStr[i].repeat(i+1)}-`
}

newStr = newStr.slice(0, newStr.length-1)

console.log(newStr) // "T-qq-hhh-EEEE-iiiii-tttttt-yyyyyyy"


// task3

const thirdStr = 'TqhEity'
newStr = ''

for (i = 0; i < thirdStr.length; i++) {
    newStr += `${thirdStr[i].toUpperCase()}${thirdStr[i].toLowerCase().repeat(i)}-`
}

newStr = newStr.slice(0, newStr.length-1)

console.log(newStr) // "T-Qq-Hhh-Eeee-Iiiii-Tttttt-Yyyyyyy"


// task4

let newValue = Number(prompt('Enter value'))

function isPrime() {
    if (newValue === 2) {
        return 'Простое число'
        
    }
    else if (newValue < 1) {
        return 'Составное число'        
    }
    
    for (let i = 2; i < newValue; i++) {
        if ( newValue%i === 0 ) {
            return 'Составное число'  
        }
    }

    return 'Простое число'  
}

console.log(isPrime(newValue))