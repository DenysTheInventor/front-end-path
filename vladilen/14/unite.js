const devInfo = {
    age: 25,
    experience: 3
}

const devExtraInfo = {
    height: 180,
    isJunior: false
}

// Объединение объектов через Spread оператор ...
// Просто объединяет, если есть одинаковые ключи - заменяет на значение последнего

const dev = {
    ...devInfo,
    ...devExtraInfo,
    newKey: true
}

console.log(dev)


// Object.assign - более устаревший способ

const dev2 = Object.assign(devInfo, devExtraInfo)

console.log(dev2)