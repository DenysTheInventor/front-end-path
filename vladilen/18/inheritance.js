// Наследование - создание дочерних классов на основе базовых

class Plane {
    constructor(type, numberOfPassenges) {
        this.type = type;
        this.numberOfPassenges = numberOfPassenges;
    }

    startFlight() {
        console.log('Fly!');
    }
}

const plane = new Plane('pass', 100);
console.log(plane)
plane.startFlight()

class MilitaryPlain extends Plane {
    constructor(type) {
        super(type, 0)
        this.numberOfGuns = 0
    }

    setNumberOfGuns(numberOfGuns) {
        this.numberOfGuns = numberOfGuns
    }

    shoot() {
        console.log('Shoot!')
    }
}

const militaryPlain = new MilitaryPlain('military')
militaryPlain.startFlight()
militaryPlain.shoot()
militaryPlain.setNumberOfGuns(4)
console.log(militaryPlain)


// instanceOf - принадлежность объекта к классу

console.log(militaryPlain instanceof MilitaryPlain)