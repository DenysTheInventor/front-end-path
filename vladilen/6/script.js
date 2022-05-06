// task1

const existingUserLogin = 'the_best_user'
const existingUserPassword = '12345678'

while(true) {
    const userLogin = prompt('Enter user login').trim()
    const userPassword = prompt('Enter user password').trim()

    if ( userLogin === existingUserLogin && userPassword === existingUserPassword ) {
        alert(`Welcome ${userLogin}`)
        break
    }
    else {
        alert('Something went wrong. Login and(or) password are incorrect')
    }
}

// task2
let correctAnswers = 0
let incorrectAnswers = 0

const test = [
    {
        id: 1,
        question: 'Сколько будет 2 + 2?',
        answer: 4
    },
    {
        id: 2,
        question: 'Сколько будет 2 * 2',
        answer: 4
    },
    {
        id: 3,
        question: 'У Пети было 5 яблок. 3 из них он съел, 1 отдал другу. Сколько яблок у Пети осталось?',
        answer: 1
    },
    {
        id: 4,
        question: 'У Маши было 10 конфет. 2 она съела, 1 отдала другу. После мама дала Маше еще 5 конфет. Сколько в итоге конфет осталось у Маши?',
        answer: 12
    },
    {
        id: 5,
        question: 'Сколько будет 2 + 2 * 2?',
        answer: 6
    }
]

test.forEach(task => {
    let answer = Number(prompt(`Вопрос ${task.id}: ${task.question}`).trim())

    if (answer === task.answer) {
        alert('Ответ верный')
        correctAnswers++
    }
    else {
        alert('Ответ неверный')
        incorrectAnswers++
    }
})

alert(`Конец теста! Правильные ответы - ${correctAnswers}; Неправильные ответы - ${incorrectAnswers}.`)

// task3

const newTest = [
    {
        id: 1,
        question: 'JavaScript появился в 1995 году?',
        answer: true,
        rightAnswer: 'JavaScript появился в 1995 году'
    },
    {
        id: 2,
        question: 'Спецификация JavaScript называется ECMAScript?',
        answer: true,
        rightAnswer: 'Спецификация JavaScript называется ECMAScript'
    },
    {
        id: 3,
        question: 'JavaScript был создан за 1 месяц?',
        answer: false,
        rightAnswer: 'JavaScript был создан больше, чем за 1 месяц'
    }
]

newTest.forEach(task => {
    let answer = (confirm(`Вопрос ${task.id}: ${task.question}`))

    if (answer === task.answer) {
        alert('Ответ верный')
    }
    else {
        alert(`Неверно. ${task.rightAnswer}`)
    }
})