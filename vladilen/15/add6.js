const parseDate = (date) => {
    const dateArray = date.split('.')
    let [day, month, year] = dateArray

    return new Date(year, month, day)
}

const allowVisa = (clients) => {
    const today = Date.now()
    return clients.filter((client) => {
        return client.criminalRecord === false && today < parseDate(client.passportExpiration).getTime()
    })
}

const peopleWithVisa = [
    {
       firstName: 'Stasia',
       lastName: 'Ward',
       criminalRecord: true,
       passportExpiration: '19.06.2023',
    },
    {
       firstName: 'Elliot',
       lastName: 'Baker',
       criminalRecord: false,
       passportExpiration: '04.06.2021',
    },
    {
       firstName: 'Leighann',
       lastName: 'Scott',
       criminalRecord: true,
       passportExpiration: '31.07.2022',
    },
    {
       firstName: 'Nick',
       lastName: 'Pop',
       criminalRecord: false,
       passportExpiration: '31.12.2021',
    },
    {
        firstName: 'Jake',
        lastName: 'Peralta',
        criminalRecord: false,
        passportExpiration: '31.12.2023',
     },
 ];
  
 const result = allowVisa(peopleWithVisa);
 console.log('result', result);