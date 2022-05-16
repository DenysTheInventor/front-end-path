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

const dateToFormat = new Date()
console.log(getDateFormat(dateToFormat, '-'))