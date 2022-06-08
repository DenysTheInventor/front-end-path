const calcForResult = (arr) => {
    let result = 0
    arr.forEach(element => {
        if (element > 0 && element%2 !== 0) {
            result += element
        }
    })

    return result
}

const calcReduceResult = (arr) => {
    return arr.reduce((acc, item) => {
        if (item > 0 && item%2 !== 0) {
            acc += item
        }
        return acc
    }, 0)
}

const calcReduceShortResult = (arr) => {
    return arr.reduce((a, i) => i > 0 && i%2 !== 0 ? a += i : a)
}

console.log(calcForResult([7, 2, -10, 8, -1, 3, 5, 9]))
console.log(calcReduceResult([7, 2, -10, 8, -1, 3, 5, 9]))
console.log(calcReduceShortResult([7, 2, -10, 8, -1, 3, 5, 9]))