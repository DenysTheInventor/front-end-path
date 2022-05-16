const getDateFormat = (date, separator = '.') => {
    const currentDay = date.getDate() < 10 
        ? '0' + date.getDate() 
        : date.getDate() 
    const currentMonth = date.getMonth() < 10 
        ? '0' + ( date.getMonth() + 1 ) 
        : date.getMonth() + 1
    const currentYear = date.getFullYear()

    return currentDay + separator + currentMonth + separator + currentYear
}

const addDays = (date, days) => {
    const timestamp = days * 1000 * 60 * 60 * 24
    const finalDate = new Date(date.getTime() + timestamp)

    return getDateFormat(finalDate, '-')
}

const today = new Date()

console.log(addDays(today, 2))