function sayHi(name) {
    console.log(`Hi, ${name}!`)
}

console.log('start')
sayHi('Denys')

setTimeout(() => {
    sayHi('Kseniia')
}, 0)

sayHi('Vlad')
console.log('end')