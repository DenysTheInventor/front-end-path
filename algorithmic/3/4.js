const roman = {
    'I': 1,
    'V': 5,
    'X': 10,
    'L': 50,
    'C': 100,
    'D': 500,
    'M': 1000,
    combinations: {
        'IV': 4,
        'IX': 9,
        'XL': 40,
        'XC': 90,
        'CD': 400,
        'CM': 900
    }
}

const romanToInt = (roman, number) => {
    if (number.length < 1 || number.length > 15) {
        return 'Not valid number'
    }

    let numArr = number.split('')
    let combos = 0

    Object.keys(roman.combinations).forEach(combo => {
        for (let i = 0; i < numArr.length; i++) {
            if (numArr[i]+numArr[i+1] === combo) {
                combos += roman.combinations[combo]
                numArr[i] = ''
                numArr[i+1] = ''
            }
        }
    })

    nums = numArr.reduce((a, e) => {
        if (e in roman) {
            a += roman[e]
        }
        return a
    }, 0)

    const finalResult = nums + combos

    return finalResult
}

const testRoman = 'III'
const testRoman2 = 'LVIII'
const testRoman3 = 'MCMXCIV'
const testRoman4 = 'XXXIX'

console.log(testRoman, romanToInt(roman, testRoman))
console.log(testRoman2, romanToInt(roman, testRoman2))
console.log(testRoman3, romanToInt(roman, testRoman3))
console.log(testRoman4, romanToInt(roman, testRoman4))
