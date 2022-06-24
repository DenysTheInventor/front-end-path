const isEqualSymbols = (str1, str2) => {
    array1 = str1.split('').sort()
    array2 = str2.split('').sort()

    return array1.every((item, index) => item === array2[index])
}

console.log(isEqualSymbols("адрес", "среда")); // true
console.log(isEqualSymbols("ноутбук", "программист")); // false