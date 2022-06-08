// OOP - методология в основе которой лежат объекты, которые созда.тся с помощью сущностей ниже

//Functions and classes

// function Animal(name) {
//     this.name = name

//     this.getName = function() {
//         return this.name
//     }
// }

class Animal {
    constructor(name) {
        this.name = name
    }

    getName() {
        return this.name
    }
}

const cat = new Animal('cat')
const dog = new Animal('dog')
console.log(Animal)
console.log(cat, cat.name, cat.getName())
console.log(dog, dog.name)


