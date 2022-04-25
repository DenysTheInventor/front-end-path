const guessInput = document.querySelector('input')
const guessBTN = document.querySelector('.btn-guess')
const newBTN = document.querySelector('.btn-new')
const alertWindow = document.querySelector('.alert')
const alertMessage = document.querySelector('.alert-message')
const alertCounter = document.querySelector('.alert-counter')
const alertNumbers = document.querySelector('.alert-numbers')
const resultBoard = document.querySelector('ol')
const alertHint = document.querySelector('.alert-hint')

let guessingNumber = generateNumber()

let guessNumbers = []
let counter = 0
let counterTurns = []

const alertObjects = [
    {
        class: 'alert-wrong',
        text: 'wrong'
    },
    {
        class: 'alert-right',
        text: 'Congratulations! You got it right!'
    }
]

const alertHints = ['Last guess was too low!', 'Last guess was too high!']

guessBTN.addEventListener('click', guessNumber)
newBTN.addEventListener('click', newGame)

if (localStorage.getItem("results") !== null) {
    counterTurns = localStorage.getItem('results')

    counterTurns.forEach(element => {
        let liItem = document.createElement('li')
        liItem.innerHTML = element
        resultBoard.append(liItem)
    });
}

function guessNumber() {
    let inputValue = guessInput.value
    guessInput.value = ''

    if ( isNaN(inputValue) || Number.isInteger(inputValue) || inputValue < 1 || inputValue > 100) {
        alert('Enter right value')
        return
    }

    counter++

    guessNumbers.push(inputValue)
    alertNumbers.innerHTML = ''

    guessNumbers.forEach(number => {
        alertNumbers.innerHTML += number + ' '
    });

    alertWindow.classList.add('alert-show')

    if ( guessingNumber < inputValue ) {
        alertMessage.classList.add(alertObjects[0].class)
        alertMessage.innerHTML = alertObjects[0].text
        alertHint.innerHTML = alertHints[1]
    }
    else if ( guessingNumber > inputValue ) {
        alertMessage.classList.add(alertObjects[0].class)
        alertMessage.innerHTML = alertObjects[0].text
        alertHint.innerHTML = alertHints[0]
    }
    else {
        endGame()
    }
}

function newGame() {
    guessingNumber = generateNumber()
    guessBTN.disabled = false
    alertWindow.className = 'alert'
    alertMessage.className = 'alert-message'
    alertHint.className = 'alert-hint'
    newBTN.classList.remove('btn-show')
    alertCounter.innerHTML = ''
    guessNumbers = []
    counter = 0
}

function generateNumber() {
    // return Math.floor(Math.random() * 100) + 1
    return 90
}

function endGame() {
    alertMessage.classList.add(alertObjects[1].class)
    alertMessage.innerHTML = alertObjects[1].text
    alertHint.classList.add('hint-hidden')
    newBTN.classList.add('btn-show')
    guessBTN.disabled = true
    alertCounter.innerHTML = `You spent <b>${counter}</b> turns`
    counterTurns.push(counter)
    localStorage.setItem('results', counterTurns);
}