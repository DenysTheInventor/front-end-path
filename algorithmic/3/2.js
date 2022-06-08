const check = (arr, checkNumber) => {
    let firstValue;
    let result = []
    for (let index = 0; index < arr.length; index++) {
        firstValue = arr[index]
        for (let n = index + 1; n < arr.length; n++) {
            if (firstValue + arr[n] === checkNumber) {
                result.push([firstValue, arr[n]])
            }
        }
    };

    return result
}

console.log(check([2, 12, -1, 6, 8, 9, 15], 14))

let count = 0

while (count < 3) {
    let newStudent = prompt('Enter new student name')
    alert(newStudent)

    count++
}