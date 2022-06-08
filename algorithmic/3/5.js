function isPangram(string){
    let alphArray = 'abcdefghijklmnopqrstuvwxyz'.split('')
    let str = string.toLowerCase().split('')

    const result = alphArray.reduce((acc, i) => {
        if (str.includes(i)) {
            acc.push(i)
        }
        return acc
    }, [])

    return result.length === 26 ? true : false
}

console.log(isPangram('The quick brown fox jumps over the lazy dog'))
console.log(isPangram('This is not a pangram.'))