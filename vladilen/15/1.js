const users = [
    {
        username: 'David',
        status: 'online',
        lastActivity: 10
    }, 
    {
        username: 'Lucy',
        status: 'offline',
        lastActivity: 22
    }, 
    {
        username: 'Bob',
        status: 'online',
        lastActivity: 104
    }
 ]

 const onlineUsers = users.filter(user => user.status === 'online')

 let usersOnlineNamesArray = []
 onlineUsers.forEach((item) => {
    usersOnlineNamesArray.push(item.username)
 })

 let usersOnlineNames = usersOnlineNamesArray.join(', ')

 console.log(`Сейчас в онлайн следующие пользователи: ${usersOnlineNames}`)