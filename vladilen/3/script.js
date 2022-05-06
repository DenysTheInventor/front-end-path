// 8 типов данных
// String (строка)
// Number (число)
// Boolean (true/false)
// Null (пустое значение либо неизвестно)
// Undefined (неопределенное значение)
// Object (объект)
// Symbol
// Bigint (большое число)

// task1

const userAge = 28
console.log('User age: ', userAge, typeof userAge)

const userName = 'Denys'
console.log('User name: ', userName, typeof userName)

const userIsStudent = false
console.log('Is user student? ', userIsStudent, typeof userIsStudent)

const userIsDrunk = null
console.log('Is user drunk? ', userIsDrunk, typeof userIsDrunk)

const userStory = undefined
console.log('User story: ', userStory, typeof userStory)

const user = {
    age: 28,
    name: 'Denys',
    isStudent: false
}
console.log('User: ', user, typeof user)

const userID = Symbol('id')
console.log('User ID: ', userID, typeof userID)

const userFails = BigInt(10)
console.log('User fails ', userFails, typeof userFails)

// task 2

let carAge = 12
let carModel = 'Volvo'
let carIsRusty = false

carAge = '12'
carModel = 1.02
carIsRusty = null

console.log(carAge, carModel, carIsRusty)

// task3

let ageOfPerson1 = 18;
let ageOfPerson2 = '20';
ageOfPerson2 = ageOfPerson1
console.log(ageOfPerson2, typeof ageOfPerson2)

let nameOfAnimal1 = null;
let nameOfAnimal2 = 'Charlie';
nameOfAnimal2 = nameOfAnimal1
console.log(nameOfAnimal2, typeof nameOfAnimal2)

const bestProgrammingLanguage1 = 'JavaScript';
const bestProgrammingLanguage2 = 'Java';
console.log('Переменную с const переопределить нельзя')
console.log(bestProgrammingLanguage1, typeof bestProgrammingLanguage1)
console.log(bestProgrammingLanguage2, typeof bestProgrammingLanguage2)


let initialValue1;
let initialValue2 = 0;
initialValue2 = initialValue1
console.log(initialValue2, typeof initialValue2)

var isJavaScriptProgrammer1 = true;
var isJavaScriptProgrammer2 = false;
console.log('var является устаревшим')
isJavaScriptProgrammer2 = isJavaScriptProgrammer1
console.log(isJavaScriptProgrammer2, typeof isJavaScriptProgrammer2)

let helloText1 = 'Hello!';
let helloText2 = 'Привет!'; 
helloText2 = helloText1
console.log(helloText2, typeof helloText2)