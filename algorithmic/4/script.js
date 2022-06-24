// 1
const divisibleBy = (arr, divider) => {
    return arr.filter(item => item % divider === 0)
}

console.log(divisibleBy([1, 2, 3, 4, 5, 6], 2))
console.log(divisibleBy([1, 2, 3, 4, 15, 21], 3))


// 2

const twiceAsOld = (dadYears, sonYears) => {
    return Math.abs(sonYears*2 - dadYears)
}

console.log(twiceAsOld(42, 22 ))