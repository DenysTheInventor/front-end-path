// Дано число 12345. Найдите произведение цифр этого числа.

const number = '12345'
let result = 1

for (let i = 0; i < number.length; i++) {
    result *= number[i]
}

console.log(result)


// Каждую цифру числа возвести в степень = количеству цифр в числе.
// 1^3 + 5^3 + 3^3 = 1 + 125 + 27 = 153 -  narcisstic
// 1^4 + 6^4 + 5^4 + 2^4 = 1 + 1296 + 625 + 16 = 1938 - not  narcisstic

function isNarcissistic(value) {
    let res = 0
    value = String(value)
    for (let i = 0; i < value.length; i++) {
        res += value[i]**value.length
    }
    console.log(res)
    return res === Number(value)
}

console.log(isNarcissistic(153)) 
console.log(isNarcissistic(1652)) 


// * Описание задачи: Напишите функцию, которая заполняет новый массив предоставленным значением.
// * Ожидаемый результат: (3, 'a') => ['a', 'a', 'a']

let newArray = []
const fillArray = (length, value) => {
    for (let i = 0; i < length; i++) {
        newArray.push(value)
    }
    return newArray
}

console.log(fillArray(3, 'azaza'))