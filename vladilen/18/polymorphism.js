// Полиморфизм - одно действие и несколько реализаций

class Animal {
    constructor(name) {
        this.name = name
    }

    makeSound() {

    }
}

class dog extends Animal {
    constructor(name) {
        super(name)
    }

    makeSound() {
        console.log('Bow-bow')
    }
}

class cat extends Animal {
    constructor(name) {
        super(name)
    }

    makeSound() {
        console.log('Meow')
    }
}