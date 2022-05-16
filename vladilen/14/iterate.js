const goodInfo = {
    id: 1,
    price: 80,
    currency: '$',
    name: 'shoes',
}

console.log('Good ingo: ', goodInfo)

// for in

for (const key in goodInfo) {
    const value = goodInfo[key]
    console.log('Key: ', key, 'Value: ', value)
}

// Object.keys

const keys = Object.keys(goodInfo)
console.log('Keys: ', keys)

// Object.values

const values = Object.values(goodInfo)
console.log('Values: ', values)

// Object.entries

const entries = Object.entries(goodInfo)
console.log('Entries: ', entries)

