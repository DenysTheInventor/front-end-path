// task7.1

let health = prompt('Введите число параметра "здоровье" для персонажа')
console.log(health)
if (isNaN(health) || health <= 0 || !health) {
   alert('Параметр "здоровье" должен являться числом и быть больше нуля!')
   console.log(health, 'here')
} else {
   alert(`Параметр "здоровье" равен ${health}`)
   console.log(health, 'here')
} 


// // task7.2

// const temperatureInCelsius = Number(prompt('Введите температуру в градусах Цельсия'))
// console.log(temperatureInCelsius, typeof temperatureInCelsius)
// if (temperatureInCelsius === 0) {
//    alert('0 градусов по Цельсию - это температура замерзания воды')
// } else if (temperatureInCelsius > 0) {
//    alert('Для замерзания воды температура должна быть 0 градусов по Цельсию либо ниже');
// }

// const temperatureInFahrenheit = (temperatureInCelsius) * 9 / 5 + 32
// console.log(temperatureInFahrenheit)
// alert(`${temperatureInCelsius} градусов по Цельсию - это ${temperatureInFahrenheit} по 
// Фаренгейту.`)


// // task7.3

// const salaryOfJuniorDeveloper = 500
// const numberOfJuniorDevelopers = 3
// let taxPercentage = 13
// let totalJuniorDevelopersSalary = 0

// const salaryWithTax = salaryOfJuniorDeveloper-(salaryOfJuniorDeveloper*taxPercentage/100)
                
// for (let i = 0; i < numberOfJuniorDevelopers; i += 1) {
//    console.log(totalJuniorDevelopersSalary)
//    totalJuniorDevelopersSalary += salaryWithTax;
// }
// console.log('totalJuniorDevelopersSalary', totalJuniorDevelopersSalary)


// // task7.4

// let numbers = [10, 4, 100, -5, 54, 2]
// let sum = 0

// // Через цикл for
// for (let i = 0; i < numbers.length; i += 1) {
//     console.log(numbers[i], numbers[i] ** 3)
//     sum += numbers[i] ** 3
// } 
// console.log(sum) // 1158411

// // Через цикл for of
// sum = 0
// for (let num of numbers){
//     num = num ** 3
//     sum += num
//     console.log(num, sum)
// } 
// console.log(sum) // 1003904306910622800