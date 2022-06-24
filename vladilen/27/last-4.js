const isPalindrome = (word) => {
    const wordRight = word.split('')
    const wordLeft = [...wordRight]
    wordLeft.reverse()
    
    return wordRight.every((let, index) => let === wordLeft[index])
}

console.log(isPalindrome("racecar"))
console.log(isPalindrome("programmer"))