// Все ключи преобразовываются в строку, независимо от начального типа данных

const user = {
    name: 'Denis',
    10: 1234,
    true: true,
    undefined: 'acnskjans'
}

console.log(Object.keys(user))

// Ключи могут перезаписывать друг друга, если они созданы не через Symbol

const dev = {
    name: 'Den',
    name: 'Kseniia',
    name: 'Max'
}

console.log(dev, Object.keys(dev)) // выводится последний


// Создадим уникальный ключ через Symbol

const id = Symbol('id')

const newDev = {
    [id]: 1,
    name: 'Den'
}

console.log(newDev, newDev[id]) 


// in

console.log('name in newDev', 'name' in newDev, newDev.name)
console.log('language in newDev', 'language' in newDev, newDev.language)

console.log('id in newDev', id in newDev, newDev[id])