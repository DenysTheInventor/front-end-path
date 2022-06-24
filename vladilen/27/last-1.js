const getLuckyNumber = (start, end) => {
    let results = []

    for (let i = start; i <= end; i++) {
        if(i%3 == 0 && i%7 == 0 && i%2 != 0 && i%5 != 0) {
            results.push(i)
        }
    }

    return results[results.length-1]
}

const luckyNumber = getLuckyNumber(1016, 1937)
console.log(`Lucky number is ${luckyNumber}`)