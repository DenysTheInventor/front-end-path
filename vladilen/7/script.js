// task5.1

const javaScriptDescription = `JavaScript — мультипарадигменный язык программирования. Поддерживает объектно-ориентированный, императивный и функциональный стили. Является реализацией спецификации ECMAScript. JavaScript обычно используется как встраиваемый язык для программного доступа к объектам приложений.`

const newString = javaScriptDescription.slice(1, javaScriptDescription.length/2).replaceAll('a', 'A').trim().repeat(3)

const middleSymbol = newString[Math.floor(newString.length/2)]

console.log(`Final string: ${newString}; Middle symbol in this string: ${middleSymbol}`)


// task6.1

let clientName = 'Igor'
let clientSpentForAllTime = 110

let clientSpentToday = 25

let discount = 0

if (clientSpentForAllTime > 500) {
    discount = 30
}
else if (clientSpentForAllTime > 300 && clientSpentForAllTime <= 500) {
    discount = 20
}
else if (clientSpentForAllTime > 100 && clientSpentForAllTime <= 300) {
    discount = 10
}
alert(`Вам предоставляется скидка в ${discount}%`)

clientSpentToday -= clientSpentToday*discount/100
clientSpentForAllTime += clientSpentToday

alert(`Спасибо, ${clientName}! К оплате ${clientSpentToday}$. За все время в нашем ресторане вы потратили ${clientSpentForAllTime}$.`)


// task6.2

discount = 0

clientName = prompt('Enter client name').trim()

while(true) {
    clientSpentForAllTime = prompt('Enter client spent all the time')
    clientSpentToday = prompt('Enter client spent today')

    if (clientSpentForAllTime === '' || clientSpentToday === '') {
        alert('Enter value before going further')
        continue
    }

    if (isNaN(clientSpentForAllTime) || isNaN(clientSpentToday)) {
        alert('Сумма, которую клиент потратил за все время и которую потратил сегодня, должна быть числом! Перезагрузите страницу, чтобы повторить попытку.')
    }
    else {
        clientSpentForAllTime = Number(clientSpentForAllTime)
        clientSpentToday = Number(clientSpentToday)
        break
    }
}

clientSpentToday -= clientSpentToday*discount/100
clientSpentForAllTime += clientSpentToday

alert(`Спасибо, ${clientName}! К оплате ${clientSpentToday}$. За все время в нашем ресторане вы потратили ${clientSpentForAllTime}$.`)


// task6.3

const passwordValidator = /^(?=.*\d)(?=.*[A-Z]).{3,20}$/

while (true) {
    const userPassword = prompt('Введите пароль')

    if (userPassword.match(passwordValidator)) {
        alert('Пароль валидный. Добро пожаловать в аккаунт!')
        break
    }
    else {
        alert('Пароль не удовлетворяет условиям! Попробуйте ввести его еще раз.')
    }
}
