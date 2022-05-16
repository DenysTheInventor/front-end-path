const convertMsToDays = (ms) => {
    return Math.floor(ms / (1000 * 60 * 60 * 24)) 
}

const getDaysBeforeBirthday = (nextBirthdayDate) => {
    const today = Date.now()
    const difference = convertMsToDays(nextBirthdayDate.getTime() - today)

    return difference
}

const myBirthday = new Date(2022, 5, 22)

console.log(getDaysBeforeBirthday(myBirthday))