const getKiller = (suspectInfo, deadPeople) => {
    for (const key in suspectInfo) {
        if (deadPeople.every((person) => { return suspectInfo[key].includes(person)})) {
            console.log(`Убийца ${key}`)
            return
        }   
    }
    console.log(`Убийцы среди списка подозреваемых нет`)
}

getKiller(
    {
       'James': ['Jacob', 'Bill', 'Lucas'],
       'Johnny': ['David', 'Kyle', 'Lucas'],
       'Peter': ['Lucy', 'Kyle'],
    }, 
    ['Lucas', 'Bill']
 ) // Убийца James
  
getKiller(
    {
       'Brad': [],
       'Megan': ['Ben', 'Kevin'],
       'Finn': [],
    },
    ['Ben']
) // Убийца Megan

getKiller(
    {
       'Brad': [],
       'Megan': ['Kevin'],
       'Finn': [],
    },
    ['Ben']
) // Убийцы среди списка подозреваемых нет