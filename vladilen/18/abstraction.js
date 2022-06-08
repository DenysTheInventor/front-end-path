// Абстракция - использование только тех характеристик объекта, которые наиболее точно представляют его в какой-то системе

class Footballer {
    constructor(name, club) {
        this.name = name
        this.club = club
    }

    shoot() {}
    celebrateGoal() {}
    pass() {}
}

class Forward extends Footballer {
    constructor(name, club) {
        super(name, club)
    }

    shoot() {
        console.log(`Shoot: 100`)
    }

    celebrateGoal() {
        console.log(`Celebrate: Siuuuu`)
    }

    pass() {
        console.log(`Pass: 50`)
    }
}

const forward = new Forward('Huntelaar', 'Ajax')

console.log(forward)