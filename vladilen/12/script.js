// task add1

const checkQuestionAnswer = (question, correctAnswer) => {
    const answer = prompt(question).trim().toLowerCase()

    if (!answer) {
        alert('Задай сначала вопрос')
        return
    }

    if (answer === correctAnswer.toLowerCase()) {
        alert('Ответ правильный')
    }
    else {
        alert('Ответ неверный')
    }
}

checkQuestionAnswer('Арбуз это фрукт или ягода?', 'Ягода')
checkQuestionAnswer('Сколько в среднем зубов у взрослого человека?', '32')
checkQuestionAnswer('Как называется самая маленькая птица в мире?', 'Колибри')


// task add2

const showSuccessMessage = (message) => {
    console.log(message)
}

const showErrorMessage = (message) => {
    console.error(message)
}

const checkTextOnErrorSymbol = (text, errorSymbol, successCallback, errorCallback) => {
    let flag = false

    if (typeof text !== 'string' || typeof errorSymbol !== 'string') {
        errorCallback(`Передаваемые параметры должны быть строками`)
        return
    }
    
    for (let i = 0; i < text.length; i++) {
        if (text[i] === errorSymbol) {
            flag = true
            errorCallback(`Найден запрещенный символ "${errorSymbol}" под индексом ${i}.`)
        } 
    }
    
    if (flag === false) {
        successCallback(`В данном тексте нет запрещенных символов`)
    }

    return
}

const text = 'Привет! Как дела! Давно мы с тобой не виделись.'; 
checkTextOnErrorSymbol(text, 'а', showSuccessMessage, showErrorMessage);


// task add3

const goals = [8, 1, 1, 3, 2, -1, 5]

const showStatistic = (arr) => {
    // В 1 и 2 выводе делаю i + 1, чтобы порядковый номер игры начинался с 1, а не с 0

    let numberOfGoals = arr.reduce ((acc, current) => {
        return Math.max(acc, current)
    })
    console.log(`Самый результативный матч был под номером ${arr.indexOf(numberOfGoals)+1}. В нем было забито ${numberOfGoals} гол(ов).`)

    numberOfGoals = Math.min.apply(null, arr.filter(n => n != -1))
    let lowestScoreTable = []
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === numberOfGoals) {
            lowestScoreTable.push(i+1)
        }
    }
    console.log(`Самые нерезультативные матчи были под номерами ${lowestScoreTable.join(',')}. В каждом из них было забито по ${numberOfGoals} мячу(а).`)

    let allGoals = arr.reduce((acc, current) => {
        current === -1 ? current = 0 : current
        return acc + current
    }, 0)
    console.log(`Общее количество голов за сезон равно ${allGoals}`)

    const loses = arr.includes(-1)
    loses ? console.log(`Были автоматические поражения: да`) : console.log(`Были автоматические поражения: нет`)

    numberOfGoals = allGoals / arr.length
    console.log(`Среднее количество голов за матч равно ${numberOfGoals.toFixed(2)}`)

    let sortedArr = [...arr].sort((a, b) => a - b)
    for (i = 0; i < sortedArr.length; i++) {
        if (sortedArr[i] === -1) {
            sortedArr[i] = 'Автоматическое поражение'
        }
    }
    console.log(sortedArr.join(','))
}

showStatistic(goals)


// task add4

const checkMathSymbol = (possibleSymbols, symbolToCheck) => {
    return possibleSymbols.includes(symbolToCheck)
}

const getMathResult = (expression) => {
    const signs = ['+', '-', '*', '/', '<', '>', '=']
    const errors = ['Введено меньше значений, чем нужно', 'Доступная комбинация: число, знак, число', 'Введеный знак не доступен, выберете из списка']

    if (expression.length < 3) {
        return `Ошибка. ${errors[0]}`
    }
    else if (expression.length > 3) {
        expression = expression.filter((value) => {
            return !isNaN(value) || checkMathSymbol(signs, value)
        })
    }

    if (isNaN(expression[0]) || isNaN(expression[2])) {
        return `Ошибка. ${errors[1]}`
    }
    
    if (!checkMathSymbol(signs, expression[1])) {
        return `Ошибка. ${errors[2]}`
    }

    const value1 = Number(expression[0])
    const value2 = Number(expression[2])
    const sign = expression[1]

    let result = sign === '+' ? value1 + value2 :
                 sign === '-' ? value1 + value2 :
                 sign === '/' ? value1 / value2 :
                 sign === '*' ? value1 * value2 :
                 sign === '>' ? value1 > value2 :
                 sign === '<' ? value1 < value2 :
                 value1 === value2
    return result  
}

console.log(getMathResult(['1', '+', 3]))


// // task add5

let finalArray = []
let arr = []
for (let a = 0; a < 3; a++) {
    arr = []
    for (let b = 1; b <= 5; b++) {
        arr.push(b)
    }
    finalArray.push(arr)
}

console.log(finalArray)


// add task 6

const matrix = [
    [ 1, 2, 3 ],
    [ 4, 5, 6 ],
    [ 7, 8, 9 ],
]

// Зная количество
const newMatrix = matrix[0].concat(matrix[1]).concat(matrix[2])

// Не зная количество
let finalArr = []
for (let i = 0; i < matrix.length; i++) {
    finalArr = finalArr.concat(matrix[i])
}

console.log(newMatrix, finalArr)