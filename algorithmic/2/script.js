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

// Метод fill
const finalArray = newArray.fill(3, 'a')

console.log(fillArray(3, 'azaza'), finalArray)

// Напишите функцию camelize(str), которая преобразует строки вида «my-short-string» в «myShortString».
// То есть дефисы удаляются, а все слова после них получают заглавную букву.
// camelize("background-color") == 'backgroundColor';

const camelize = (str) => {
    let strArr = str.split('-')

    for (let i = 0; i < strArr.length; i++) {
        strArr[i] = strArr[i].charAt(0).toUpperCase() + strArr[i].slice(1)
    }

    return strArr.join('')
}

function newCamelize(str) {
    return str
      .split('-') // разбивает 'my-long-word' на массив ['my', 'long', 'word']
      .map(
        // Переводит в верхний регистр первые буквы всех элементом массива за исключением первого
        // превращает ['my', 'long', 'word'] в ['my', 'Long', 'Word']
        (word, index) => index == 0 ? word : word[0].toUpperCase() + word.slice(1)
      )
      .join(''); // соединяет ['my', 'Long', 'Word'] в 'myLongWord'
  }

console.log(camelize('background-color'), camelize('-webkit-transition'), camelize('list-style-image'), newCamelize('background-color'))


// Напишите функцию filterRange(arr, a, b), которая принимает массив arr, ищет в нём элементы между a и b и отдаёт массив этих элементов.

// Функция должна возвращать новый массив и не изменять исходный.

const filterRange = (arr, a, b) => {
    return arr.filter((element) => a < element && element < b )
}

console.log(filterRange([1, 2, 3, 4, 5, 6, 7, 8], 3, 7))

