// this - Object

console.log(this)

const user = {
    name: 'Denys',
    dateOfBirth: 1993,
    getName() {
        return this.name
    },
    calcAge() {
        const currentYear = new Date().getFullYear()
        return currentYear - this.dateOfBirth
    },
    getAllInfo: function() {
        const age = this.calcAge()
        console.log('Name:', this.name, 'Age:', age)
    }
}

console.log(user.getName())
console.log(user.calcAge())
console.log(user.getAllInfo())


// bind, call, apply


// call
const user2 = {
    name: 'Igor'
}

const user2name = user.getName.call(user2)

console.log('User2name:' ,user2name)

const mainHero = {
    fullName: 'SpiderMan',
    health: 65,
    strength: 5
}

const enemy = {
    fullName: 'Magneto',
    health: 90,
    strength: 15
}

function printHeroInfo(extraInfo = '') {
    console.log(this)
    console.log(`Name: ${this.fullName}, Strength: ${this.strength}, Health: ${this.health}, ${extraInfo}`)
}

// не работает для стрелочных функций

// доп параметр в apply передаются как в обычной функции
printHeroInfo.call(enemy, 'Role: Enemy')

// доп параметр в apply передаются как массив
printHeroInfo.apply(enemy, ['Role: Enemy'])

// bind не вызывает функцию, а создает новую с новым контекстом
const bindedPrintHero = printHeroInfo.bind(mainHero, 'Role: Hero')

bindedPrintHero()