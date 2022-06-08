const user = {
    name: 'Denys',
    progLanguage: 'JavaScript',
    getName() {
        return this.name
    },
    //у стрелочной функции нет this
    getProgLanguage: () => {
        return this.progLanguage
    }
}

console.log(user.getName())

const newGetName = user.getName

// ничего не выведет, т.к. нет привязки к объекту
console.log('NewGetName' ,newGetName())

// выведет undefined, т.к. у стрелочной функции нет this
console.log(user.getProgLanguage())