// task1

const myName = 'Denys'
const programmingLanguage = 'JavaScript'
const courseCreatorName = 'Vladilen'
const reasonText = 'Looking for interesting & well-paid job'
const numberOfMonth = 2

let myInfoText = `Всем привет! Меня зовут, ${myName}. 
Сейчас я изучаю язык программирования 
${programmingLanguage} на курсе по ${programmingLanguage} у ${courseCreatorName}.

Я хочу стать веб-разработчиком, потому что ${reasonText}. 
До этого я изучал(а) ${programmingLanguage} ${numberOfMonth} месяцев(а). 
Я уверен(а), что пройду данный курс до конца!`

console.log(myInfoText)

// task2

myInfoText = myInfoText.replace('JavaScript', 'JAVASCRIPT')
console.log(myInfoText)
console.log(`Length of the previous string is ${myInfoText.length} symbols`)
console.log(myInfoText[0], myInfoText[myInfoText.length - 1])

// task3 & task 4

const userName = prompt('Как вас зовут?').trim().toUpperCase()
const userAge = Number(prompt('Сколько вам лет?').trim())
userName.length == 0 || userAge <= 0 ? alert('Reload page and enter correct value') : alert(`Вас зовут ${userName} и вам ${userAge} лет`)

// task5

const userString = prompt('Enter string to cut')
const startSliceIndex = prompt('Enter start index for croping string')
const endSliceIndex = prompt('Enter end index for croping string')

let finalString = userString.slice(startSliceIndex, endSliceIndex)

alert(`Результат: ${finalString}`)

// task6

const userText = prompt('Enter text').trim()
const wordFromText = prompt('Введите слово из текста').trim()

let indexOfWord

userText.includes(wordFromText) ? indexOfWord = userText.indexOf(wordFromText) : alert('There is no such a word inside string. Please try again.')

finalString = userText.slice(0, indexOfWord)

alert(`Result: ${finalString}`)