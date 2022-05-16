// const developer = {
//     // key: value
//     name: 'Debis',
//     job: 'Front-End developer',
//     experience: 24,
//     jobAllinfo: {
//         type: 'Front-End',
//         framework: 'React'
//     }
// }

// console.log('Developer: ', developer)

// // Вызов значения по ключу 2 способа
// // 1 

// console.log('Name: ', developer.name)
// console.log('JobAllInfo: ', developer.jobAllinfo)

// // 2

// console.log('Name: ', developer['name'])
// console.log('JobAllInfo: ', developer['jobAllinfo'])

// const key = 'name'
// console.log(developer[key])


// // Цепочка получения значений
// console.log('1 way, Type: ', developer.jobAllinfo.type)
// console.log('2 way, Type: ', developer['jobAllinfo']['type'])


// // Добавление/удаление/изменение

// const student = {
//     id: 1,
//     programmingLanguage: 'JavaScript',
//     hasExperienceInReact: false,
// }

// // Добавление ключа
// student.experience = 6
// console.log(student)

// // Удаление ключа (delete)
// delete student.hasExperienceInReact
// console.log(student)

// // Изменение значения
// student.experience = 12
// console.log(student)

// 7 - примитивы ( не ссылочный тип данных)
// 1 - не примтив ( ссылочный )

const setName = (entity, value) => {
    if ( typeof entity === 'object') {
        entity.name = 'Den'
    }
    else {
        entity = value
    }
}

const developer = {
    name: 'Denis'
}

let devName = 'Denis'

setName(developer, 'Denchik')
setName(devName, 'Denisius')

console.log('Developer: ', developer)
console.log('Dev name: ', devName)

// Объект - это ссылка. 

// Если сравнивать разные ссылочные значения - выдаст false
console.log({} === {}) // false
// Массив - это тоже объект
console.log([] === []) // false

// Сравниваем ссылки - выдает true
const entity = {}
const entityCopy = entity
console.log(entity === entityCopy) // true