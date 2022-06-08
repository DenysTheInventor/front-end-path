// Для доступа к статическому методу не нужно создавать экземпляр, а вызываем класс и его статистический метод/параметр
// Static создают поля и методы, которые принадлежат конкретному классу
// Внутри Static нельзя использовать this
// Через Static можно создать начальные параметры
// Static можно сделать private

class Car {
    static isCar(car) {
        return car instanceof Car
    }

    static #initialParams = {
        name: 'Audi',
        maxSpeed: 150
    }

    constructor(name, maxSpeed) {
        this.name = name || Car.#initialParams.name
        this.maxSpeed = maxSpeed || Car.#initialParams.maxSpeed
    }

    drive() {
        console.log(`${this.name} is driving now`)
    }
}

const car = new Car('BMW', 300)
console.log(car)

console.log(Car.isCar(car)) 

const newCar = new Car()
console.log(newCar)