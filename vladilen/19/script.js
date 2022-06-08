const mainFieldListItem = document.querySelector('[data-id="3"]')
console.log(mainFieldListItem)

mainFieldListItem.dataset.id = 8

const mainFieldList = document.querySelector('.main-field__list')
console.log(mainFieldList, mainFieldList.innerHTML, mainFieldList.children)

const createBTN = document.querySelector('.main-lest__btn')
console.log(createBTN, createBTN.innerText)

createBTN.innerText = 'Created'

document.addEventListener('keydown', (event) => {
    const { key } = event
    console.log(key)

    const itemToDelete = document.querySelector(`[data-id="${key}"]`)

    if (itemToDelete) {
        const deleteConfirmation = confirm('Do u really want to delete this task?')
        if (deleteConfirmation) {
            itemToDelete.remove()
        }
    }
})
