// // task add1

// const checkQuestionAnswer = (question, correctAnswer) => {
//     const answer = prompt(question).trim().toLowerCase()

//     if (!answer) {
//         alert('Задай сначала вопрос')
//         return
//     }

//     if (answer === correctAnswer.toLowerCase()) {
//         alert('Ответ правильный')
//     }
//     else {
//         alert('Ответ неверный')
//     }
// }

// checkQuestionAnswer('Арбуз это фрукт или ягода?', 'Ягода')
// checkQuestionAnswer('Сколько в среднем зубов у взрослого человека?', '32')
// checkQuestionAnswer('Как называется самая маленькая птица в мире?', 'Колибри')


// // task add2

// const showSuccessMessage = (message) => {
//     console.log(message)
// }

// const showErrorMessage = (message) => {
//     console.error(message)
// }

// const checkTextOnErrorSymbol = (text, errorSymbol, successCallback, errorCallback) => {
//     let flag = false

//     if (typeof text !== 'string' || typeof errorSymbol !== 'string') {
//         errorCallback(`Передаваемые параметры должны быть строками`)
//         return
//     }
    
//     for (let i = 0; i < text.length; i++) {
//         if (text[i] === errorSymbol) {
//             flag = true
//             errorCallback(`Найден запрещенный символ "${errorSymbol}" под индексом ${i}.`)
//         } 
//     }
    
//     if (flag === false) {
//         successCallback(`В данном тексте нет запрещенных символов`)
//     }

//     return
// }

// const text = 'Привет! Как дела! Давно мы с тобой не виделись.'; 
// checkTextOnErrorSymbol(text, 'а', showSuccessMessage, showErrorMessage);


// task add3

const goals = [8, 1, 1, 3, 2, 1, 5]

const showStatistic = (arr) => {
    let numberOfGoals = arr.reduce ((acc, current) => {
        return Math.max(acc, current)
    })
    console.log(`Самый результативный матч был под номером ${arr.indexOf(numberOfGoals)+1}. В нем было забито ${numberOfGoals} гол(ов).`)

    let lowestScore = Math.min.apply(null, arr.filter(n => n != -1));
    
}

showStatistic(goals)