const unique = (arr) => {
    let result = []

    arr.forEach(element => {
       if(!result.includes(element)) {
        result.push(element)
       } 
    })

    return result
}

console.log(unique([1, 1, 2, 2, 4, 2, 3, 7, 3]))