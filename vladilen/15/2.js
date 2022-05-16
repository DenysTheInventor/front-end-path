const giveTalonsInOrder = (patients, orders) => {
    let result = []
    orders.forEach(number => {
        patients.forEach(patient => {
            if (number === patient.id) {
                result.push(patient)
            }
        })       
    })
    return result
}

const ordersArr = [4, 2, 1, 3]
const people = [
   { id: 1, name: "Максим" },
   { id: 2, name: "Николай" },
   { id: 3, name: "Ангелина" },
   { id: 4, name: "Виталий" },
]
 
const result = giveTalonsInOrder(people, ordersArr)
console.log('result', result)