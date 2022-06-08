Array.prototype.myMap = function(callback) {
    const res = []
    for (let index = 0; index < this.length; index++) {
        console.log(this[index], index, this)
        res.push(callback(this[index], index, this))
    }
    return res
}

Array.prototype.myFilter = function(callback) {
    const res = []
    for (let index = 0; index < this.length; index++) {
        if(callback(this[index], index, this)) {
            res.push(this[index])
        }
    }
    return res
}

Array.prototype.myReduce = function(callback, initialValue) {
    console.log(initialValue)

    let acc = initialValue ? initialValue : 0
    for (let index = 0; index < this.length; index++) {
        acc = callback(acc, this[index])
    }
    return acc
}

// MyMap
const testArray = [1, 2, 3, 4]
const objectArray = [{ key: 1, value: 10 },
                     { key: 2, value: 20 },
                     { key: 3, value: 30 }]

console.log(testArray.myMap((i) => i * 2))
console.log(objectArray.myMap((i) => i.key))

// MyFilter
console.log(testArray.myFilter((i) => i > 2))

// MyReduce
console.log(testArray.myReduce((arr, el) => arr += el), 12)

// коллбеки
// область видимости переменных
// методы массивов
// копии объектов
// промисы