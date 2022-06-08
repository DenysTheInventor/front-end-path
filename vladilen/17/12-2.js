const dog = {
    name: "Чарли",
    type: "Собака",
    makeSound() {
        return "Гав-Гав"
    }
}
  
const bird = {
    name: "Петя",
    type: "Воробей",
    makeSound() {
        return "Чик-чирик"
    }
}

function makeDomestic(isDomestic) {
    typeof isDomestic === 'boolean' ? this.isDomestic = isDomestic : alert('Only boolean type')
    console.log(`${this.type} по имени ${this.name} говорит ${this.makeSound()}`)
    return this
}

// call
console.log(makeDomestic.call(bird, false))

// apply
console.log(makeDomestic.apply(bird, [false]))

//bind
const makeBirdDomestic = makeDomestic.bind(dog, true)
console.log(makeBirdDomestic())