// task1

const toPairs = (str) => {
    str.length%2 === 0 ? str : str += '_'
    let arr = []
    for (let i = 0; i < str.length; i += 2) {
        arr.push(str.slice(i, i+2))
    }
    return arr
}

console.log(toPairs('asdfgrhe'), toPairs('abcdefg'))


// task2

const isValidIP = (str) => {
    return !str.split('.').find( ip => { return isNaN(ip) || 0 > ip || ip > 255 || !ip}) 
           ? `${str} is ${true}`  
           : `${str} is ${false}`
}

console.log(isValidIP('0.0.0.0')) // true
console.log(isValidIP('12.255.56.1')) // true
console.log(isValidIP('137.255.156.100')) // true
console.log(isValidIP('')) // false
console.log(isValidIP('abc.def.ghi.jkl')) // false
console.log(isValidIP('1e0.1e1.1e2.2e2')) // false
console.log(isValidIP('12.34.56.-7')) // false


// task3

const splitCamelCase = (str) => {
    let strArr = str.split('')
    let finalArr = []
    strArr.forEach(element => {
        if (element.toUpperCase() === element) {
            finalArr.push(' ', element)
        }
        else {
            finalArr.push(element)
        }
    })
    return finalArr.join('')
}

console.log(splitCamelCase('helloWorld')) // hello World
console.log(splitCamelCase('juniorFrontendDeveloper')) // junior Frontend Developer


// task4

const arrayDiff = (a, b) => {
    a = a.filter((i) => !b.includes(i))
    return a
}

console.log(arrayDiff([1,2,2,2,3], [2, 3])) // [1,3]


// task5

const uniqueInOrder = (iterable) => {
    let result = Array.isArray(iterable) ? iterable : iterable.split('') 
    return result.filter((el, index) => {
        return result[index] !== result[index+1]
    })
}

console.log(uniqueInOrder('AAAABBBCCDAABBB'))
console.log(uniqueInOrder('ABBCcAD'))
console.log(uniqueInOrder([1,2,2,3,3]))