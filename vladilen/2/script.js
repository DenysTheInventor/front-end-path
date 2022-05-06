const guessInput = document.querySelector('input')
const guessBTN = document.querySelector('.btn-guess')
const newBTN = document.querySelector('.btn-new')
const timeBTN = document.querySelector('.btn-time')
const clearBTN = document.querySelector('.results-clear')
const sortBTN = document.querySelector('.results-sort')
const alertWindow = document.querySelector('.alert')
const alertMessage = document.querySelector('.alert-message')
const alertCounter = document.querySelector('.alert-counter')
const alertNumbers = document.querySelector('.alert-numbers')
const resultBoard = document.querySelector('ol')
const alertHint = document.querySelector('.alert-hint')
const timerArea = document.querySelector('.timer')

let guessingNumber = 50

let counter = 0
let stopwatch = 0
let stopwatchInterval = 0

let guessNumbers = []
let counterTurns = []

let gameStatus = false

const alertObjects = [
    {
        class: 'alert-wrong',
        text: 'wrong'
    },
    {
        class: 'alert-wrong',
        text: 'Time is over. Start new game'
    },
    {
        class: 'alert-right',
        text: 'Congratulations! You got it right!'
    }
]

const alertHints = ['Last guess was too low!', 'Last guess was too high!', 'Time is over']

guessBTN.addEventListener('click', guessNumber)
newBTN.addEventListener('click', newGame)
clearBTN.addEventListener('click', clearResults)
sortBTN.addEventListener('click', sortResults)
timeBTN.addEventListener('click', speedGame)

showLocal()

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
    gameStatus = false

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
        gameStatus = true
        endGame()
    }
}

function newGame() {
    guessingNumber = generateNumber()
    guessBTN.disabled = false
    timerArea.className = 'timer'
    alertWindow.className = 'alert'
    alertMessage.className = 'alert-message'
    alertHint.className = 'alert-hint'
    newBTN.classList.remove('btn-show')
    alertCounter.innerHTML = ''
    guessNumbers = []
    counter = 0
    resultBoard.innerHTML = ''
    showLocal()
}

function clearResults() {
    if ( counterTurns.length == 0 ) {
        alert('Play the game firstly')
    }
    else {
        localStorage.clear()
        counterTurns = []
        showLocal()
    }
}

function sortResults() {
    if ( counterTurns.length == 0 ) {
        alert('Play the game firstly')
    }
    else {
        counterTurns.sort(function(a, b) {
                return a.turns - b.turns
            }
        )
        localStorage.setItem('results', JSON.stringify(counterTurns))
        resultBoard.innerHTML = ''
        showLocal()
    }
}

function generateNumber() {
    return Math.floor(Math.random() * 100) + 1
}

function endGame() {
    if ( gameStatus == true ) {
        alertMessage.classList.add(alertObjects[2].class)
        alertMessage.innerHTML = alertObjects[2].text
        timeBTN.classList.add('btn-show')
        alertCounter.innerHTML = `You spent <b>${counter}</b> turns`
    }
    else {
        alertMessage.classList.add(alertObjects[1].class)
        alertMessage.innerHTML = alertObjects[1].text
        timeBTN.classList.remove('btn-show')
        counter = 'Failed'
    }    
    alertHint.classList.add('hint-hidden')
    newBTN.classList.add('btn-show')
    guessBTN.disabled = true
    counterTurns.push(turnConstructor(counter))
    localStorage.setItem('results', JSON.stringify(counterTurns))

    clearInterval(stopwatch)
    clearTimeout(stopwatchInterval)
    timeBTN.disabled = false
}

function turnConstructor(turns) {
    let today = new Date();
    let currentDate = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate() + " " + today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds()

    return {
        turns: turns,
        time: currentDate
    }
}

function showLocal() {
    if (localStorage.getItem("results") !== null) {
        counterTurns = JSON.parse(localStorage.getItem('results'))
    
        counterTurns.forEach(element => {
            let liItem = document.createElement('li')
            liItem.innerHTML = element.turns + ' turns. Time: ' + element.time
            resultBoard.append(liItem)
        });
    }
    else {
        resultBoard.innerHTML = ''
    }
}

function speedGame() {
    newGame()
    countSeconds()
}

function countSeconds() {
    let startSeconds = 30
    timeBTN.disabled = true
    timerArea.classList.add('timer-show')
    
    stopwatch = setInterval(() => {
        startSeconds--
        timerArea.innerHTML = startSeconds
    }, 1000)
    stopwatchInterval = setTimeout(() => {
        if ( gameStatus == false ) {
            clearInterval(stopwatch)
            endGame()
        }
        else {
            timeBTN.disabled = false
        }
    }, 30000)
}