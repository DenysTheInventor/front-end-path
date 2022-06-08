// Инкапсуляция - скрытие данных от доступа вне класса, либо при наследовании

// public - поля и методы доступны через точку и в дочерних классах
// private - нет доступа через точку или в дочерних классах

class Developer {
    #salary 

    constructor (name, progLang, salary) {
        this.name = name
        this.progLang = progLang
        this.#salary = 3000
    }

    get devSalary() {
        return this.#salary
    }

    set setSalary(salary) {
        this.#salary = salary
    }

    startCoding() {
        console.log(this.#salary)
        console.log(`${this.name} starts coding`)
    }

    printProgLang() {
        console.log(`Programming language: ${this.progLang}`)
    }
}

const dev = new Developer('Denys', 'JavaScript')



console.log(dev)
console.log(dev.name)
dev.startCoding()
dev.printProgLang()

console.log('Getter: ' ,dev.devSalary)

dev.setSalary = 5000

console.log('Getter: ' ,dev.devSalary)


class juniorDeveloper extends Developer {
    constructor(name, progLang) {
        super(name, progLang)
    }
}

const juniorDev = new juniorDeveloper('Kseniia', 'JavaScript')
juniorDev.startCoding()
juniorDev.printProgLang()

// Нет доступа, т.к. поле является private
// console.log(juniorDev.#salary) 